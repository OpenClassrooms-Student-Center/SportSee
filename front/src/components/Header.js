import styled from "styled-components";
import Logo from "../assets/Logo_SportSee.svg";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 91px;
  background-color: #020203;
  `;

//box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} style={{
                paddingLeft: "29px"
            }} alt="Logo SportSee" />
            <h2>Accueil</h2>
            <h2>Profil</h2>
            <h2>Réglage</h2>
            <h2 className="community">Communauté</h2>
        </HeaderContainer>
    );
}

export default Header;