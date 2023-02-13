import styled from "styled-components";
import HomeBackground from "../assets/shutterstock_2189773743 1.png";
import RedBerryLogo from "../assets/LOGO-02 3.png";
import Circle from "../assets/LOGO-40 1.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <HomeContainer>
      <Header>
        <img src={RedBerryLogo} alt="redberry-logo" />
      </Header>
      <ButtonContainer>
        <Link to="/personal-info">
          <Button>რეზიუმეს დამატება</Button>
        </Link>
        <CircleImg src={Circle} alt="circle" />
      </ButtonContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  min-height: 100vh;
  background-image: url("${HomeBackground}");
`;

const Header = styled.header`
  margin-inline: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #1a1a1a;
  min-height: 10vh;
`;

const ButtonContainer = styled.div`
  width: 500px;
  margin: auto;
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
`;

const Button = styled.button`
  width: 464px;
  padding: 18px 60px;
  background: #1a1a1a;
  color: white;
  border-radius: 8px;
  font-weight: 500;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;

const CircleImg = styled.img`
  position: absolute;
  right: -28%;
  bottom: 26.8%;
`;
