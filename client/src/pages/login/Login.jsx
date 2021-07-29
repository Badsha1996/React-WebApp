import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <img src="/img/animation.gif" alt="" className="loginImg" />
                    <h3 className="loginLogo">MonaSOCIETY</h3>
                    <span className="loginDesc">
                        Your buddies and new friends are waiting on Mona.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        
                            <button className="loginButton">
                            <Link to = "/" className="txtColor" style={{textDecoration:"none"}}>
                                Log In
                            </Link>   
                            </button>
                       
                        
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            <Link to = "/register" className="txtColor" style={{textDecoration:"none"}}>
                                Create New Account
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
