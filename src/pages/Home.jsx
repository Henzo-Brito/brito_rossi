import Header from "../modules/global/header";
import Hero from "../modules/sections/hero";
import Services from "../modules/sections/services";
import Portfolio from "../modules/sections/portfolio";
import Planos from "../modules/sections/planos";
import Contact from "../modules/sections/contato";
import Footer from "../modules/global/footer";

export const Home = () => {
	return (
		<>
			<link
				href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Outfit:wght@100..900&display=swap"
				rel="stylesheet"
			/>

			<Header></Header>
			<Hero></Hero>
			<Services></Services>
			<Portfolio></Portfolio>
			<Planos></Planos>
			<Contact></Contact>
			<Footer></Footer>
		</>
	);
};
