import { Element } from "../Element";
import "./NavBar.style.scss";

type NavBarType = {
  id?: string;
  tag?: string;
  style?: string;
  content: string | Function | Node | any;
  className?: string | Function;  
  attributes?: Array<{ name: string, value: string }>;
}

const NavBar = (props: NavBarType) => {
  const obj = Element({ tag: "section", className: "navbar", ...props});
  return obj;
}