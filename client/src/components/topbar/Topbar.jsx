import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import "./topbar.css"
import {Link} from "react-router-dom"

export default function Topbar() {
    return (
        // This is the Top bar where everthing is
        // It contains left, Center and Right
        // Icons includes notification, chat, person and a searchbar
        // also has some links for homepage and timeline
        // contains img src for person 
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to = "/" style={{textDecoration:"none"}}>
                    <span className="topbarLogo">MonaSOCIETY</span>
                </Link>
                
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for anything" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <Link to = "/login"  style={{textDecoration:"none"}}>
                        <span className="topbarLink">Logout</span>
                    </Link>
                    
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">5</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to = "/profile/Badsha Laskar" className="txtColor" style={{textDecoration:"none"}}>
                    <img src="/assets/person/crazy1.jpg" alt="" className="topbarImg" />
                </Link>
            </div>   
        </div>
    )
}
