import React, { Component } from 'react';

class Menu extends Component {
  render() {
	    return (
			<nav>
				<ul>
					<a href="#"><li className="active">główna</li></a>
					<a href="#"><li className="noactive">galeria</li></a>
					<a href="#"><li className="noactive">kontakt</li></a>
				</ul>
			</nav>
	    );
	}
};

Menu.propTypes = {
}

export default Menu;
