import React, { Component } from 'react';
import ShortPost from './ShortPost';

class HomepageContainer extends Component {



  render() {
	    return (
			<section className="homepage">
				<ShortPost />

				<div id="next_previous">
					<a className="left_arrow" href=""><img src="./img/arrow_left.PNG" alt="arrow left"/></a>
					<p>wczesniejsze posty</p>
					<a href=""><img src="./img/arrow_right.PNG" alt="arrow right"/></a>
				</div>
			</section>
	    );
	}
};

HomepageContainer.propTypes = {
}

export default HomepageContainer;
