import { Element } from "../Element";
export const Icon = (props) => {
    const obj = Element({ tag: "i", ...props });
    if (props.name) {
        obj.className = `fa-solid fa-${props.name}`;
    }
    return obj;
};
//# sourceMappingURL=Icon.js.map