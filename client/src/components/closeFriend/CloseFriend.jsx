import './closeFriend.css'

export default function CloseFriend({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="sidebarBuddy">
            <img className="sidebarBuddyImg" src={PF+user.profilePicture} alt="" />
            <span className="sidebarBuddyName">{user.username}</span>
        </li>
    )
}
