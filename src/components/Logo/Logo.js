import React from 'react';
import './Logo.css';
import thinkLogo from './logo.png';
import Tilt from 'react-tilt';


const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner"> 
 					<img alt='logo' src={thinkLogo}/>
 				</div>
			</Tilt>
		</div>
	)
}

export default Logo;