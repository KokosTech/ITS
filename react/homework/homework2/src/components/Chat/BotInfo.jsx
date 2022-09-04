const BotInfo = ({ name, pic, typing }) => (
    <div className="flex justify-self-start justify-start items-center pb-5 space-x-1">
        <img 
            className="object-cover w-10 h-10 rounded-full mr-2" 
            src={pic}
            alt={name}
        />
        <span 
            className="block ml-2 font-bold text-white"
        >
            {name}
        </span>
        {typing && (
            <span className="text-gray-400 after:inline-block after:content-[''] after:animate-typing-animation">is typing</span>
        )}
    </div>
)

export default BotInfo;