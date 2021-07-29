import "./sidebar.css"
import {DynamicFeed, Chat, Book, Help, YouTube, School, Event, Work, Group} from "@material-ui/icons"
import {  Users} from "../../Dummydata";
import CloseFriend from "../closeFriend/CloseFriend";


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <DynamicFeed className="sidebarItem"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarItem"/>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <Book className="sidebarItem"/>
                        <span className="sidebarListItemText">Bookmark</span>
                    </li>
                    <li className="sidebarListItem">
                        <Help className="sidebarItem"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <YouTube className="sidebarItem"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarItem"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className="sidebarItem"/>
                        <span className="sidebarListItemText">Job</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarItem"/>
                        <span className="sidebarListItemText">Event</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarItem"/>
                        <span className="sidebarListItemText">Course</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarBuddyList">
                    {Users.map((u) => (
                        <CloseFriend key={u.id} user={u}/>
                        ))}
                </ul>
            </div>
        </div>
    )
}
