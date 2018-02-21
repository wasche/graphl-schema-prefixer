// eslint-disable-next-line no-global-assign
require = require('@std/esm')(module, {'esm': 'js'})
const prefixTypeDefs = require('..').prefixTypeDefs
const assert = require('chai').assert

const typeDefs = `
type Foo {
  what: String!
  parent: Foo
  siblings: [Foo]
}

type Query {
  first: Foo
  rest: [Foo]!
  foos: [Foo!]!
}

type Mutation {
  addFoo (foo: Foo): Boolean
}

type Subscription {
  allFoos: [Foo!]!
}

schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}
`

const prefixed = prefixTypeDefs('pre_', typeDefs)

describe('prefix', () => {
  describe('typeDefs', () => {
    it('should update types', () => assert.include(prefixed, 'type pre_Foo {'))

    it('should update attribute single type', () => assert.include(prefixed, 'parent: pre_Foo'))
    it('should update attribute list type', () => assert.include(prefixed, 'siblings: [pre_Foo]'))

    it('should update return single type', () => assert.include(prefixed, 'first: pre_Foo'))
    it('should update return list type', () => assert.include(prefixed, 'rest: [pre_Foo]!'))
    it('should update return nonnull list type', () => assert.include(prefixed, 'foos: [pre_Foo!]!'))

    it('should update argument type', () => assert.include(prefixed, '(foo: pre_Foo)'))

    it('should update queries', () => {
      assert.include(prefixed, 'pre_first:')
      assert.include(prefixed, 'pre_rest:')
      assert.include(prefixed, 'pre_foos:')
    })

    it('should update mutations', () => assert.include(prefixed, 'pre_addFoo'))

    it('should update subscriptions', () => assert.include(prefixed, 'pre_allFoos:'))

    it('should not update Query', () => assert.include(prefixed, 'type Query {'))
    it('should not update Mutation', () => assert.include(prefixed, 'type Mutation {'))
    it('should not update Subscription', () => assert.include(prefixed, 'type Subscription {'))

    it('should not update schema', () => {
      assert.include(prefixed, 'query: Query')
      assert.include(prefixed, 'mutation: Mutation')
      assert.include(prefixed, 'subscription: Subscription')
    })
  })
})
