import React, { Component } from 'react';

class ShortPost extends Component {
  render() {
	    return (
			<article className="homepage">
				<div className="post_img">
					<img src="img/post_1.PNG" alt="post" />
				</div>

				<div className="post_right">
					<div className="post_title_date">
						<h2>Tytuł posta</h2>
						<p className="post_date">19.08.2015</p>
					</div>
					<p className="post_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec viverra massa. Phasellus placerat nibh eget lorem scelerisque lacinia. Donec elit nisl, pharetra a ante eget, lobortis hendrerit metus. Suspendisse ac felis id nulla feugiat rutrum ac non sapien.</p>
					<a href="post.html" className="post_read">czytaj dalej</a>
					<div className="clear"></div>
				</div>
				<div className="clear"></div>
			</article>
	    );
	}
};

ShortPost.propTypes = {
}


export default ShortPost;
