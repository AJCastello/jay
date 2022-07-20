import { Element } from "../Element";
import "./NavBar.style.css";

type NavBarType = {
  id?: string;
  tag?: string;
  style?: Partial<CSSStyleDeclaration>;
  content: string | Function | Node | any;
  className?: string | Function;  
  attributes?: Array<{ name: string, value: string }>;
}

export const NavBar = (props: NavBarType) => {
  const obj = Element({ tag: "section", className: "navbar", ...props});
  return obj;
}