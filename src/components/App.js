import React, { Component } from 'react';
import '../App.css';
import Menu from './Menu';
import HomepageContainer from './HomepageContainer';
import SideBar from './SideBar';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
    	<div className="wrapper">
    		<Menu />
    		<HomepageContainer/>
    		<SideBar />
			<div className="clear"></div>
			<Footer />
		</div>
    );
  }
}

export default App;
