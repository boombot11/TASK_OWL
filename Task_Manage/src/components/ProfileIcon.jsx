import React from "react";
const handleProfileClick = () => {
  window.location.href='/profile'
};

const ProfileIcon = () => {
  return (
    <div className="p-4 cursor-pointer relative z-[1000]" onClick={handleProfileClick}>
      <img
        src="https://www.gravatar.com/avatar?d=mp&s=40"
        alt="Profile"
        className="rounded-full w-10 h-10 border-2 border-blue-500"
      />
    </div>
  );
};

export default ProfileIcon;
