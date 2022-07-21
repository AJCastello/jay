import { Element } from "../Element";

type ImageType = {
  id?: string;
  tag?: string;
  src?: string | Function | Node | any;
  style?: Partial<CSSStyleDeclaration>;
  events?: Array<{ name: string, callback: (e: Event) => void }>;
  className?: string | Function;
  attributes?: Array<[string, string]>;
}

export const Img = (props: ImageType) => {
  const obj = Element({ tag: "img", ...props}) as HTMLImageElement;
  if(props.src) {
    obj.src = props.src;
  }
  return obj;
}