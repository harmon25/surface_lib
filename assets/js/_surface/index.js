/* This file was generated by the Surface compiler */

function ns(hooks, nameSpace) {
  const updatedHooks = {}
  Object.keys(hooks).map(function(key) {
    updatedHooks[`${nameSpace}#${key}`] = hooks[key]
  })
  return updatedHooks
}

import * as c1 from "./SurfaceLib.hooks"

let hooks = Object.assign(
  ns(c1, "SurfaceLib")
)

export default hooks