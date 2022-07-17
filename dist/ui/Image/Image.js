import { Element } from "../Element";
export const Image = (props) => {
    const obj = Element({ tag: "img", ...props });
    if (props.src) {
        obj.src = props.src;
    }
    return obj;
};
//# sourceMappingURL=Image.js.map