import './ChatMessage.css'
import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";

export function ChatMessage({ message, sender }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender == "robot" && <img src={RobotProfileImage} width="45" />}
      <div className="chat-message-text">{message}</div>
      {sender == "user" && <img src={UserProfileImage} width="45" />}
    </div>
  );
}
