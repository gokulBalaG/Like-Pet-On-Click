import cat from "./svg/cat.svg";
import bird from "./svg/bird.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";
import { useState } from "react";
import { click } from "@testing-library/user-event/dist/click";

const svgMap = {
    cat, dog, cow, gator, horse, bird
};

function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return (
        <div onClick={handleClick}>
            <img alt="animal" src={svgMap[type]} />
            <img
                alt="heart"
                src={heart}
                style={{ width: 10 + 10 * clicks + 'px' }} />
        </div>
    );
}

export default AnimalShow;