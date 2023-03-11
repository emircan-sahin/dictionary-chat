import React from "react";
import { SendOutlined } from "@mui/icons-material";
import axios from "axios";
import cheerio from "cheerio";

interface IMessage {
  content: string;
  sender: "user" | "bot";
}

const Chat = () => {
  const [messages, setMessages] = React.useState<IMessage[]>([]);
  const [input, setInput] = React.useState<string>("");
  const [result, setResult] = React.useState<string>("");

  React.useEffect(() => {
    setMessages([
      {
        content: "Hi",
        sender: "user",
      },
      {
        content: "Hay",
        sender: "bot",
      },
    ]);
  }, []);

  React.useEffect(() => {
    const chatEl = document.getElementById("chat");
    chatEl?.scrollTo(0, 99999999999999999);
  }, [messages]);

  const getClassName = (sender: "user" | "bot") => {
    if (sender === "user") {
      return "bg-blue-800";
    } else {
      return "bg-zinc-800 ml-auto";
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setInput("");

    messages.push({
      content: input,
      sender: "user",
    });
    setMessages([...messages]); 

    axios
      .get(`https://sozluk.turkceokunusu.com/${input.toLowerCase()}-okunusu/`)
      .then((res) => {
        const html = res.data;
        const $ = cheerio.load(html);
        let readableWord = $("body")
          .text()
          .split("Türkçe okunuşu ")[1]
          .split(" şeklindedir")[0];

        messages.push({
          content: readableWord,
          sender: "bot",
        });
        setMessages([...messages]);        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative flex flex-col h-full">
      <span className="py-5 border-b border-zinc-700">Pronunciations Chat</span>

      <div className="flex flex-col text-left p-5 overflow-y-auto mb-24" id="chat">
        {messages.map((message) => (
          <span
            className={`px-10 py-2 mb-4 w-fit rounded-lg lowercasel ${getClassName(
              message.sender
            )}`}
          >
            {message.content}
          </span>
        ))}
      </div>

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
