import { SFooter } from "../../assets/css/modules/global/footer";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<SFooter>
			<div className="container footer-inner">
				<div>
					<h3>Brito Rossi</h3>
					<p>
						© {new Date().getFullYear()} — Todos os direitos
						reservados.
					</p>
				</div>

				<div className="footer-links">
					<Link to="/politica">Política de Privacidade</Link>
					<Link to="/termos">Termos de Serviço</Link>
				</div>
			</div>
		</SFooter>
	);
}
