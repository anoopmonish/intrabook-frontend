import './Header.css';

function Header() {
	return (
		<div>
			<nav className="navbar navbar-light bg-light" style={{paddingLeft:'15px'}}>
				<a className="navbar-brand" href="#">
					<img src="natural-food.png" width="30" height="30" alt="" />
				</a>
				<span className="navbar-brand mr-0 h3 ns-title"><i>Fusion Core</i></span>
				<button type="button" className="btn btn-secondary ns-mar-right-10" onclick="openLoginModal()">
					Login
				</button>
			</nav>
			<div className="ns-shivam2">aaaaa</div>
		</div>
	);
}

export default Header;