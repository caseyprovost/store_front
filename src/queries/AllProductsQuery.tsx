import gql from 'graphql-tag';

export const ALL_PRODUCTS_QUERY = gql`
  query {
    products {
      id
      name
      description
      variants {
        id
        name
        position
        sku
        price
      }
    }
   }
`;
