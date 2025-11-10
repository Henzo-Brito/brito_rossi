import { SPlanos } from "../../assets/css/modules/sections/planos";

export default function Planos() {
	return (
		<SPlanos id="planos">
			<div className="container">
				<header className="fade-in">
					<h3>Planos de Pagamento</h3>
					<p>Planos flexíveis e acessíveis, com opções mensais, trimestrais e anuais. Escolha o que melhor se adapta às suas necessidades.</p>
				</header>

				<div className="grid">
					<div className="plan  fade-in">
						<div className="price">Business</div>
						<ul>
							<li>
								Site de 1 página (home, serviços, contato, mapa
								e WhatsApp)
							</li>
							<li>Certificado de segurança (HTTPS)</li>
							<li>Publicação e configuração do domínio</li>
						</ul>
						<a href="#contato" className="btn btn-dark">
							Contratar
						</a>
					</div>

					<div className="plan featured fade-in">
						<div className="price">Starter</div>
						<ul>
							<li>
								Site de até 5 páginas (Home, Sobre, Serviços,
								Portfólio e Contato)
							</li>
							<li>Blog ou seção de notícias configurado</li>
							<li>
								SEO básico para melhor posicionamento no Google
							</li>
						</ul>
						<a href="#contato" className="btn btn-green">
							Contratar
						</a>
					</div>

					{/* === Enterprise === */}
					<div className="plan fade-in">
						<div className="price">Enterprise</div>
						<ul>
							<li>mais de 8 páginas totalmente personalizadas</li>
							<li>
								SEO avançado com análise e otimização de
								palavras-chave
							</li>
						</ul>
						<a href="#contato" className="btn btn-light">
							Saber mais
						</a>
					</div>
				</div>
			</div>
		</SPlanos>
	);
}
