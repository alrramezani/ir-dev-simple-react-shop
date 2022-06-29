import React from "react";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { ProfileContainer } from "./style";
const Profile = () => {
  return (
    <ProfileContainer>
      <div className="icon_box">
        <FiShoppingBag />
        <span className="count">4</span>
      </div>
      <div className="icon_box">
        <AiOutlineHeart />
        <span className="count">4</span>
      </div>
      <div className="icon_box">
        <FiUser />
        <span className="count">4</span>
      </div>
      <div>
        <p className="username">Alexander</p>
        <p className="balance">Balance:500$</p>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
