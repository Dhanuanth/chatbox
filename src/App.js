import React from 'react'
import {ChatEngine} from 'react-chat-engine'
// import './App.css'
import ChatFeed from './components/ChatFeed'
const App=()=>{
    return(
        <ChatEngine
            height="100vh"
            projectID="0b35e5f2-375d-4d32-8024-741d2c630ad6"  
            userName="Aaduthoma"
            userSecret="alakapuri"  
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>} 
        />

    )
}
export default App