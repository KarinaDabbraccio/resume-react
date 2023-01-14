const pStyle = {
	border: "solid 1px darkblue",
	borderRadius: "5px",
	color: "darkblue",
	padding: "20px",
};

function PersonalPage() {
	return (
		<section className="mb-3 p-3">
			<h1 className="m-3">Personal Information</h1>
			<div className="mx-auto col-sm-7 mt-3 bg-light row" style={pStyle}>
				<div className='col-sm-6 p-0'>
					<p>Location: Frederick, MD</p>
				</div>
			</div>
			<div className="mx-auto col-sm-7 mt-3 bg-light row" style={pStyle}>
				<div className='col-sm-6 p-0'>
					<h5>
						<a className="App-link" href="https://www.linkedin.com/in/karina-d-abbraccio-ba37a2227/" target="_blank">LinkedIn</a>
					</h5>
				</div>
				<div className='col-sm-6 p-0'>
					<p>
						<a className="App-link" href="https://www.facebook.com/kf.karinafaiz" target="_blank">Facebook</a>
					</p>
				</div>
			</div>
		</section>
	);
}

export default PersonalPage;