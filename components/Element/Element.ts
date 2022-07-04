import { uniKey, setProp } from "jay/utils";

export type ElementType = {
  id?: string;
  tag: string;
  style?: string;
  events?: Array<{ name: string, callback: (e: Event) => void }>;
  content?: string | Function | Node;
  className?: string | Function;
  attributes?: Array<{ name: string, value: string }>;
  defaultClassName?: string;
}

export const Element = (props: ElementType) => {
  const obj = document.createElement(props.tag);
  obj.id = props.id || uniKey();
  props.className ? setProp({ obj: obj, attr: "className" }, props.className) : obj.className = (props.defaultClassName ? props.defaultClassName : props.tag);
  props.content && setProp(obj, props.content);
  props.events?.forEach(event => obj.addEventListener(event.name, event.callback));
  props.attributes?.forEach(attribute => obj.setAttribute(attribute.name, attribute.value));
  return obj;
}