import { Element } from "../Element";

import "./Card.style.css";

type CardType = {
  id?: string;
  tag?: string;
  style?: Partial<CSSStyleDeclaration>;
  content: string | Function | Node | any;
  className?: string | Function;
  attributes?: Array<[string, string]>;
}

export const Card = (props: CardType) => {
  const obj = Element({ tag: "div", className: "card", ...props});
  return obj;
}