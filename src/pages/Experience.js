import React from 'react';
import CardExpList from '../components/cards/CardExpList';

const expStyle = {
	border: "solid 1px darkblue",
	borderRadius: "5px",
	color: "darkblue",
	padding: "20px",
};

const EXPERIENCE_DATA = [
	{
		id: '1',
		org: 'iHire, LLC',
		orgLink: 'https://www.ihire.com/about',
		dates: '2022',
		position: 'Software Development Intern',
		description: 'Working in a development team to fix issues and create new features in ASP.Net, that includes customer facing websites and internal site and analytic tools. Communicate with users and dev team to discuss feature details and acceptance criteria of user stories in Rally and Fogbugz while supporting multiple teams. Implement code changes in dev, test and production environment and test the results. Cross - collaboration with other teams to provide information on technical capabilities. Gained experience in software development workflow process, timekeeping, and documentation. Participate in requirements, estimation, and other scrum meetings.Gained additional experience in C#, JavaScript, HTML5, and SQL.',
	},
	{
		id: '2',
		org: 'TAF-87',
		dates: '2016 - 2018',
		orgLink: 'https://taf-87.prom.ua/ua/',
		position: 'Sales Manager',
		description: '	Worked closely with customers to assist them with finding the correct solution for their needs. Responsible for the execution of sales contracts, marketing activities, and detailed analysis of sales metrics.Developed a deep knowledge of the metal fabrication business.',
	},
	{
		id: '3',
		org: 'National Technical University KPI',
		orgLink: 'https://www.kpi.kharkov.ua/eng/',
		dates: '2013 - 2016',
		position: 'Professor of Economics',
		description: 'Taught Management and Marketing to students enrolled in a master`s program for software development. Engaged and collaborated with IT organizations within Ukraine. Gained knowledge of the organizational structure and business processes of software development firms.'
	},

]

function ExperiencePage() {


	return (
		<section className='mb-3'>
			<h1 className='m-3'>Professional Experience</h1>
			<CardExpList exps={EXPERIENCE_DATA} />	
		</section>
	);
}

export default ExperiencePage;