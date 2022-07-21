import { Element } from "../Element";
import "./ProgressBar.style.css";
export const ProgressBar = (props) => {
    const objInner = Element({ tag: "div", ...props });
    const obj = Element({ tag: "div", ...props, content: objInner });
    obj.classList.add("progress-bar");
    objInner.classList.add("progress-bar-inner");
    if (props.value) {
        objInner.style.width = `${props.value}%`;
    }
    obj.set = (value) => {
        objInner.style.width = `${value}%`;
    };
    switch (props.size) {
        case "small":
            obj.classList.add("progress-bar-small");
            break;
        case "medium":
            obj.classList.add("progress-bar-medium");
            break;
        case "large":
            obj.classList.add("progress-bar-large");
            break;
        default:
            obj.classList.add("progress-bar-medium");
            break;
    }
    return obj;
};
//# sourceMappingURL=ProgressBar.js.map