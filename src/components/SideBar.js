import React, { Component } from 'react';
import WoolList from './WoolList';
import AboutMe from './AboutMe';
import SocialMedia from './SocialMedia';

class SideBar extends Component {
  render() {
	    return (
			<aside>
				<AboutMe />
				<SocialMedia />
				<WoolList />
			</aside>
	    );
	}
};


SideBar.propTypes = {
}

export default SideBar;
