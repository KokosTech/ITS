const ChatMessage = ({ message }) => {
    const { text, sender } = message;
    const messageClass = (sender ? "justify-end text-right" : "justify-start text-left");
    return (
        <div className={`flex ${messageClass}`}>
            <p className="p-3 rounded-lg bg-slate-800">{text}</p>
        </div>
    );
}

export default ChatMessage;