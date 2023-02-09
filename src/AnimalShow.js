import cat from "./svg/cat.svg";
import bird from "./svg/bird.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {
    cat, dog, cow, gator, horse, bird
};

function AnimalShow({ type }) {
    return (
        <div>
            <img alt="animal" src={svgMap[type]} />
        </div>
    );
}

export default AnimalShow;