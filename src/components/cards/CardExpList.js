import ExperienceCard from './ExperienceCard'

function CardExpList(props) {
	return (
		<div className="mx-auto col-sm-7 p-3">
		<ul className="list-group mx-auto">
			{props.exps.map((exp) => (
				<ExperienceCard
					key={exp.id}
					org={exp.org}
					orgLink={exp.orgLink}
					dates={exp.dates}
					position={exp.position}
					description={exp.description}
					/>
				))}
			
			</ul>
			</div>
		)
}

export default CardExpList;