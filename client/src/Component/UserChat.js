import React from 'react'
import {Avatar} from '@material-ui/core'
import "./sidebar.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function UserChat({imgurl,username,lastmessage, active}) {
    return (
        
        <div className="userchat_container" >
            <Avatar style={{height:'50px',width:'50px'}} src={imgurl} />
            <div className="userchat_detail">
                <div className="username_container">
                    <h3>{username}</h3>
                    <h6>5:30PM</h6>
                </div>
                <div className="lastmessage_container">
                    <div className="lastmessage">
                    <p>{lastmessage}</p>
                    </div>
                    <div className="expand_icon">
                    <ExpandMoreIcon/>
                    {/* <MoreHorizIcon /> */}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default UserChat
