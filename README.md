# GraphQL-schema-tools: merge and stitch GraphQL.js schemas

This package extends and supplements [graphql-tools](https://github.com/apollographql/graphql-tools),
adding methods for prefixing schemas, merging and stitching them.

## Example

    import { prefixTypeDefs, prefixResolvers } from 'graphql-schema-tools'

    const typeDefs = prefixTypeDefs('a_', '')
    const resolvers = prefixResolvers('a_', {})

## Contributions

Contributions, issues and feature requests are very welcome. If you found this
package useful and fixed a bug or added a feature, please consider submitting a
pull request!
