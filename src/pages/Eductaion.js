import React from 'react';
import Video from '../components/Video';

const EDUCATION_DATA = [
	{
		id: '1',
		dates: '2020 - 2022',
		level: 'BS Computer Science',
		description: 'Univercity of Maryland Global Campus, GPA: 4.0, Dean`s list.',
	},
	{
		id: '2',
		dates: '2012',
		level: 'PhD Economics and Business Administration',
		description: 'Ukraine',
	},
]

const edStyle = {
	border: "solid 1px darkblue",
	borderRadius: "5px",
	color: "darkblue",
	padding: "20px",
};

function EducationPage() {
	return (
		<section className="mb-3 p-3">
			<h1 className="m-3">Eductaion</h1>
			<div className="mx-auto col-sm-7">
				<ul className="list-group mx-auto">
				{EDUCATION_DATA.map((ed) => {
					return (
						<li className='list-group-item bg-light mt-3' style={edStyle}>
							<h5>{ed.level}</h5>
							<p>{ed.dates}</p>
							<p>{ed.description}</p>
						</li>
					);
				})}
				</ul>
			</div>

			<div className="mx-auto col-sm-7 mt-3 bg-light row" style={edStyle}>
				<div className='col-sm-4 p-0'><h5>Personal project</h5></div>
				<div className='col-sm-8 p-0'>
					<p>Check the <a
						className="App-link"
						href="https://github.com/KarinaDabbraccio/Django"
						target="_blank"
						rel="noopener noreferrer"
					>Django app</a> presentation on GitHub.
					</p>
				</div>
				<div classname='row pl-0' style={{ maxWidth: '560px' }}>
					<Video />
				</div>
			</div>
		</section>
	);
}

export default EducationPage;