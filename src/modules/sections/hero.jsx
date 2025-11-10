import {
	HeroBadge,
	HeroImg,
	HeroSection,
	HeroText,
	HeroButtons,
	BtnDark,
	BtnLight,
	Stat,
	Stats,
} from "../../assets/css/modules/sections/hero.js";

import robin from "../../assets/images/1.png";

export default function Hero() {
	return (
		<HeroSection id="hero">
			<HeroText>
				<h2>Nós criamos sites profissionais que vendem — rápido.</h2>
				<p>
					Design estratégico, desenvolvimento rápido e prático, SEO
					para resultados reais.
				</p>

				<HeroButtons>
					<BtnDark href="#contato">Solicitar orçamento</BtnDark>
					<BtnLight href="#portfolio">Ver portfólio</BtnLight>
				</HeroButtons>

				<Stats>
					<Stat>
						<strong>99%</strong>
						<span>Satisfação</span>
					</Stat>
					<Stat>
						<strong>+2</strong>
						<span>Projetos</span>
					</Stat>
					<Stat>
						<strong>2x</strong>
						<span>Conversão</span>
					</Stat>
					<Stat>
						<strong>7h</strong>
						<span>Suporte</span>
					</Stat>
				</Stats>
			</HeroText>

			<HeroImg>
				<img src={robin} alt="hero" />
				<HeroBadge>
					<strong>Lançamento em 4 semanas</strong>
					<p>Design, desenvolvimento e deploy</p>
				</HeroBadge>
			</HeroImg>
		</HeroSection>
	);
}
