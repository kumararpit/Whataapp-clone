import { React, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import ChatSection from "./ChatSection";
import "./chat.css";
function Chat() {
  const [Avatarurl, setAvatarurl] = useState(
    "https://avatars.githubusercontent.com/u/31488121?s=460&u=348efb34634b4e91044174e57c7997d9ce1ee895&v=4"
  );
  const [username, setusername] = useState("Arpit kumar");
  return (
    <div className="chatbar_container">
      <div className="chat_header">
        <div className="chatheader_left">
          <Avatar src={Avatarurl} />
          <div className="chatheader_username">{username}</div>
        </div>
        <div className="chatheader_right">
          <IconButton>
            <SearchIcon className="chartheader_icon" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="chartheader_icon" />
          </IconButton>
        </div>
      </div>
      <div className="chatsection">
        <ChatSection username={username} />
      </div>
      <div className="footer">
        <div className="footer_left">
          <IconButton>
            <EmojiEmotionsIcon className="footerleft_icons" />
          </IconButton>
          <IconButton>
            <AttachFileIcon className="footerleft_icons" />
          </IconButton>
        </div>
        <div className="footer_center">
          <input type="text" placeholder="Type a message" />
        </div>
        <div className="footer_right">
          <IconButton>
            <MicIcon className="footerright_icons" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
export default Chat;
