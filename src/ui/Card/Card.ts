import { Element } from "../Element";

import "./Card.style.css";

type CardType = {
  id?: string;
  tag?: string;
  style?: string;
  content: string | Function | Node | any;
  className?: string | Function;
  attributes?: Array<{ name: string, value: string }>;
}

export const Card = (props: CardType) => {
  const obj = Element({ tag: "div", className: "card", ...props});
  return obj;
}