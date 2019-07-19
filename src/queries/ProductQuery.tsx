import gql from 'graphql-tag';

export const PRODUCT_QUERY = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
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
