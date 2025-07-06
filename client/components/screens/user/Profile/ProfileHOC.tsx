import dynamic from "next/dynamic";

const Profile=dynamic(()=>import("./Profile"),{ssr:true})

const ProfileHOC=()=>{
      return <Profile/>
}

export default ProfileHOC