import styled from "styled-components";
import { stylesVar } from "../../styleVar";

export const SPlanos = styled.section`
	padding: 100px 0;
	background: ${stylesVar.cBgDark};
	color: ${stylesVar.cText};
	text-align: center;

	@media only screen and (max-width: ${stylesVar.breakMobile}) {
		padding: 40px 0px;
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
		background: rgba(47, 23, 255, 0.72);
		border: 1px solid ${stylesVar.borderColor};
		border-radius: ${stylesVar.borderRadiusLarge};
		display: flex;
		border: 1px solid ${stylesVar.borderColor};
		backdrop-filter: blur(10px);

		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		padding: 30px 30px;
		transition: all 0.3s ease;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
		@media (max-width: ${stylesVar.breakMobile}) {
			padding: 25px 20px;
			border: 2px solid ${stylesVar.borderColor};
		}
		&:hover {
			transform: translateY(-6px);
			border-color: ${stylesVar.cPurple};
			box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
		}

		.price {
			font-size: clamp(30px, 3vw, 35px);
			color: ${stylesVar.cWhite};
			font-weight: 700;
			margin-bottom: 25px;
		}

		ul {
			list-style: none;
			margin-bottom: 30px;

			li {
				color: ${stylesVar.cText};
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
				background: ${stylesVar.cGrayDark};
				color: ${stylesVar.cWhite};

				&:hover {
					background: ${stylesVar.cHover};
				}
			}

			&.btn-light {
				background: ${stylesVar.cGrayDark};
				color: ${stylesVar.cWhite};

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
				background: ${stylesVar.cGrayDark};
				color: ${stylesVar.cText};

				&:hover {
					background: ${stylesVar.cBgDark};
				}
			}
		}
	}
`;
