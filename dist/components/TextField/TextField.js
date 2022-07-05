import { Element } from "../Element";
import { setProp } from "../../utils";
import "./TextField.style.css";
export const TextField = (props) => {
    const obj = Element({ tag: "input", ...props, defaultClassName: "textfield" });
    props.type ? setProp({ obj: obj, attr: "type" }, props.type) : obj.type = "text";
    props.value && obj.setAttribute("value", props.value);
    props.placeholder && obj.setAttribute("placeholder", props.placeholder);
    props.keyup ? obj.addEventListener("keyup", props.keyup) : null;
    props.change ? obj.addEventListener("change", props.change) : null;
    return obj;
};
//# sourceMappingURL=TextField.js.map