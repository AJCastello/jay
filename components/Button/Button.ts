import { Element } from "../Element/Element.js";
import "./Button.style.scss";

export type ButtonT = {
  id?: string;
  tag?: string;
  style?: string;
  events?: Array<{ name: string, callback: (e: Event) => void }>;
  content: string | Function | Node;
  className?: string | Function;
  attributes?: Array<{ name: string, value: string }>;
  click?: () => void;
}

export const Button = (props: ButtonT) => {
  const obj = Element({ ...props, tag: "button" });
  props.click && (obj.addEventListener("click", props.click));
  return obj;
}
