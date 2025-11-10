import { styled } from "styled-components";
import { stylesVar } from "../../styleVar";

// ===== Botões =====
export const HeroButtons = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: clamp(12px, 2vw, 20px);
	width: 100%;
	margin-bottom: clamp(32px, 4vw, 48px);

	@media (max-width: ${stylesVar.breakDesktop}) {
		justify-content: center;
		flex-direction: column;
	}
	@media (max-width: ${stylesVar.breakTablet}) {
		flex-direction: row;
	}
	@media (max-width: ${stylesVar.breakMobile}) {
		flex-direction: column;
	}
`;

export const BtnDark = styled.a`
	background: ${stylesVar.cPurple};
	color: ${stylesVar.cWhite};
	padding: clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px);
	border-radius: ${stylesVar.borderRadius};
	font-weight: 600;
	text-decoration: none;
	transition: transform 0.25s ease, background 0.25s ease;
	&:hover {
		color: ${stylesVar.cWhite};
		background: ${stylesVar.cHover};
		transform: translateY(-2px);
	}
`;

export const BtnLight = styled.a`
	background: ${stylesVar.cWhite};
	color: ${stylesVar.cBgDark};
	padding: clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px);
	border-radius: ${stylesVar.borderRadius};
	font-weight: 600;
	text-decoration: none;
	transition: transform 0.25s ease, background 0.25s ease;

	&:hover {
		color: ${stylesVar.cBlack};
		background: ${stylesVar.cGrayLight};
		transform: translateY(-2px);
	}
`;

// ===== Estatísticas =====
export const Stats = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: clamp(16px, 4vw, 18px);
	margin-top: clamp(16px, 3vw, 24px);
	width: 100%;

	@media (max-width: ${stylesVar.breakDesktop}) {
		justify-content: start;
	}
	@media (max-width: ${stylesVar.breakTablet}) {
		justify-content: center;
	}
`;

export const Stat = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	strong {
		font-size: clamp(20px, 4vw, 30px);
		font-weight: 700;
		color: ${stylesVar.cWhite};
	}

	span {
		font-size: clamp(12px, 2vw, 14px);
		color: ${stylesVar.cTextMuted};
	}

	@media (max-width: ${stylesVar.breakTablet}) {
		align-items: center;
		text-align: center;
	}
`;

// ===== HeroSection =====
export const HeroSection = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	gap: clamp(20px, 5vw, 40px);
	padding: clamp(30px, 6vw, 70px);
	background: ${stylesVar.cBgDark};
	color: ${stylesVar.cWhite};
	font-family: ${stylesVar.fFp};
	min-height: 80vh;
	position: relative;

	@media (max-width: ${stylesVar.breakTablet}) {
		flex-direction: column-reverse;
		align-items: center;
		text-align: center;
		padding: 10px;
	}
`;

// ===== HeroText =====
export const HeroText = styled.div`
	flex: 1;
	min-width: 200px;
	max-width: 600px;
	h2 {
		font-family: ${stylesVar.fFH1};
		font-size: ${stylesVar.fHeroTitle};
		font-weight: 700;
		margin-bottom: clamp(25px, 2vw, 30px);
		line-height: 1.2;

		@media (max-width: ${stylesVar.breakMobile}) {
			font-size: clamp(28px, 1vw, 35px);
		}
	}

	p {
		font-size: ${stylesVar.fSP};
		margin-bottom: clamp(24px, 3vw, 32px);
		color: ${stylesVar.cTextMuted};
		max-width: 100%;
	}
`;

// ===== HeroImg =====
export const HeroImg = styled.div`
	flex: 1;
	min-width: 150px;
	max-width: 600px;
	position: relative;

	img {
		width: 100%;
		height: auto;
		border-radius: ${stylesVar.borderRadiusLarge};
		object-fit: cover;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
		transition: transform 0.3s ease;
	}

	img:hover {
		transform: scale(1.02);
	}

	@media (max-width: ${stylesVar.breakTablet}) {
		max-width: 90%;
		margin-bottom: clamp(20px, 4vw, 30px);
	}
`;

// ===== HeroBadge =====
export const HeroBadge = styled.div`
	position: absolute;
	bottom: clamp(16px, 2vw, 24px);
	left: clamp(16px, 2vw, 24px);
	width: clamp(220px, 40vw, 340px);
	background: rgba(47, 47, 211, 0.77);
	backdrop-filter: blur(5px);
	padding: clamp(10px, 2vw, 16px);
	border-radius: ${stylesVar.borderRadius};

	strong {
		display: block;
		font-size: clamp(16px, 3vw, 20px);
		font-weight: 600;
		color: ${stylesVar.cWhite};
	}

	p {
		font-size: clamp(13px, 2vw, 16px);
		color: ${stylesVar.cTextMuted};
		margin: 0;
	}

	@media (max-width: ${stylesVar.breakTablet}) {
		display: none;
	}
`;
