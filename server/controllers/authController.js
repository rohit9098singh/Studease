import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import response from "../utils/responseHandler.js";
import dotenv from "dotenv";
import crypto from "crypto";
import { sendResetPasswordLinkToEmail } from "./emailConfiguration.js";
dotenv.config();

export const register = async (req, res) => {
  try {
    const { email, name, password, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "error",
        message: "User Already Exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });
    await newUser.save();

    return res.status(200).json({
      status: "success",
      message: "User Registered Successfully.",
      data: {
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return response(res, 400, "Invalid email or password");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return response(res, 400, "Invalid password");
    }
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("access_token", accessToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    return response(res, 200, "Login successful", {
      accessToken,
      role: user.role,
    });
  } catch (error) {
    return response(res, 500, "Internal Server Error", error.message);
  }
};

export const logout = async (req, res) => {
  try {
    if (!req.cookies["access_token"]) {
      return response(res, 400, "No active session found");
    }
    res.clearCookie("access_token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return response(res, 200, "Logged out successfully");
  } catch (error) {
    return response(res, 500, "Internal Server Error", error.message);
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return response(res, 400, "No account found with this email");
    }
    const resetPasswordToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpires = new Date(Date.now() + 3600000);
    await user.save();
    await sendResetPasswordLinkToEmail(user.email, resetPasswordToken);

    return response(
      res,
      200,
      "A password reset link has been send to your email address"
    );
  } catch (error) {
    return response(res, 500, "Internal server error", error.message);
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    console.log("Request body is getting printed", req.body);

    const { newPassword, confirmPassword } = req.body; 
    console.log("new password",newPassword)
    console.log(" confirmpassword",confirmPassword)

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }, 
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired reset password token" });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;

    
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    
    return res.status(200).json({
      message: "Your password has been reset successfully. You can now log in with your new password."
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};


export const checkUserAuth = async (req, res) => {
  try {
    const userId = req?.id;
    if (!userId) {
      return response(
        res,
        400,
        "Unauthorized, please login to access our page"
      );
    }

    const user = await User.findById(userId).select(
      "name email  role  profilePicture"
    );

    if (!user) {
      return response(res, 403, "User not found");
    }

    return response(res, 200, "User retrieved successfully", user);
  } catch (error) {
    return response(res, 500, "Internal Server Error", error.message);
  }
};
