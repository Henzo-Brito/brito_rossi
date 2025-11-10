import { useState } from "react";
import {
	SHeader,
	LogoArea,
	LogoBox,
	LogoText,
	Nav,
	MenuButton,
	MobileMenu,
} from "../../assets/css/modules/global/header.js";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	// Scroll suave com offset
	const handleScroll = (e, id) => {
		e.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			const offset = -40; // deslocamento de -10px
			const y =
				element.getBoundingClientRect().top +
				window.pageYOffset +
				offset;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
		setMenuOpen(false); // fecha o menu mobile
	};

	return (
		<header>
			<SHeader>
				<a
					href="#"
					style={{ width: "auto" }}
					onClick={(e) => handleScroll(e, "hero")}
				>
					<LogoArea>
						<LogoBox>BR</LogoBox>
						<LogoText>Brito Rossi</LogoText>
					</LogoArea>
				</a>

				{/* Menu normal (desktop) */}
				<Nav>
					<a
						href="#servicos"
						onClick={(e) => handleScroll(e, "servicos")}
					>
						Serviços
					</a>
					<a
						href="#portfolio"
						onClick={(e) => handleScroll(e, "portfolio")}
					>
						Portfólio
					</a>
					<a
						href="#planos"
						onClick={(e) => handleScroll(e, "planos")}
					>
						Planos
					</a>
					<a
						href="#contato"
						onClick={(e) => handleScroll(e, "contato")}
					>
						Contato
					</a>
				</Nav>

				{/* Botão mobile */}
				<MenuButton onClick={() => setMenuOpen(!menuOpen)}>
					{menuOpen ? "✕" : "☰"}
				</MenuButton>
			</SHeader>

			{/* Menu mobile abaixo do header */}
			<MobileMenu open={menuOpen}>
				<a
					href="#servicos"
					onClick={(e) => handleScroll(e, "servicos")}
				>
					Serviços
				</a>
				<a
					href="#portfolio"
					onClick={(e) => handleScroll(e, "portfolio")}
				>
					Portfólio
				</a>
				<a href="#planos" onClick={(e) => handleScroll(e, "planos")}>
					Planos
				</a>
				<a href="#contato" onClick={(e) => handleScroll(e, "contato")}>
					Contato
				</a>
			</MobileMenu>
		</header>
	);
}
