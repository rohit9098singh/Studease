import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  resetPasswordExpires: { type: Date, default: null },
  resetPasswordToken: { type: String, default: null },
  googleId: { type: String },
  profilePicture: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

const User = mongoose.model("User", userSchema);

export default User;