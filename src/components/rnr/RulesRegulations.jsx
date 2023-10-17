import "../../stylesheets/RulesRegulations.scss";

export default function RulesRegulations() {
	return (
		<main className="rules-regulations">
			<h1 className="--header">Guidelines for Our School</h1>
			<p className="--description">Read our student conduct guidelines</p>

			<div className="rules-regulations__text">
				<img src="" alt="" style={{ cursor: "pointer" }} />
			</div>

			<button className="rules-regulations__cta --cta">Get a Student Handbook</button>
		</main>
	);
}
