export default function createRouteMap(routes, oldPathMap) {
  const pathMap = oldPathMap || Object.create(null)

  routes.forEach((route) => {
    console.log(route)
    addRouteRecord(route, pathMap)
  })

  return { pathMap }
}

function addRouteRecord(route, pathMap, parentPath) {
  let path = route.path
  if (parentPath) {
    path = parentPath + '/' + path
  }

  const record = {
    path,
    component: route.component
  }

  if (!pathMap[path]) {
    pathMap[path] = record
  }
  if (route.children) {
    route.children.forEach((r) => {
      addRouteRecord(r, pathMap, route.path)
    })
  }
}
