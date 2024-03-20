import { useState } from "react"
import {Link,useNavigate } from "react-router-dom"
import axios from "axios"
const Signin=()=>{
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [errors,setErrors] = useState("");
    const navigate = useNavigate("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        let error ={}
        axios.post("http://localhost:3002/signin",{email,username,password})
        .then(result => {
                console.log(result)
                if(email && username && password){
                    navigate('./login')

                }
        }).catch(err => console.log(err))
        
        if(!email){
            error.email="provide required parameters"
        }
        if(!username){
            error.username="provide required parameters"
        }
        if(!password){
            error.password="provide required parameters"
        }
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            error.email="please provide valid e-mail"
        }
        if (Object.keys(error).length > 0){
            setErrors({...error})
            return
          }
    }
   
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
        setErrors({...errors,email:''})
    }
    const handleUsernameChange=(e)=>{
        setUsername(e.target.value)
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }
   
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div>
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" value={email} onChange={handleEmailChange}/>
                {errors.email ? <div className="error">{errors.email}</div>:null}
                </div>
              <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange}/>
                {errors.username ? <div className="error">{errors.username}</div>:null}
              </div>
                <div>
                <label htmlFor="pass">Password</label>
                <input type="text" id="pass" value={password} onChange={handlePasswordChange}/>
                {errors.password ? <div className="error">{errors.password}</div>:null}
                </div>
              <button type="submit">Submit</button>
              <p>Already registered?</p>
           <Link to="/login"><button type="submit">Login</button></Link> 

            </div>
            
        </form>
        </>
    )
}
export default Signin