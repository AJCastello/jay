import { Element } from "../Element";

import "./ProgressBar.style.css";

type ProgressBarType = {
  id?: string;
  tag?: string;
  size?: "small" | "medium" | "large";
  style?: Partial<CSSStyleDeclaration>;
  events?: Array<{ name: string, callback: (e: Event) => void }>;
  className?: string | Function;
  attributes?: Array<[string, string]>;
  value?: number;
}

interface ProgressBarInterface extends HTMLElement {
  set: (value: number) => void; 
}
  
export const ProgressBar = (props: ProgressBarType) => {

  const objInner = Element({ tag: "div", ...props });
  const obj = Element({ tag: "div", ...props, content: objInner }) as ProgressBarInterface;
  
  obj.classList.add("progress-bar");
  objInner.classList.add("progress-bar-inner");

  if (props.value) {
    objInner.style.width = `${props.value}%`;
  }

  obj.set = (value: number) => {
    objInner.style.width = `${value}%`;
  }
    
  switch (props.size) {
    case "small":
      obj.classList.add("progress-bar-small");
      break;
    case "medium":
      obj.classList.add("progress-bar-medium");
      break;
    case "large":
      obj.classList.add("progress-bar-large");
      break;
    default:
      obj.classList.add("progress-bar-medium");
      break;
  }

  return obj;
}