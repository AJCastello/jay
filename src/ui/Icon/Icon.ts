import { Element } from "../Element";

type IconType = {
  id?: string;
  tag?: string;
  name?: string;
  style?: Partial<CSSStyleDeclaration>;
  events?: Array<{ name: string, callback: (e: Event) => void }>;
  className?: string | Function;
  attributes?: Array<{ name: string, value: string }>;
}

export const Icon = (props: IconType) => {
  const obj = Element({ tag: "i", ...props });

  if (props.name) {
    obj.className = `fa-solid fa-${props.name}`;
  }
  
  return obj;
}