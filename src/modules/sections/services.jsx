import { SSection } from "../../assets/css/modules/sections/services";

import siteIcon from "../../assets/images/site.svg";
import cartIcon from "../../assets/images/cart.svg";
import gearIcon from "../../assets/images/gear.svg";

export default function Services() {
	const services = [
		{
			icon: siteIcon,
			title: "Sites Institucionais",
			desc: "Landing Pages, Layouts modernos, performance e SEO.",
		},
		{
			icon: cartIcon,
			title: "Design Responsivo",
			desc: "Sites com designs únicos para Desktop e Celular.",
		},
		{
			icon: gearIcon,
			title: "Manutenção (Incluso nos planos)",
			desc: "Suporte, atualizações e monitoramento contínuo.",
		},
	];

	return (
		<SSection id="servicos">
			<div className="container">
				<header className="text-center fade-in">
					<h3>O que fazemos?</h3>
					<p>
						Cobrimos todo o ciclo de criação do seu site
						profissional, desde a concepção, design,
						desenvolvimento, SEO e manutenção.
					</p>
				</header>

				<div className="grid">
					{services.map((s, i) => (
						<article key={i} className="card fade-in">
							<img src={s.icon} width="40" height="40" />
							<h4>{s.title}</h4>
							<p>{s.desc}</p>
						</article>
					))}
				</div>
			</div>
		</SSection>
	);
}
