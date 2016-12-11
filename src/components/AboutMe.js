import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
	    return (
			<div id="about">
				<div id="foto">
					<img src="img/foto_border.PNG" alt="o mnie" />
				</div>
				<h3>hi<span className="color">!</span></h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum massa ipsum, quis scelerisque tortor finibus a. Cras a nibh tempor, placerat felis eu, congue dui. Cras sollicitudin hendrerit mauris</p>
			</div>
	    );
	}
};

AboutMe.propTypes = {
}

export default AboutMe;
