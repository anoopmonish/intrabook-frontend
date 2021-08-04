
function Box(item) {
	return (
		<div className="col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2 ns-pad-top-10"> 
			<div className="card"> 
				<img className="card-img-top" alt="NA" src={item.image} /> 
				<div className="card-body"> 
					<h5 className="card-title">{item.title}</h5> 
					<p className="card-text">{item.text}</p> 
					<p className="card-footer">{item.price}</p> 
				</div> 
			</div> 
		</div>
	);
}

export default Box;