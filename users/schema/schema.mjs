import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} from 'graphql'
import _ from 'lodash'

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
})

// const Company = new GraphQLObjectType({
//   name: 'User',
//   fields: {
//     id: { type: GraphQLString },
//     name: { type: GraphQLString },
//     description: { type: GraphQLInt }
//   }
// })

const users = [
  { id: '23', firstName: 'Bill', age: 20 },
  { id: '24', firstName: 'Samantha', age: 21 }
]

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentvalue, args) {
        // Hard code for now
        return _.find(users, { id: args.id })
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery
})
