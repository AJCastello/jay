import { Element } from "../Element";
import "./Button.style.css";

export type ButtonType = {
  id?: string;
  tag?: string;
  style?: Partial<CSSStyleDeclaration>;
  events?: Array<{ name: string, callback: (e: Event) => void }>;
  content: string | Function | Node | any;
  className?: string | Function;
  attributes?: Array<[string, string]>;
  click?: () => void;
}

export const Button = (props: ButtonType) => {
  const obj = Element({ ...props, tag: "button" });
  props.click && (obj.addEventListener("click", props.click));
  return obj;
}
