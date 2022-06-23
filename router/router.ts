type Route = {
  path: string;
  element: () => HTMLElement;
  target: HTMLElement;
}

type MatchType = {
  result: string;
  route: Route;
}

type ParamsType = { [key: string]: string };
let contextRoutes: Array<Route>;

const pathToRegex = (path: string) => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

export const getParams = (match: MatchType) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result) => result[1]);
  const params = Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]];
  }));
  return params as ParamsType;
};

export const Router = (routes = contextRoutes) => {
  contextRoutes = routes;
  const potentialMatches = routes.map(route => {
    return { route: route, result: location.pathname.match(pathToRegex(route.path)) }
  });
  const resultMatch = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
  const match = resultMatch ? resultMatch : { route: routes[0], result: [location.pathname] }
  match.route.element && match.route.target.append(match.route.element())
  return;
}

export const Navigate = (path: string) => {
  history.pushState(null, "", path);
  Router();
}

window.addEventListener("popstate", () => { Router() });