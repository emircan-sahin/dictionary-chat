import React from "react";
import { SendOutlined } from "@mui/icons-material";
import axios from "axios";
import cheerio from "cheerio";

interface IMessage {
  id: number;
  content: string;
  sender: "user" | "bot";
}

const Chat = () => {
  const [messages, setMessages] = React.useState<IMessage[]>([]);
  const [input, setInput] = React.useState<string>("");
  const [result, setResult] = React.useState<string>("");
  const [iframeSrc, setIframeSrc] = React.useState<string>("");
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  React.useEffect(() => {
    setMessages([
      {
        id: 1,
        content: "Test",
        sender: "user",
      },
      {
        id: 2,
        content: "Test",
        sender: "bot",
      },
    ]);
  }, []);

  const getClassName = (sender: "user" | "bot") => {
    if (sender === "user") {
      return "bg-blue-800";
    } else {
      return "bg-zinc-800 ml-auto";
    }
  };

  const handleIframeLoad = () => {
    console.log("iframe load");
    setTimeout(() => {
    console.log("iframe loaded");
    const iframeDocument = iframeRef.current?.contentDocument;
    console.log(iframeDocument);
      if (iframeDocument) {
        const iframeContent = iframeDocument.documentElement.outerHTML;
        console.log(iframeContent);
      }
    }, 5000);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIframeSrc(
      `https://sozluk.turkceokunusu.com/${input.toLowerCase()}-okunusu/`
    );
  };

  return (
    <div className="relative flex flex-col h-full">
      <span className="py-5 border-b border-zinc-700">Chat</span>

      <div className="flex flex-col text-left p-5">
        {messages.map((message) => (
          <span
            className={`px-10 py-2 mb-4 w-fit rounded-lg ${getClassName(
              message.sender
            )}`}
          >
            {message.content}
          </span>
        ))}
      </div>

      <iframe
        className=""
        title="Result"
        ref={iframeRef}
        src={iframeSrc}
        onLoad={handleIframeLoad}
      />

      <form
        className="absolute bottom-0 w-full p-5 border border-zinc-800"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="p-2 w-full rounded bg-zinc-800 font-light focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SendOutlined className="absolute top-1/2 right-6 -translate-x-1/2 -translate-y-1/2" />
      </form>
    </div>
  );
};

export default Chat;
