import { SPortfolio } from "../../assets/css/modules/sections/portfolio";
import example1 from "../../assets/images/example1.JPG";

export default function Portfolio() {
	/* PROJETOS PORFÓLIOS
	const projects = Array.from({ length: 6 }).map((_, i) => ({
		id: i + 1,
		title: `Contabilidade Renzirossi `,
		subtitle: "Projeto Criado em menos de uma semana, com domínio personalisado",
		image: example1,
		link: "https://contabilidaderenzirossi.com.br/"
	}));
	*/
	return (
		/*
		<SPortfolio id="portfolio">
			<div className="container">
				<header className="section-header fade-in">
					<div>
						<h3>Portfólio</h3>
						<p>Alguns trabalhos recentes.</p>
					</div>
					<a href="#" className="view-all">
						Ver todos
					</a>
				</header>

				<div className="grid">
					{
						projects.map((p) => (
						<article key={p.id} className="card fade-in">
							<a href={p.link} target="_blank" className="img-wrapper">
								<img src={p.image} alt={p.title} loading="lazy" />
								<div className="overlay">
									<h4>{p.title}</h4>
									<p>{p.subtitle}</p>
								</div>
							</a>
						</article>
					)) 
					}
				</div>
			</div>
		</SPortfolio>
		*/
		<SPortfolio id="portfolio" bg={example1}>
			<div className="container">
				<header className="section-header fade-in">
					<div>
						<h3>Portfólio</h3>
						<p>Alguns trabalhos recentes.</p>
					</div>
					<a
						href="https://github.com/Henzo-Brito?tab=repositories"
						target="_blank"
						className="view-all"
					>
						Ver todos
					</a>
				</header>

				<div className="grid">
					<a
						href="https://contabilidaderenzirossi.com.br/"
						target="_blank"
						className="img-wrapper"
					>
						<div className="image-card">
							<img
								src={example1}
								alt="Contabilidade Renzirossi"
								loading="lazy"
							/>
							<div className="overlay">
								<h1>Contabilidade Renzirossi</h1>
								<p>
									Projeto criado em menos de uma semana, com
									domínio personalizado
								</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</SPortfolio>
	);
}
