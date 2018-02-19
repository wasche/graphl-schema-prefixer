export default function prefixResolvers (prefix, resolvers) {
  var ret = {}

  for (let key in resolvers) {
    if (['Query', 'Mutation', 'Subscription'].includes(key)) {
      ret[key] = {}
      for (let action in resolvers[key]) {
        ret[key][prefix + action] = resolvers[key][action]
      }
    } else {
      ret[prefix + key] = resolvers[key]
    }
  }

  return ret
}
