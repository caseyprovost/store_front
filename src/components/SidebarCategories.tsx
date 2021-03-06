import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Category } from '../types/category'

const ALL_CATEGORIES_QUERY = gql`
  query {
    categories {
      id
      name
    }
   }
`;

interface Data {
  categories: Array<Category>;
};

export const SidebarCategories = <Query<Data, {}> query={ALL_CATEGORIES_QUERY}>
  {({ loading, error, data }) => {
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return data && data.categories.map((category, index) => {
      return (<div className="ml-5 text-left" key={index}>
        <input type="checkbox" className="form-checkbox text-indigo-500" />
        <a href="#" className="ml-2 text-white">{category.name}</a>
      </div>)
    });
  }}
</Query>
