import { ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";
import { uri } from './constant';

//apollo client

const client = new ApolloClient({
    uri,
    cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
                UsersList: offsetLimitPagination(),
            },
          },
        },
      }),
      fetchOptions: {
        mode: 'no-cors'
      }
});

export default client;