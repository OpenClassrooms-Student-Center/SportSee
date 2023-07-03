import styled from "styled-components";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 117px;
  height: 677px;
  padding-top: 256px;
  background-color: #020203;
`;

const AsideText = styled.p`
color: white;
font-weight: 500;
font-size: 12px;
width: max-content;
transform: rotate(-90deg);
margin-top: 200px;
`;

function AsideBar() {
    return (
        <AsideContainer>
            <img src={icon1} alt="Icone Accueil" />
            <img src={icon2} alt="Icone Profil" />
            <img src={icon3} alt="Icone Réglage" />
            <img src={icon4} alt="Icone Communauté" />
            <AsideText>Copyright, SportSee 2020</AsideText>
        </AsideContainer>
    );
}

export default AsideBar;