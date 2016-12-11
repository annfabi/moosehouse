import React, { Component } from 'react';
import '../App.css';
import Menu from './Menu';
import HomepageContainer from './HomepageContainer';
import SideBar from './SideBar';
import Footer from './Footer';
import myData from '../sample';


class App extends Component {

  render() {
    return (
    	<div className="wrapper">
    		<Menu />
    		<HomepageContainer posts={myData} />
    		<SideBar />
			<div className="clear"></div>
			<Footer />
		</div>
    );
  }
}

export default App;
