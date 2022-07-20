import { Element } from "../Element";
import { setProp } from "../../utils";

import "./TextField.style.css";

type TextFieldType = {
  id?: string;
  tag?: string;
  type?: string;
  style?: Partial<CSSStyleDeclaration>;
  value?: string;
  events?: Array<{ name: string, callback: (e: Event) => void }>;
  className?: string | Function;
  attributes?: Array<{ name: string, value: string }>;
  placeholder?: string;
  keyup?: (e: Event) => void;
  change?: (e: Event) => void;
  keydown?: (e: Event) => void;
  keypress?: (e: Event) => void;
}

export const TextField = (props: TextFieldType) => {
  const obj = Element({ tag: "input", ...props, defaultClassName: "textfield" }) as HTMLInputElement;
  props.type ? setProp({obj: obj, attr: "type"}, props.type) : obj.type = "text";
  props.value && obj.setAttribute("value", props.value)
  props.placeholder && obj.setAttribute("placeholder", props.placeholder);
  props.keyup ? obj.addEventListener("keyup", props.keyup) : null;
  props.change ? obj.addEventListener("change", props.change) : null;
  return obj;
}

