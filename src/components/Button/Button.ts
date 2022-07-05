import { Element } from "../Element";
import "./Button.style.scss";

export type ButtonType = {
  id?: string;
  tag?: string;
  style?: string;
  events?: Array<{ name: string, callback: (e: Event) => void }>;
  content: string | Function | Node;
  className?: string | Function;
  attributes?: Array<{ name: string, value: string }>;
  click?: () => void;
}

export const Button = (props: ButtonType) => {
  const obj = Element({ ...props, tag: "button" });
  props.click && (obj.addEventListener("click", props.click));
  return obj;
}