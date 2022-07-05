import { Element } from "../Element";
import "./Card.style.scss";
export const Card = (props) => {
    const obj = Element({ tag: "div", className: "card", ...props });
    return obj;
};
//# sourceMappingURL=Card.js.map