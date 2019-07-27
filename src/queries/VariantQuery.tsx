import gql from 'graphql-tag';

export const VARIANT_QUERY = gql`
  query getVariant($id: ID!) {
    variant(id: $id) {
      id
      name
      position
      sku
      price

      product {
        id
        name
        description

        productProperties {
          value
          property {
            name
            presentation
          }
        }
      }
    }
   }
`;
