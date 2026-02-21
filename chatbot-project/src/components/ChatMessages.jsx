import { useAutoScroll } from "./useAutoScroll"; //2. jsx files
import { ChatMessage } from "./ChatMessage";

export function ChatMessages({ chatMessages }) {
  const scrollRef = useAutoScroll(chatMessages);
  return (
    <div className="chat-messages-container" ref={scrollRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}
