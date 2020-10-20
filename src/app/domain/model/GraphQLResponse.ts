import {ApolloError} from '@apollo/client/core';


export default interface GraphQLResponse<T> {
  readonly error?: ApolloError;
  readonly loading: boolean;
  readonly data?: T;
}
