import Heart from '@react-sandbox/heart'
import {useState} from "react";

export default function HeartButton() {
    const [active, setActive] = useState(false)

    return (
        <div>
            <Heart
                width={40}
                height={40}
                active={active}
                onClick={() => setActive(!active)}
            />
        </div>
    )
}