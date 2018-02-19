// eslint-disable-next-line no-global-assign
require = require('@std/esm')(module, {'esm': 'js'})
const prefixResolvers = require('../prefix/resolvers').default
const assert = require('chai').assert

const resolvers = {
  Foo: {
    parent: () => {},
    siblings: () => {}
  },

  Query: {
    first: () => {}
  },

  Mutation: {
    addFoo: () => {}
  },

  Subscription: {
    allFoos: () => []
  }
}

const prefixed = prefixResolvers('pre_', resolvers)

describe('prefix', () => {
  describe('resolvers', () => {
    it('should update types', () => assert.exists(prefixed.pre_Foo))

    it('should update queries', () => assert.exists(prefixed.Query.pre_first))

    it('should not update Query', () => assert.exists(prefixed.Query))
  })
})
