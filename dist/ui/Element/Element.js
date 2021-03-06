import { uniKey, setProp } from "../../utils";
export const Element = (props) => {
    const obj = document.createElement(props.tag);
    obj.id = props.id || uniKey();
    props.className ? setProp({ obj: obj, attr: "className" }, props.className) : obj.className = (props.defaultClassName ? props.defaultClassName : props.tag);
    props.content && setProp(obj, props.content);
    props.events?.forEach(event => obj.addEventListener(event.name, event.callback));
    props.attributes?.forEach(attribute => obj.setAttribute(attribute[0], attribute[1]));
    if (props.style) {
        Object.keys(props.style).forEach((key) => {
            if (props.style)
                obj.style[key] = props.style[key];
        });
    }
    return obj;
};
//# sourceMappingURL=Element.js.map