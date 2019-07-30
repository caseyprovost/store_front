import gql from 'graphql-tag';

export const VARIANT_QUERY = gql`
  query getVariant($id: ID!) {
    variant(id: $id) {
      id
      name
      position
      sku
      price
      description

      product {
        id
        name

        variants {
          id
          name
          position
          sku
          price
        }

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
