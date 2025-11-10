import { styled } from "styled-components";
import { stylesVar } from "../../styleVar";

export const SPortfolio = styled.section`
	color: ${stylesVar.cWhite};
	transition: background-color 0.3s ease, color 0.3s ease;
	width: 100%;
	height: clamp(410px, 80dvw, 700px);
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;
	padding: 10px;

	/* ===== Fundo com blur ===== */
	&::before {
		content: "";
		position: absolute;
		inset: 0;
		background-image: url(${(props) => props.bg});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: blur(60px);
		transform: scale(1.1);
		z-index: 0;
	}

	/* ===== Sombra escura para contraste ===== */
	&::after {
		content: "";
		position: absolute;
		inset: 0;
		background: ${stylesVar.cHover2};
		z-index: 1;
	}

	.container {
		position: relative;
		z-index: 2;
		max-width: 1000px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	/* ===== IMAGEM PRINCIPAL ===== */
	#renzi {
		border-radius: 14px;
		object-fit: cover;
		transition: transform 0.8s cubic-bezier(0.25, 1, 0.3, 1),
			filter 0.8s ease;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
	}

	/* ===== OVERLAY ===== */
	.image-card {
		position: relative;
		max-width: 1000px;
		height: clamp(150px, 50dvw, 500px);
		border-radius: 10px;
		overflow: hidden;
		cursor: pointer;

		img {
			width: 100%;
			height: 100%;
			display: block;
			border-radius: inherit;
			transition: transform 0.5s ease;
			@media only screen and (max-width: ${stylesVar.breakMobile}) {
				background-position: center;
				background-size: auto 500px;
			}
		}

		.overlay {
			position: absolute;
			inset: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			color: ${stylesVar.cWhite};
			background: rgba(0, 0, 0, 0.4);
			backdrop-filter: blur(0px);
			opacity: 0;
			transition: opacity 0.4s ease, backdrop-filter 0.4s ease;
		}

		&:hover .overlay {
			opacity: 1;
			backdrop-filter: blur(
				10px
			); /* 🎯 Aplica o blur só na área da imagem */
		}
	}

	/* ===== HOVER — efeito moderno ===== */
	&:hover #renzi {
		transform: scale(1.12);
		filter: brightness(1.1) contrast(1.05);
	}

	&:hover .overlay {
		opacity: 1;
		transform: translateY(0) scale(1);
	}

	&:hover .overlay h4,
	&:hover .overlay p {
		opacity: 1;
		transform: translateY(0);
		filter: blur(0);
	}

	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		flex-wrap: wrap;
		margin-bottom: 20px;

		h3 {
			font-family: ${stylesVar.fFH1};
			font-size: ${stylesVar.fHeroTitle};
			color: ${stylesVar.cWhite};
		}

		p {
			color: ${stylesVar.cTextMuted};
		}

		.view-all {
			color: ${stylesVar.cWhite};
			font-weight: 600;
			text-decoration: none;
			border-bottom: 2px solid transparent;
			transition: 0.3s ease;

			&:hover {
				color: ${stylesVar.cHover};
				border-color: ${stylesVar.cHover};
			}
		}
	}
`;

/*
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;

		@media (max-width: ${stylesVar.breakTablet}) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: ${stylesVar.breakMobile}) {
			grid-template-columns: 1fr;
		}
	}

	.card {
		position: relative;
		border-radius: ${stylesVar.borderRadiusLarge};
		overflow: hidden;
		cursor: pointer;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
		transition: transform 0.3s ease;

		&:hover {
			transform: translateY(-5px);
		}

		.img-wrapper {
			position: relative;
			width: 100%;
			height: 100%;
			overflow: hidden;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				transition: transform 0.4s ease;
			}

			.overlay {
				position: absolute;
				inset: 0;
				background: rgba(0, 0, 0, 0.6);
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				color: ${stylesVar.cWhite};
				opacity: 0;
				transition: opacity 0.3s ease;
				text-align: center;

				h4 {
					font-family: ${stylesVar.fFH1};
					font-size: clamp(18px, 2vw, 24px);
					margin-bottom: 5px;
				}

				p {
					color: ${stylesVar.cTextMuted};
					font-size: ${stylesVar.fSP};
				}
			}

			&:hover img {
				transform: scale(1.1);
			}

			&:hover .overlay {
				opacity: 1;
			}
		}
	}*/
