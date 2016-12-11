import React, { Component } from 'react';
import torba from "../img/torba.jpg";

class ShortPost extends Component {
  render() {
	    return (
			<article className="homepage">
				<div className="post_img">
					<img src={this.props.posts.image} alt="post" />
				</div>

				<div className="post_right">
					<div className="post_title_date">
						<h2>{this.props.posts.title}</h2>
						<p className="post_date">{this.props.posts.date}</p>
					</div>
					<p className="post_content">{this.props.posts.lead}</p>
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
