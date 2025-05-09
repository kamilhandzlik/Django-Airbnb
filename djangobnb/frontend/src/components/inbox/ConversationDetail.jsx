import React from "react";
import "./ConversationDetail.css";
import ProfilePic from "../images/temporary/profile_pic.jpg";

const ConversationDetail = () => {
  return (
    <>
      <div className="conversation-detail-container">
        <div className="message-diffrent-user">
          {/* TODO change Profile Pic to proper name from user model */}
          <div className="message-text">
            <img src={ProfilePic} alt="ProfilePic" className="profile-pic" />
            John Doe
          </div>
          <p className="message-text">Example message without backend</p>
        </div>
        <div className="message-user">
          {/* TODO change Profile Pic to proper name from user model */}
          <div className="message-text">
            John Doe
            <img src={ProfilePic} alt="ProfilePic" className="profile-pic" />
          </div>
          <p className="message-text">Example message without backend</p>
        </div>
        <div className="insert-field">
          <input
            type="text"
            placeholder="Type your message"
            className="input-field"
          />
          <button className="insert-field-button">
            <p className="insert-field-button-text">➤</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default ConversationDetail;
