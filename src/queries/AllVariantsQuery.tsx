import gql from 'graphql-tag';

export const ALL_VARIANTS_QUERY = gql`
  query {
    variants {
      id
      name
      position
      sku
      price
      description
    }
  }
`;
