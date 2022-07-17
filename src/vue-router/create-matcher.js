import createRouteMap from './create-route-map'

export default function createMatcher(routes) {
  const { pathMap } = createRouteMap(routes)

  function addRoutes(routes) {
    createRouteMap(routes, pathMap)
  }
  function match() {}

  return {
    match,
    addRoutes
  }
}
