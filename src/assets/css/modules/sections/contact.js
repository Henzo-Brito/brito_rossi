import styled from "styled-components";
import { stylesVar } from "../../styleVar";

export const SContact = styled.section`
	padding: 100px 0;
	background: ${stylesVar.cPurple};
	color: ${stylesVar.cBlack};
	transition: background-color 0.3s ease, color 0.3s ease;

	@media (max-width: ${stylesVar.breakTablet}) {
		padding: 50px 0;
	}
	.container {
		width: min(1200px, 90%);
		margin: 0 auto;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 50px;
		align-items: start;

		@media (max-width: ${stylesVar.breakTablet}) {
			grid-template-columns: 1fr;
			padding: 0;
			gap: 40px;
		}
	}

	.line {
		width: 100%;
		display: none;
		justify-content: space-between;
		align-items: center;
		.l1 {
			width: 40%;
			height: 3px;
			border-radius: 4px;
			background-color: ${stylesVar.cGrayDark};
		}
		p {
			font-size: 17px;
			width: 20%;
			text-align: center;
		}
		@media only screen and (max-width: ${stylesVar.breakTablet}){
			display: flex;
		}
	}
	/* === Lado Esquerdo === */
	.contact-info {
		h3 {
			font-family: ${stylesVar.fFH1};
			font-size: ${stylesVar.fHeroTitle};
			color: ${stylesVar.cWhite};
			margin-bottom: 10px;
		}

		p {
			color: ${stylesVar.cTextMuted};
			font-size: clamp(18px, 2dvw, 22px);
			text-align: justify;
			margin-bottom: 30px;
		}

		.info-blocks {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}

		.info-item {
			display: flex;
			align-items: center;
			gap: 15px;
			background: ${stylesVar.cBgDark};
			padding: 25px 20px;
			border-radius: ${stylesVar.borderRadius};
			box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
			transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
			&:hover {
				cursor: pointer;
				transform: translateY(-3px);
			}
			img {
				width: clamp(20px, 10dvw, 40px);
			}

			strong {
				font-size: clamp(18px, 2dvw, 20px);
				text-align: start;
				display: block;
				color: ${stylesVar.cText};
			}

			p {
				font-size: clamp(13px, 2dvw, 18px);
				color: ${stylesVar.cTextMuted};
				margin: 0;
			}
		}

		.btn {
			align-self: start;
			margin-top: 20px;
			display: inline-block;
			padding: 18px 28px;
			font-weight: 600;
			border-radius: ${stylesVar.borderRadius};
			text-decoration: none;
			transition: 0.3s ease;
			text-align: center;
			@media only screen and (max-width: ${stylesVar.breakTablet}) {
				display: none;
			}
			&.btn-green {
				background: ${stylesVar.cBgDark};
				color: ${stylesVar.cBgLight};

				&:hover {
					filter: brightness(1.1);
				}
			}
		}
	}

	/* === Formulário === */
	.form {
		display: flex;
		flex-direction: column;
		gap: 20px;
		background: ${stylesVar.cBgDark};
		padding: 40px 30px;
		border-radius: ${stylesVar.borderRadiusLarge};
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

		h1 {
			font-size: clamp(25px, 6dvw, 35px);
		}
		@media (max-width: ${stylesVar.breakTablet}) {
			gap: 10px;
		}
		label {
			display: flex;
			flex-direction: column;
			text-align: left;
			font-weight: 500;
			color: ${stylesVar.cWhite};
			font-family: ${stylesVar.fFp};
			gap: 6px;
			font-size: ${stylesVar.fSP};

			input,
			textarea {
				padding: 12px 14px;
				border-radius: ${stylesVar.borderRadius};
				border: 2px solid ${stylesVar.cPurple};
				outline: none;
				font-size: 1rem;
				color: ${stylesVar.cGrayLight};
				font-family: ${stylesVar.fFp};
				background-color: ${stylesVar.cGrayDark};
				transition: border-color 0.2s ease, box-shadow 0.2s ease;
				@media (max-width: ${stylesVar.breakTablet}) {
					padding: 7px 8px;
				}
				&:focus {
					border-color: ${stylesVar.cPurple};
					box-shadow: 0 0 0 3px rgba(106, 90, 205, 0.2);
				}
			}
		}

		.buttons {
			display: flex;
			align-items: center;
			justify-content: space-between;

			@media screen and (max-width: ${stylesVar.breakMobile}) {
				flex-direction: column-reverse;
				gap: 20px;
			}
			.text {
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: ${stylesVar.cWhite};
				input[type="checkbox"] {
					appearance: none;
					-webkit-appearance: none;
					-moz-appearance: none;

					margin: 20px;
					padding: 10px;
					cursor: pointer;
					background-color: ${stylesVar.cGrayDark};
					transition: background-color 0.3s;
					border-radius: 50%;
					border: 2px solid ${stylesVar.cGrayLight};
					@media screen and(max-width: ${stylesVar.breakMobile}) {
						margin: 0;
						padding: 8px;
					}
					&:checked {
						background-color: ${stylesVar.cGrayLight};
					}
				}
				p {
					font-size: clamp(12px, 2dvw, 15px);
				}
				Link {
					font-size: clamp(10px, 2dvw, 10px);
				}
			}
		}

		button {
			margin-top: 10px;
			background: ${stylesVar.cPurple};
			color: ${stylesVar.cWhite};
			font-weight: 600;
			padding: 12px 30px;
			border: none;
			width: 40%;
			border-radius: ${stylesVar.borderRadius};
			cursor: pointer;
			transition: 0.3s ease;

			font-size: ${stylesVar.fSP};
			&:hover {
				background: ${stylesVar.cHover};
			}
			@media (max-width: ${stylesVar.breakMobile}) {
				width: 100%;
				margin: 0;
			}
		}
	}
`;
