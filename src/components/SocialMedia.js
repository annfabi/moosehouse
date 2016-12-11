import React, { Component } from 'react';
import facebook from '../img/face_logo.PNG';
import allegro from "../img/allegro_logo.png";
import instagram from "../img/insta_logo.PNG";
import artillo from "../img/artillo_logo.PNG";

class SocialMedia extends Component {
  render() {
	    return (
			<div id="social_media">
				<h3 className="border_bottom">jestem na:</h3>
				<a href="#"><img src={facebook} alt="facebook" /></a>
				<a href="#"><img src={allegro} alt="allegro" /></a>
				<a href="#"><img src={instagram} alt="instagram" /></a>
				<a href="#"><img src={artillo} alt="artillo" /></a>
			</div>
	    );
	}
};

SocialMedia.propTypes = {
}

export default SocialMedia;
