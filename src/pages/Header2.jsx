import { useState } from "react";
import {
    SHeader,
    LogoArea,
    LogoBox,
    LogoText,
    Nav,
    MenuButton,
    MobileMenu,
} from "../assets/css/modules/global/header.js";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Scroll suave com offset
    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = -40; // deslocamento de -10px
            const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
        setMenuOpen(false); // fecha o menu mobile
    };

    return (
        <header>
            <SHeader>
                <Link to="/" style={{ width: "auto" }}>
                    <LogoArea>
                        <LogoBox><img src={logo} alt="" /></LogoBox>
                        <LogoText>zen net</LogoText>
                    </LogoArea>
                </Link>

                {/* Menu normal (desktop) */}
                <Nav>
                    <Link to="/politica">
                        Políticas
                    </Link>
                    <Link to="/Termos">
                        Termos
                    </Link>
                </Nav>

                {/* Botão mobile */}
                <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "✕" : "☰"}
                </MenuButton>
            </SHeader>

            {/* Menu mobile abaixo do header */}
            <MobileMenu open={menuOpen}>
                    <Link to="/politica">
                        Políticas
                    </Link>
                    <Link to="/Termos">
                        Termos
                    </Link>
            </MobileMenu>
        </header>
    );
}
