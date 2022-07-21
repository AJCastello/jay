import { Element } from "../Element";
import "./NavBar.style.css";

type NavBarType = {
  id?: string;
  tag?: string;
  style?: Partial<CSSStyleDeclaration>;
  content: string | Function | Node | any;
  className?: string | Function;  
  attributes?: Array<[string, string]>;
}

export const NavBar = (props: NavBarType) => {
  const obj = Element({ tag: "section", className: "navbar", ...props});
  return obj;
}