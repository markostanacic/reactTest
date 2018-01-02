import React, { Component } from 'react';


class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render () {
    return (
      <div>
      value = {this.state.term}
        <input onChange={(event) => this.setState({term: event.target.value})} />
        //  value of the input: {this.state.term}
      </div>
   );
  }

}


//const SearchBar = () => {
//  return <input />      //React.createElement
//};


export default SearchBar;
