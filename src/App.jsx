import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Politica } from "./pages/politica.jsx";
import { Termos } from "./pages/termos.jsx";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/politica" element={<Politica />} />
			<Route path="/termos" element={<Termos />} />
		</Routes>
	);
}
