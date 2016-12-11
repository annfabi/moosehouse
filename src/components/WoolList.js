import React, { Component } from 'react';

class WoolList extends Component {
  render() {
	    return (
			<div id="category">
				<h3 className="border_bottom">kategorie</h3>
				<ul className="wool_list">
					<li><a href="#">filcowanie</a></li>
					<li><a href="#">szycie</a></li>
					<li><a href="#">malowanie</a></li>
					<li><a href="#">biżuteria</a></li>
					<li><a href="#">kartki</a></li>
				</ul>
			</div>
	    );
	}
};

WoolList.propTypes = {
}


export default WoolList;
