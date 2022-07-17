export default function createRouteMap(routes, oldPathMap) {
  const pathMap = oldPathMap || Object.create(null)

  routes.forEach((route) => {
    addRouteRecord(route, pathMap)
  })

  return { pathMap }
}

function addRouteRecord(route, pathMap, parentRecord) {
  let path = route.path
  if (parentRecord) {
    path = parentRecord.path + '/' + path
  }

  const record = {
    path,
    component: route.component,
    parent: parentRecord
  }

  if (!pathMap[path]) {
    pathMap[path] = record
  }
  if (route.children) {
    route.children.forEach((r) => {
      addRouteRecord(r, pathMap, record)
    })
  }
}
