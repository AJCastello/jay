import { Element } from "../Element";
import "./Space.style.css";
export const Space = (props) => {
    const obj = Element({ tag: "div", ...props });
    switch (props.size) {
        case "small":
            obj.classList.add("space-small");
            break;
        case "medium":
            obj.classList.add("space-medium");
            break;
        case "large":
            obj.classList.add("space-large");
            break;
        default:
            obj.classList.add("space-medium");
            break;
    }
    return obj;
};
//# sourceMappingURL=Space.js.map