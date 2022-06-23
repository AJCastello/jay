import { Element } from "../Element/Element.js";

type SectionT = {
  id?: string;
  tag?: string;
  style?: string;
  events?: Array<{ name: string, callback: (e: Event) => void }>;
  content: string | Function | Node | any;
  className?: string | Function;
  attributes?: Array<{ name: string, value: string }>;
}

export const Section = (props: SectionT) => {
  const obj = Element({ ...props, tag: "section" });
  return obj;
}
