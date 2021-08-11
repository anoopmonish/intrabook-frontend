import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import './index.css';

import Header from './Header';
import Footer from './Footer';
import Box from './Box';
import Inaugration from './Inaugration';

function App() {
	const menu = [
		{
			"image": "biryani.jpg",
			"title": "Biryani",
			"text": "Mutton Dum Biryani",
			"price": "Rs. 200"
		},
		{
			"image": "pizza.png",
			"title": "Pizza",
			"text": "Fresh pan pizza",
			"price": "Rs. 100"
		},
		{
			"image": "cake.png",
			"title": "Cake",
			"text": "Creamy vanilla cake",
			"price": "Rs. 50"
		},
		{
			"image": "pakoda.png",
			"title": "Pakoda",
			"text": "Garma Garam pakoda",
			"price": "Rs. 40"
		}
	];

	const newMenu = menu.map(function(item) {
		return <Box image={item.image}
					title={item.title}
					text={item.text}
					price={item.price} />;
	});
	return (
		<React.StrictMode>
			<Header />
			<div className="row">
				{newMenu}
			</div>
			<div className="row">
				<Inaugration />
			</div>
			<Footer />
		</React.StrictMode>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));

// .JSX

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/*
<React.StrictMode>
    <App />
  </React.StrictMode>
*/
reportWebVitals();

