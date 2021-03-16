import { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine'
import {SendOutlined ,PictureOutlined} from '@ant-design/icons'
const MessageForm = (props) => {
    const { chatID, creds } = props
    const [value, setvalue] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const text=value.trim();
        if(text.length>0){
            sendMessage(creds,chatID,{text})
        }
        setvalue("")
    }
    const handleChange = (e) => {
        setvalue(e.target.value)
        isTyping(props, chatID)
    }
    const handleUpload=(e)=>{
        sendMessage(creds,chatID,{files: e.target.files , text:''})
    }
    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
                placeholder="Enter your message"
            />
            <label htmlFor="upload-button">
                <span className="image-buttom">
                    <PictureOutlined  className="picture-icon"/>
                </span>
            </label>
            <input 
                type="file"
                multiple={false}
                id="upload-button"
                style={{display:"none"}}
                onChange={handleUpload}
            />

        </form>
    )
}
export default MessageForm