import gql from 'graphql-tag';

export const ALL_PRODUCTS_QUERY = gql`
  query {
    variants {
      id
      name
      position
      sku
      price

      product {
        id
        name
        description

        optionTypes {
          name
        }
      }
    }
  }
`;
