# JAY

Jay is a JavaScript framework for creating a single page apps.
The project is in `alpha` version, feel free to contribute in any way

# Install

```cmd
npm install jay-js
```

# Usage

Jay provides you a dynamic <i>`Router`</i>, <i>`UI`</i> components with reactive properties, <i>`State`</i> controller, <i>`Observer`</i> function that trigger a callback everytime that state changes.

#Router

```ts
import { Router } from "jay-js/router"
import { Home, Contact } from "./pages"

const renderTarget = document.getElementById("root");

Router([
  {path: "/", element: Home, target: renderTarget}
  {path: "/contact", element: Contact, target: renderTarget}
])

// You can also change the render target.
// It means that is possible to keep some elements
// contents without "re-render" it throught navigation

```

#UI

```ts
import { Button, Section } from "jay-js/ui";

const HelloWorld = () => {

  const NavHeader = Section({
    className: "my-header-class"
  })

  const MyButton = Button({
    // className: "my-button", // optional, Jay has built-in styles
    content: "Click Me!",
    click: () => {
      alert("Hello from Button");
    }
  })

  NavHeader.append(
    "Hello World!",
    MyButton
  )

  return NavHeader;
}

const root = document.getElementById("root");
root.append(HelloWorld())
```

OR -----

```ts   
import { Button, Section } from "jay-js/ui";

const HelloWorld = () => {

  const MyButton = Button({
    // className: "my-button", // optional, Jay has built-in styles
    content: "Click Me!",
    click: () => {
      alert("Hello from Button");
    }
  })

  const NavHeader = Section({
    className: "my-header-class",
    content: [
      "Hello World!",
      MyButton
      ]
  })
  
  return NavHeader;
}

const root = document.getElementById("root");
root.append(HelloWorld())

```

#States

```ts
import { State } from "jay-js/hooks"
// Sample to be added here
```

#Observer

```ts
import { Observer } from "jay-js/hooks"
// Sample to be added here
```
