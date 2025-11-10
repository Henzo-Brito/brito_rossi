import styled from "styled-components";
import { stylesVar } from "../../styleVar";

export const SSection = styled.section`
	padding: 100px 0;
	background: ${stylesVar.cBgLight};
	color: ${stylesVar.cText};
	text-align: center;
	animation: fadeIn 0.56s ease forwards;

	.container {
		width: min(1200px, 90%);
		margin: 0 auto;
	}

	h3 {
		font-size: ${stylesVar.fHeroTitle};
		color: ${stylesVar.cWhite};
		margin-bottom: 10px;
	}

	p {
		color: ${stylesVar.cTextMuted};
		max-width: 600px;
		margin: 0 auto 40px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
		margin-top: 60px;

		@media (max-width: ${stylesVar.breakTablet}) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: ${stylesVar.breakMobile}) {
			grid-template-columns: 1fr;
		}
	}

	.card {
		background: ${stylesVar.cGrayDark};
		border: 1px solid ${stylesVar.borderColor};
		border-radius: ${stylesVar.borderRadiusLarge};
		padding: 40px 25px 0 25px;
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		gap: 10px;
		flex-direction: column;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
		cursor: default;

		&:hover {
			transform: translateY(-5px);
			border-color: ${stylesVar.cPurple};
			box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
		}

		img{
			width: 50px;
		}

		h4 {
			font-family: ${stylesVar.fFH1};
			color: ${stylesVar.cWhite};
			font-size: clamp(18px, 2vw, 24px);
			margin-bottom: 10px;
		}

		p {
			color: ${stylesVar.cTextMuted};
			font-size: ${stylesVar.fSP};
			line-height: 1.5;
		}
	}
`;
