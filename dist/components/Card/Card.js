import { Element } from "../Element";
import "./Card.style.css";
export const Card = (props) => {
    const obj = Element({ tag: "div", className: "card", ...props });
    return obj;
};
//# sourceMappingURL=Card.js.map