import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBvyLHJgqXRA7yK5T9KccKNCehqzFCN3xY';

const App =  () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector('.container'));
