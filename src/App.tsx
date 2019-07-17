import React from 'react';
import './App.css';
import TopBar from './TopBar';
import { SidebarCategories } from './components/SidebarCategories'
import { ProductListing } from './components/ProductListing'

const App: React.FC = () => {
  return (
    <div className="App">
      <TopBar />
      <div className="md:flex">
        <div className="mt-0 w-1/6 bg:teal-500 h-screen bg-gray-300 shadow fixed">
          <h3 className="text-left ml-6 mt-5 mb-5">Categories</h3>
          {SidebarCategories}
        </div>
        <div className="ml-56 w-full pl-4 text-left">
          <div className="pt-3 pb-3 pr-6 pl-6 border-solid border-gray-200 border-b w-full">
            <p>Displaying 1 of 1 results</p>
          </div>
          <div className="py-5 px-5">
            {ProductListing}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
