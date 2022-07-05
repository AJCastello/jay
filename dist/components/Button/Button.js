import { Element } from "../Element";
import "./Button.style.scss";
export const Button = (props) => {
    const obj = Element({ ...props, tag: "button" });
    props.click && (obj.addEventListener("click", props.click));
    return obj;
};
//# sourceMappingURL=Button.js.map