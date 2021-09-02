import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import './index.css';

import Header from './Header';
import Footer from './Footer';
import Post from './Post';

function App() {

	const [posts, setPosts] = useState([]);
    const [loadDone, setloadDone] = useState(false);
	const userId = 'anoop';

	useEffect(() => {
		if (!loadDone && userId) {
			const movProm = fetch('http:///localhost:8080/posts');
			movProm.then(function(response) {
				setloadDone(true);
				response.json().then(function(resp) {
					setPosts(resp);
				});
			} , function(error) {
				console.log(error);
			});
		}
	});

	const postBoxes = posts.map(function(item) {
		return <Post userId={userId} item={item} key={item.postId}/>;
	});
	return (
		<div>
			<center>Logged in as: {userId}</center>
			<div className="row">
				{postBoxes}
			</div>
		</div>
	);
}

ReactDOM.render(
		<React.StrictMode>
			<Header />
			<App />
			<Footer />
		</React.StrictMode>, 
	document.getElementById('root'));

reportWebVitals();

