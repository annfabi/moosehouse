import React, { Component } from 'react';

class SocialMedia extends Component {
  render() {
	    return (
			<div id="social_media">
				<h3 className="border_bottom">jestem na:</h3>
				<a href="#"><img src="css/img/face_logo.PNG" alt="facebook" /></a>
				<a href="#"><img src="css/img/allegro_logo.PNG" alt="allegro" /></a>
				<a href="#"><img src="css/img/insta_logo.PNG" alt="instagram" /></a>
				<a href="#"><img src="css/img/artillo_logo.PNG" alt="artillo" /></a>
			</div>
	    );
	}
};

SocialMedia.propTypes = {
}

export default SocialMedia;
