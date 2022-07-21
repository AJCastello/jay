import { Element } from "../Element";

import "./Space.style.css";

type SpaceType = {
  id?: string;
  tag?: string;
  size?: "small" | "medium" | "large";
  style?: Partial<CSSStyleDeclaration>;
  events?: Array<{ name: string, callback: (e: Event) => void }>;
  className?: string | Function;
  attributes?: Array<[string, string]>;
}

export const Space = (props: SpaceType) => {
  const obj = Element({ tag: "div", ...props});

  switch (props.size) {
    case "small":
      obj.classList.add("space-small");
      break;
    case "medium":
      obj.classList.add("space-medium");
      break;
    case "large":
      obj.classList.add("space-large");
      break;  
    default:
      obj.classList.add("space-medium");
      break;
  }

  return obj;
}