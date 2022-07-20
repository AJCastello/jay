import { Element } from "../Element";

type SectionType = {
  id?: string;
  tag?: string;
  style?: Partial<CSSStyleDeclaration>;
  events?: Array<{ name: string, callback: (e: Event) => void }>;
  content?: string | Function | Node | any;
  className?: string | Function;
  attributes?: Array<{ name: string, value: string }>;
}

export const Section = (props: SectionType) => {
  const obj = Element({ tag: "section", ...props});
  return obj;
}