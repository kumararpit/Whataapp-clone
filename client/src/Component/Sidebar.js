import { React, useState } from "react";
import "./sidebar.css";
import Header from "./Header";
import UserChat from "./UserChat";
import "./chat.css";
function Sidebar() {
  const [Avatarurl, setAvatarurl] = useState(
    "https://avatars.githubusercontent.com/u/31488121?s=460&u=348efb34634b4e91044174e57c7997d9ce1ee895&v=4"
  );
  const [username, setusername] = useState("Arpit kumar");
  const [lastmessage, setlastmessage] = useState(
    "hello everyone nice cebacjb wbjw heh bqhb ebb ebj"
  );
  return (
    <div className="sidebar_container">
      <Header />
      <div className="sidebar_chat_section">
        <UserChat
          url={Avatarurl}
          username={username}
          lastmessage={lastmessage}
        />
        <UserChat
          url={Avatarurl}
          username={username}
          lastmessage={lastmessage}
        />
        <UserChat
          url={Avatarurl}
          username={username}
          lastmessage={lastmessage}
        />
        <UserChat
          url={Avatarurl}
          username={username}
          lastmessage={lastmessage}
        />
        <UserChat
          url={Avatarurl}
          username={username}
          lastmessage={lastmessage}
        />
        <UserChat
          url={Avatarurl}
          username={username}
          lastmessage={lastmessage}
        />
        <UserChat
          url={Avatarurl}
          username={username}
          lastmessage={lastmessage}
        />
        <UserChat
          url={Avatarurl}
          username={username}
          lastmessage={lastmessage}
        />
        <UserChat
          url={Avatarurl}
          username={username}
          lastmessage={lastmessage}
        />
        <UserChat
          url={Avatarurl}
          username={username}
          lastmessage={lastmessage}
        />
        <UserChat
          url={Avatarurl}
          username={username}
          lastmessage={lastmessage}
        />
      </div>
    </div>
  );
}

export default Sidebar;
