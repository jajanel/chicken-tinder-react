import {CardImg} from "react-bootstrap";


export default function ProfilePicture() {
    const profilePicture = ["https://blog.eggcartonstore.com/wp-content/uploads/2021/11/Chickens-for-Blog1.png"];

    return (
        <CardImg src={profilePicture} variant="top" className="px-0 py-4" alt="Profile Picture"
                 style={{height: 380, width: 380, margin: "auto", borderRadius: "7% / 13%"}}/>
    )
}