import { styled } from "styled-components";
import { stylesVar } from "../../styleVar";

// ===== HEADER PRINCIPAL =====
export const SHeader = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: clamp(12px, 2vw, 20px) clamp(16px, 4vw, 40px);
	position: fixed;
	top: 0;
	z-index: 100;
	height: ${stylesVar.headerHeight};
	background: ${stylesVar.cBlack};
	backdrop-filter: blur(12px);
	border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	font-family: ${stylesVar.fFp};
	transition: background 0.3s ease, box-shadow 0.3s ease;

	&.scrolled {
		background: rgba(0, 0, 0, 0.85);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
	}

	@media (max-width: ${stylesVar.breakTablet}) {
		padding: clamp(10px, 4vw, 16px) clamp(14px, 5vw, 24px);
	}
`;

// ===== LOGO =====
export const LogoArea = styled.div`
	display: flex;
	align-items: center;
	gap: clamp(8px, 1.5vw, 12px);
	cursor: pointer;
	transition: opacity 0.3s ease;

	&:hover {
		opacity: 0.9;
	}
`;

export const LogoBox = styled.div`
	width: clamp(50px, 8vw, 55px);
	transition: transform 0.25s ease, background 0.3s ease;

	&:hover {
		transform: rotate(-9deg) scale(1.08);
	}
`;

export const LogoText = styled.h2`
	font-family: ${stylesVar.fFH1};
	font-size: clamp(25px, 4vw, 35px);
	color: ${stylesVar.cWhite};
	text-transform: uppercase;

`;

// ===== NAVEGAÇÃO =====
export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: clamp(1rem, 3vw, 2rem);

	a {
		color: ${stylesVar.cWhite};
		text-decoration: none;
		font-weight: 500;
		font-size: ${stylesVar.fSP};
		position: relative;
		transition: color 0.3s ease;

		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: -4px;
			width: 0%;
			height: 2px;
			background: ${stylesVar.cPurple};
			transition: width 0.3s ease;
		}

		&:hover {
			color: ${stylesVar.cPurple};
		}

		&:hover::after {
			width: 100%;
		}
	}

	@media (max-width: ${stylesVar.breakMobile}) {
		display: none;
	}
`;

// ===== BOTÃO MOBILE =====
export const MenuButton = styled.button`
	display: none;

	@media (max-width: ${stylesVar.breakMobile}) {
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		color: ${stylesVar.cWhite};
		font-size: clamp(26px, 6vw, 32px);
		cursor: pointer;
		transition: color 0.3s ease, transform 0.2s ease;

		&:hover {
			color: ${stylesVar.cPurple};
			transform: scale(1.08);
		}
	}
`;

// ===== MENU MOBILE =====
export const MobileMenu = styled.div`
	width: 100%;
	background: rgba(10, 10, 10, 0.95);
	display: flex;
	flex-direction: column;
	position: fixed;
	z-index: 111;
	top: calc(${stylesVar.headerHeight} - 10px);
	left: 0;
	padding: ${(props) => (props.open ? "clamp(14px, 3vw, 18px)" : "0")};
	gap: clamp(10px, 3vw, 14px);
	overflow: hidden;
	backdrop-filter: blur(12px);

	max-height: ${(props) => (props.open ? "400px" : "0")};
	opacity: ${(props) => (props.open ? 1 : 0)};
	pointer-events: ${(props) => (props.open ? "auto" : "none")};
	transition: all 0.4s ease;

	a {
		color: ${stylesVar.cWhite};
		text-decoration: none;
		font-size: ${stylesVar.fSP};
		padding: 8px 0;
		text-align: center;
		transition: color 0.3s ease;

		&:hover {
			color: ${stylesVar.cPurple};
		}
	}

	@media (min-width: ${stylesVar.breakMobile}) {
		display: none;
	}
`;
