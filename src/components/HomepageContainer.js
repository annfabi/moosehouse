import React, { Component } from 'react';
import ShortPost from './ShortPost';
import arrowLeft from "../img/arrow_left.PNG";
import arrowRight from "../img/arrow_right.PNG";

class HomepageContainer extends Component {
	render() {
		var singlePost = [];
		this.props.posts.forEach(function(post) {
			singlePost.push(<ShortPost  posts={post} key={post.id}/>);
		});
		
	    return (
			<section className="homepage">
				{singlePost}
				<div id="next_previous">
					<a className="left_arrow" href=""><img src={arrowLeft} alt="arrow left"/></a>
					<p>wczesniejsze posty</p>
					<a href=""><img src={arrowRight} alt="arrow right"/></a>
				</div>
			</section>
	    );
	}
};

HomepageContainer.propTypes = {
}

export default HomepageContainer;
