import { SContact } from "../../assets/css/modules/sections/contact.js";
import { Link } from "react-router-dom";
import telefone from "../../assets/images/telephone.svg";
import mail from "../../assets/images/mail.svg";
import { useState } from "react";

function InfoCopy(props) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(props.info);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="info-item" onClick={handleCopy}>
			{copied ? (
				<strong>Copiado para a área de transferência!</strong>
			) : (
				<>
					{props.title === "Telefone" ? (
						<img src={telefone} alt="Telefone" />
					) : (
						<img src={mail} alt="E-mail" />
					)}
					<div>
						<strong>{props.title}</strong>
						<p>{props.info}</p>
					</div>
				</>
			)}
		</div>
	);
}

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		description: "",
	});
	const [successMessage, setSuccessMessage] = useState(""); // ✅ estado da mensagem

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// 1️⃣ Envia os dados para sua API usando o client do Kubb
			const result = await fetch(
				"https://brito-rossi-api.onrender.com/user",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(formData),
				}
			);

			if (!result || result.error) {
				throw new Error("Falha ao enviar dados");
			}

			// 2️⃣ Mostra mensagem de sucesso
			setSuccessMessage(
				"Cadastro realizado com sucesso! Redirecionando para o WhatsApp..."
			);

			// 3️⃣ Espera 2 segundos antes de abrir o WhatsApp
			setTimeout(() => {
				const message = encodeURIComponent(
					`Olá, sou ${formData.name}!\n\nGostaria de falar sobre um projeto:\n${formData.description}\n\nMeu e-mail é ${formData.email}.`
				);
				window.open(
					`https://wa.me/5511913133682?text=${message}`,
					"_blank"
				);

				// 4️⃣ Limpa o formulário e a mensagem
				setFormData({ name: "", email: "", description: "" });
				setSuccessMessage("");
			}, 2000);
		} catch (err) {
			console.error(err);
			alert("Erro ao enviar o formulário. Tente novamente mais tarde.");
		}
	};

	return (
		<SContact id="contato">
			<div className="container">
				<div className="contact-grid fade-in">
					{/* === Lado Esquerdo === */}
					<div className="contact-info">
						<h3>Vamos conversar?</h3>
						<p>
							Conte-nos sobre o seu projeto e receba um orçamento
							personalizado em até 48 horas. Estamos prontos para
							transformar suas ideias em realidade.
						</p>

						<div className="info-blocks">
							<a
								href="https://wa.me/5511913133682"
								target="blank"
								style={{ textAlign: "center" }}
								className="info-item"
							>
								<img src={telefone} alt="Telefone" />
								<div>
									<strong>Telefone</strong>
									<p>(11) 91313-3682</p>
								</div>
							</a>
							<InfoCopy
								title="E-mail"
								info="rossipedro2008@gmail.com"
							/>
						</div>
					</div>
					<div className="line">
						<div className="l1"></div>
						<p>ou</p>
						<div className="l1"></div>
					</div>
					{/* === Lado Direito === */}
					<form className="form" onSubmit={handleSubmit}>
						<h1>Conte a sua Proposta</h1>
						<label>
							Nome
							<input
								type="text"
								name="name"
								placeholder="Seu nome"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</label>

						<label>
							E-mail
							<input
								type="email"
								name="email"
								placeholder="seu@mail.com"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</label>

						<label>
							Mensagem
							<textarea
								name="description"
								rows="5"
								placeholder="Me conte sobre o projeto"
								value={formData.description}
								onChange={handleChange}
								required
							></textarea>
						</label>

						{successMessage && (
							<p style={{ color: "green", marginTop: "10px" }}>
								{successMessage}
							</p>
						)}

						<div className="buttons">
							<button type="submit" className="btn btn-dark">
								Enviar
							</button>
							<div className="text">
								<input
									type="checkbox"
									id="termos"
									name="termos"
									value="termos"
									required
								/>
								<p>
									Li e concordo com todos os{" "}
									<Link
										to="/termos"
										target="_blank"
										style={{
											fontSize: "clamp(12px, 2dvw, 16px)",
										}}
									>
										Termos de Serviços
									</Link>{" "}
									e{" "}
									<Link
										to="/politica"
										target="_blank"
										style={{
											fontSize: "clamp(12px, 2dvw, 16px)",
										}}
									>
										Política de Privacidade
									</Link>
								</p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</SContact>
	);
}
