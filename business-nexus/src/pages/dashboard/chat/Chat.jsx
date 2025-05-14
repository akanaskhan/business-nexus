import { useState, useEffect, useRef } from "react";
import { FiSend } from "react-icons/fi";
import { AiOutlineClear, AiOutlineMenu } from "react-icons/ai";
import { MessagesSquare } from "lucide-react";
import Button from "../../../components/ui/button";

const repliesData = {
  greetings: [
    "Hello! How can I assist you today?",
    "Hi there! Nice to see you.",
    "Good day! What can I do for you?",
  ],
  help: [
    "I'm here to assist you with your queries.",
    "Feel free to ask me anything.",
    "Let me know how I can help.",
  ],
  personal: [
    "I'm good, thank you! How about you?",
    "I enjoy assisting with projects and solving problems.",
    "I'm here to make your tasks easier.",
  ],
  project: [
    "The project is focused on enhancing user experience.",
    "We're working on innovative solutions for modern challenges.",
    "The aim is to deliver value through creativity and strategy.",
  ],
  scheduling: [
    "Sure! Let me know your availability.",
    "We can plan a meeting anytime you're free.",
    "Let's schedule a call to discuss further.",
  ],
  investment: [
    "I focus on scalable and innovative ideas.",
    "Our strategy is to support sustainable growth.",
    "We value innovative solutions and market potential.",
  ],
  contact: [
    "You can reach out to me via email or phone.",
    "Feel free to drop me a message anytime.",
    "I'm available on various platforms; just let me know.",
  ],
  fallback: [
    "I'm not sure about that.",
    "Can you clarify your question?",
    "I'll need more details to assist you better.",
  ],
};

export default function Chat() {
  const [activeUser, setActiveUser] = useState(null);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatMessages");
    return saved ? JSON.parse(saved) : {};
  });
  const [inputMessage, setInputMessage] = useState("");
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const messagesEndRef = useRef(null);

  const [users] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Entrepreneur",
      online: true,
      profileImg: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Investor",
      online: false,
      profileImg: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Developer",
      online: true,
      profileImg: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      name: "Robert Brown",
      role: "Designer",
      online: false,
      profileImg: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      name: "Emily Davis",
      role: "Marketer",
      online: true,
      profileImg: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    // scrollToBottom();
  }, [messages]);

  const getAutoReply = () => {
    const categories = Object.keys(repliesData);
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const replies = repliesData[randomCategory];
    return replies[Math.floor(Math.random() * replies.length)];
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || !activeUser) return;

    const newMessage = {
      text: inputMessage,
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => ({
      ...prev,
      [activeUser.id]: [...(prev[activeUser.id] || []), newMessage],
    }));

    setInputMessage("");

    setTimeout(() => {
      const autoResponse = {
        text: getAutoReply(),
        sender: "contact",
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => ({
        ...prev,
        [activeUser.id]: [...(prev[activeUser.id] || []), autoResponse],
      }));
    }, 1000);
  };

  const clearChat = () => {
    if (activeUser) {
      setMessages((prev) => ({ ...prev, [activeUser.id]: [] }));
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleUserSelect = (user) => {
    setActiveUser(user);
    setMessages((prev) => ({
      ...prev,
      [user.id]: Array.isArray(prev[user.id]) ? prev[user.id] : [],
    }));
    setShowMobileSidebar(false); // Close sidebar on mobile after selection
  };

  return (
    <div className="w-full flex bg-gray-100 items-center justify-center mt-16">
      <div className="flex w-screen h-[90vh] bg-white rounded-lg overflow-hidden">
        {/* Mobile menu button */}
        {/* <button
          className="md:hidden fixed top-20 left-4 z-10 p-2 bg-white rounded-lg "
          onClick={() => setShowMobileSidebar(!showMobileSidebar)}
        >
          <AiOutlineMenu className="w-5 h-5" />
        </button> */}

        {/* Sidebar - Hidden on mobile unless showMobileSidebar is true */}
        <div
          className={`w-80 border-r bg-gray-50 fixed md:relative z-20 md:z-0 h-[90vh] transition-transform duration-300 ease-in-out ${
            showMobileSidebar
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Contacts</h2>
          </div>
          <div className="overflow-y-auto h-[calc(100%-64px)]">
            {users.map((user) => (
              <div
                key={user.id}
                className={`p-4 hover:bg-gray-100 cursor-pointer ${
                  activeUser?.id === user.id ? "bg-gray-200" : ""
                }`}
                onClick={() => handleUserSelect(user)}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative ">
                    <img
                      src={user.profileImg}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    {user.online && (
                      <div className="absolute bottom-0 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main chat area */}
        <div className="flex-1 flex flex-col">
          {activeUser ? (
            <>
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-4">
                  <button
                    className="md:hidden p-2"
                    onClick={() => setShowMobileSidebar(true)}
                  >
                    <AiOutlineMenu className="w-5 h-5" />
                  </button>
                  <img
                    src={activeUser.profileImg}
                    alt={activeUser.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{activeUser.name}</h2>
                    <p className="text-sm text-gray-500">
                      {activeUser.role} -{" "}
                      {activeUser.online ? "Online" : "Offline"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={clearChat}
                  className="p-2 hover:bg-gray-100 rounded-full"
                  aria-label="Clear chat"
                >
                  <AiOutlineClear className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {(messages[activeUser.id] || []).map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg px-4 py-2 ${
                        message.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className="text-xs mt-1">
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSend} className="p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder={`Message ${activeUser.name}...`}
                    className="flex-1 px-4 py-2 rounded-lg border"
                  />
                  <button
                    type="submit"
                    disabled={!inputMessage.trim()}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    <FiSend className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
              <MessagesSquare className="w-20 h-20 text-gray-400" />

              <h2 className="mt-4 text-lg font-semibold text-gray-600">
                No Chat Selected
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Select a conversation to start chatting or create a new one!
              </p>
              <Button onClick={() => setShowMobileSidebar(true)}>
                Open Contacts
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
