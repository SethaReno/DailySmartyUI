import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPOsts';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Logo />
        <SearchBar/>
        <RecentPosts/>
      </div>
    );
  }
}
