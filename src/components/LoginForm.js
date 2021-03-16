import {useState,useEffect} from 'react'
import axios from 'axios'
const LoginForm=()=>{
    const [userName, setuserName] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const authObject={'Project-ID':"0b35e5f2-375d-4d32-8024-741d2c630ad6" ,'User-Name':userName,'User-Secret':password}
        try {
            await axios.get('https://api.chatengine.io/chats',{headers:authObject})
            localStorage.setItem('username',userName)
            localStorage.setItem('password',password)
            window.location.reload()
        } catch (error) {
            seterror("Invalid credentials")
        }

    }
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> CHAT BOX </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="input" value={userName} onChange={(e)=>setuserName(e.target.value)} placeholder="Username" required/>
                    <input type="password" className="input" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                        <span>Login</span>
                        </button>   
                    </div>  
                    <h1 className="error">{error}</h1>      
                </form>
            </div>
        </div>
    )

}
export default LoginForm