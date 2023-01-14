function ExperienceCard(props) {

	const expStyle = {
		border: "solid 1px darkblue",
		borderRadius: "5px",
		color: "darkblue",
		padding: "20px",
	};

	return (

		<li className='list-group-item bg-light mt-3' style={expStyle}>
			<div className='row'>
				<div className='col-sm-4'>
					<h5 className="card-header">{props.position}</h5>
					<p className="text-left mt-2">{props.dates}</p>
					<p><a className='App-link' href={props.orgLink} target="_blank">{props.org}</a></p>
				</div>
				<p className='col-sm-8'>{props.description}</p>
			</div>
		</li>
	)
}

export default ExperienceCard;