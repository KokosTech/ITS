import { useState } from "react";

const ChatInput = ({ setMessages }) => {
    const [message, setMessage] = useState({ sender: true, text: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessages((messages) => [...messages, message]);
        setMessage({ ...message, text: "" });
    };

    return (
        <form className="ChatInput flex flex-row justify-space-a w-full h-16 pt-5 space-x-5" onSubmit={handleSubmit}>
            <input
                className="w-full h-full p-5 rounded-xl bg-slate-800"
                type="text"
                placeholder="Type a message..."
                value={message.text}
                onChange={(e) => setMessage({...message, text: e.target.value})}
            />
            <button className="h-full p-5 rounded-xl bg-slate-800 flex items-center justify-center text-gray-400 hover:text-white" type="submit">
                Send
            </button>
        </form>
    );
}

export default ChatInput;