import './register.css'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">MonaSOCIETY</h3>
                    <span className="registerDesc">
                        Your buddies and new friends are waiting on Mona.
                    </span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input placeholder="Username" className="registerInput" />
                        <input placeholder="Email" className="registerInput" />
                        <input placeholder="Password" className="registerInput" />
                        <input placeholder="Password Again" className="registerInput" />
                        
                            <button  className="registerButton">
                            <Link to = "/login" className="txtColor" style={{textDecoration:"none"}}>
                                Sign Up
                            </Link>
                               
                            </button>
                        
                        
                        <button className="registerRegisterButton">
                        <Link to = "/login" className="txtColor" style={{textDecoration:"none"}}>
                            Log Into Account
                        </Link>
                            
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
