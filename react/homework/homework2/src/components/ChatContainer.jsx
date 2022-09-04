import { useEffect, useState, useRef } from "react";

import BotInfo from "./Chat/BotInfo";
import ChatHistory from "./Chat/ChatHistory";
import ChatInput from "./Chat/ChatInput";

const ChatContainer = () => {
    const [messages, setMessages] = useState([]);
    const [typing, setTyping] = useState(false);

    const chatHistoryRef = useRef(null);

    const botInfo = {
        name: "ok bot",
        pic: "https://media.istockphoto.com/vectors/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-vector-id1221348467?k=20&m=1221348467&s=612x612&w=0&h=hp8h8MuGL7Ay-mxkmIKUsk3RY4O69MuiWjznS_7cCBw=",
    }

    useEffect(() => {
        const lastMessage = messages[messages.length - 1];
        if (lastMessage && lastMessage.sender) {
            const botMessage = {sender: false, text: `ok`};
            setTyping(true);
            setTimeout(() => {
                setTyping(false);
                setMessages((messages) => [...messages, botMessage])
            }, 3000)
        }

        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest'
                }
            );
        }
    }, [messages]);

    return (
        <div className="ChatContainer flex flex-col justify-space-a lg:w-2/5 md:w4/6 s w-full h-full p-5  rounded-xl bg-slate-900 divide-y divide-slate-700 text-white">
            <BotInfo name={botInfo.name} pic={botInfo.pic} typing={typing} />
            <ChatHistory messages={messages} ref={chatHistoryRef} />
            <ChatInput setMessages={setMessages} />
        </div>
    );
}

export default ChatContainer;