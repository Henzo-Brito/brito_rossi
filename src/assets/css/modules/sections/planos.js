import styled from "styled-components";
import { stylesVar } from "../../styleVar";

export const SPlanos = styled.section`
	padding: 100px 0;
	background: ${stylesVar.cBgDark};
	color: ${stylesVar.cText};
	text-align: center;

	@media only screen and (max-width: ${stylesVar.breakMobile}) {
		padding: 20px 0px;
	}

	.container {
		width: min(1200px, 90%);
		margin: 0 auto;
	}

	header {
		margin-bottom: 60px;

		h3 {
			font-family: ${stylesVar.fFH1};
			font-size: ${stylesVar.fHeroTitle};
			color: ${stylesVar.cWhite};
			margin-bottom: 10px;
		}

		p {
			color: ${stylesVar.cTextMuted};
		}
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
		margin-top: 50px;

		@media (max-width: ${stylesVar.breakTablet}) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: ${stylesVar.breakMobile}) {
			grid-template-columns: 1fr;
		}
	}

	.plan {
		background: ${stylesVar.cGrayDark};
		border: 1px solid ${stylesVar.borderColor};
		border-radius: ${stylesVar.borderRadiusLarge};
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		padding: 30px 30px;
		transition: all 0.3s ease;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
		@media (max-width: ${stylesVar.breakMobile}) {
			padding: 15px;
		}
		&:hover {
			transform: translateY(-6px);
			border-color: ${stylesVar.cPurple};
			box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
		}

		h4 {
			font-family: ${stylesVar.fFH1};
			font-size: ${stylesVar.fHeroTitle};
			color: ${stylesVar.cWhite};
			margin-bottom: 15px;
		}

		.price {
			font-size: clamp(24px, 3vw, 32px);
			color: ${stylesVar.cPurple};
			font-weight: 700;
			margin-bottom: 25px;
		}

		ul {
			list-style: none;
			margin-bottom: 30px;

			li {
				color: ${stylesVar.cTextMuted};
				margin-bottom: 8px;
			}
		}

		.btn {
			display: inline-block;
			width: 100%;
			padding: 12px 28px;
			font-weight: 600;
			border-radius: ${stylesVar.borderRadius};
			text-decoration: none;
			transition: 0.3s ease;

			&.btn-dark {
				background: ${stylesVar.cPurple};
				color: ${stylesVar.cBgLight};

				&:hover {
					background: ${stylesVar.cHover};
				}
			}

			&.btn-green {
				background: ${stylesVar.cOrange};
				color: ${stylesVar.cWhite};

				&:hover {
					filter: brightness(1.1);
				}
			}

			&.btn-light {
				background: ${stylesVar.cPurple};
				color: ${stylesVar.cBgLight};

				&:hover {
					background: ${stylesVar.cHover};
				}
			}
		}

		&.featured {
			background: ${stylesVar.cPurple};
			color: ${stylesVar.cWhite};
			transform: scale(1.05);
			border-color: transparent;

			h4,
			.price {
				color: ${stylesVar.cWhite};
			}

			ul li {
				color: rgba(255, 255, 255, 0.9);
			}

			.btn {
				background: ${stylesVar.cWhite};
				color: ${stylesVar.cBlack};

				&:hover {
					background: ${stylesVar.cGrayLight};
				}
			}
		}
	}
`;
