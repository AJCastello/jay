import { uniKey, setProp } from "../../utils";

export type ElementType = {
  id?: string;
  tag: string;
  style?: Partial<CSSStyleDeclaration>;
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

  if (props.style) {
    Object.keys(props.style).forEach((key: string) => {
      if (props.style)
        obj.style[key as any] = props.style[key as any] as string;
    });
  }

  return obj;
}