type Route = {
  path: string;
  element: () => HTMLElement;
  target: HTMLElement;
}

type MatchType = {
  result: Array<string>;
  route: Route;
}

type ParamsType = { [key: string]: string };
const contextRoutes: Array<Route> = [];

const pathToRegex = (path: string) => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

export const getParams = () => {
  const match = getPotentialMatch();
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result) => result[1]);
  const params = Object.fromEntries(keys.map((key, i) => [key, values[i]]));

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.forEach((value, key) => params[key] = value);

  return params as ParamsType;
};

export const getPotentialMatch = () => {
  const potentialMatches = contextRoutes.map(route => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path))
    } as MatchType;
  });
  const resultMatch = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
  const match = resultMatch ? resultMatch : { route: contextRoutes[0], result: [location.pathname] }
  return match;
}

export const Router = (routes = contextRoutes) => {
  contextRoutes.length = 0;
  contextRoutes.push(...routes);
  const match = getPotentialMatch();
  match.route.element && (match.route.target.innerHTML = "", match.route.target.append(match.route.element()))
  return;
}

export const Navigate = (path: string) => {
  history.pushState(null, "", path);
  Router();
}

window.addEventListener("popstate", () => { Router() });