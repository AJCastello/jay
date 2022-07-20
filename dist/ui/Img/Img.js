import { Element } from "../Element";
export const Img = (props) => {
    const obj = Element({ tag: "img", ...props });
    if (props.src) {
        obj.src = props.src;
    }
    return obj;
};
//# sourceMappingURL=Img.js.map