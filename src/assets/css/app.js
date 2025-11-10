import { createGlobalStyle } from "styled-components";
import { stylesVar } from "./styleVar.js";

// Use createGlobalStyle em vez de styled.html — é mais correto para estilo global
export const GlobalStyle = createGlobalStyle`
	/* === Reset CSS básico === */
	*, *::before, *::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		scroll-behavior: smooth;
	}
	
	html {
			font-size: 16px;
	}

	body {
		margin: 0;
		padding: 0;
		margin-top: 100px;
		background-color: ${stylesVar.cBgDark};
		color: ${stylesVar.cText};
		font-family: ${stylesVar.fFp};
		line-height: 1.6;
		overflow-x: hidden;
		transition: background-color 0.3s ease, color 0.3s ease;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: ${stylesVar.fFH1};
		color: ${stylesVar.cWhite};
		line-height: 1.2;
	}

	h1 {
		font-size: ${stylesVar.fSH1};
	}

	p, a, li, span {
		font-size: ${stylesVar.fSP};
	}

	a {
		color: ${stylesVar.cLink};
		text-decoration: none;
		transition: color 0.2s ease;

		&:hover {
			color: ${stylesVar.cHover};
		}
	}

	ul {
		list-style: none;
		padding-left: 0;
	}

	button {
		font-family: ${stylesVar.fFp};
		cursor: pointer;
		border: none;
		outline: none;
	}

	img {
		max-width: 100%;
		height: auto;
		display: block;
	}

	/* === Scrollbar personalizada === */
	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: ${stylesVar.cGrayDark};
	}

	::-webkit-scrollbar-thumb {
		background: ${stylesVar.cPurple};
		border-radius: 10px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: ${stylesVar.cHover};
	}

	/* === Seleção de texto personalizada === */
	::selection {
		background: ${stylesVar.cPurple};
		color: ${stylesVar.cWhite};
	}

	/* === Animações globais (fade-in, slide) === */
	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(10px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.fade-in {
		animation: fadeIn 0.6s ease forwards;
	}

	/* === Responsividade base === */
	@media (max-width: ${stylesVar.breakTablet}) {
		html {
			font-size: 15px;
		}
	}

	@media (max-width: ${stylesVar.breakMobile}) {
		html {
			font-size: 14px;
		}
	}
`;
