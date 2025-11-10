import { styled } from "styled-components";
import { stylesVar } from "../../styleVar";

export const SFooter = styled.footer`
	background: ${stylesVar.cBlack};
	color: ${stylesVar.cWhite};
	padding: 40px 0;
	font-family: ${stylesVar.fFp};
	text-align: center;

	.footer-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: min(1200px, 90%);
		margin: 0 auto;

		@media (max-width: ${stylesVar.breakTablet}) {
			flex-direction: column;
			gap: 15px;
			text-align: center;
		}
	}

	strong {
		font-size: ${stylesVar.fSH3};
	}

	p {
		font-size: ${stylesVar.fSp};
		opacity: 0.9;
	}

	.footer-links {
		display: flex;
		gap: 25px;

		a {
			color: ${stylesVar.cWhite};
			text-decoration: none;
			font-weight: 500;
			transition: opacity 0.3s ease;

			&:hover {
				opacity: 0.8;
			}
		}
	}
`;
