import React from 'react';
import './App.css';
import TopBar from './TopBar';
import { SidebarCategories } from './components/SidebarCategories';
import { ProductsListingPage } from './components/ProductsListingPage';
import ProductPage from './components/ProductPage';
import { Route, Switch, RouteComponentProps, BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <TopBar />
      <div className="md:flex">
        <div className="mt-0 w-1/6 h-screen bg-gray-900 shadow sticky">
          <h3 className="text-left ml-6 mt-5 mb-2 text-indigo-500">Categories</h3>
          {SidebarCategories}
        </div>
        <div className="w-5/6 text-left container">
          <Router>
            <Switch>
              <Route exact={true} path="/" component={ProductsListingPage} />
              <Route exact={true} path="/products" component={ProductsListingPage} />
              <Route
                exact={true}
                path="/products/:id"
                component={
                  ({ match }: RouteComponentProps<{ id: string }>) => (
                    <ProductPage id={match.params.id} />
                  )}
              />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
