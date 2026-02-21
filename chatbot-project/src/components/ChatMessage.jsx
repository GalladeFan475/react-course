import dayjs from "dayjs";
import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";

export function ChatMessage({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;
  /*
        if (sender === 'robot') {
          return (
            <div>
              <img src="robot.png" width="50" />
              {message}
            </div>
          );
        }
        */
  const time = dayjs().valueOf();
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {message}
        <br></br>
        <span class="chat-message-time">{dayjs(time).format("h:mma")}</span>
      </div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}
