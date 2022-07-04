export const setProp = (obj: any, content: Node | Function | string) => {
  if (Array.isArray(content)) {
    while (obj.firstChild) {
      obj.removeChild(obj.firstChild);
    }
    content.forEach(item => obj.append(item));
    return;
  }

  if (
    typeof content === "function" &&
    content.name === "setObserver"
  ) {
    content(setProp, obj)
    return;
  }

  if (obj.attr) {
    obj.obj[obj.attr] = content;
    return;
  }

  while (obj.firstChild) {
    obj.removeChild(obj.firstChild);
  }
  obj.append(content);
}