import { RouteOptions } from './RouteStore';

export function compareRouteOptions(...routeOptionsList: RouteOptions[][]): boolean {
  const [firstOptions, ...otherOptionsList] = routeOptionsList;
  
  for (const otherOptions of otherOptionsList) {
    if (firstOptions.length !== otherOptions.length) {
      return false;
    }
  }
  
  return firstOptions.every(firstRoute => {
    for (const otherOptions of otherOptionsList) {
      const otherRoute: RouteOptions | undefined = otherOptions.find(route => firstRoute.path === route.path);
      
      if (
        !otherRoute
        || firstRoute.exact !== otherRoute.exact
        || firstRoute.sensitive !== otherRoute.sensitive
        || firstRoute.strict !== otherRoute.strict
      ) {
        return false;
      }
    }
    return true;
  });
}