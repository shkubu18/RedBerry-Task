import styled from "styled-components";
import ArrowLeft from "../assets/angle-left.svg";
import Resume from "./Resume";

export default function PersonalInformation(props) {
  const { goHomePage } = props;

  return (
    <Container>
      <PersonalInfoContainer>
        <Header>
          <ArrowContainer onClick={goHomePage}>
            <img style={{ height: 20 }} src={ArrowLeft} alt="arrow-left-icon" />
          </ArrowContainer>
          <header>
            <h1>პირადი ინფო</h1>
            <span>1/3</span>
          </header>
        </Header>
        <form id="personal-info" style={{ marginTop: -50 }}>
          <NameSurname>
            <div style={{ position: "relative" }}>
              <Label htmlFor="name">სახელი</Label>
              <Input type="text" name="name" id="name" placeholder="დავით" />
              <Hint>მინიმუმ 2 ასო, ქართული ასოები</Hint>
            </div>
            <div style={{ position: "relative" }}>
              <Label htmlFor="surname">გვარი</Label>
              <Input
                type="text"
                name="surname"
                id="surname"
                placeholder="შკუბულიანი"
              />
              <Hint>მინიმუმ 2 ასო, ქართული ასოები</Hint>
            </div>
          </NameSurname>
          <PictureUpload>
            <span>პირადი ფოტოს ატვირთვა</span>
            <label htmlFor="picture">ატვირთვა</label>
            <input type="file" name="picture" id="picture" />
          </PictureUpload>
          <AboutMeContainer>
            <Label htmlFor="aboutme">ჩემ შესახებ (არასავალდებულო)</Label>
            <textarea
              name="aboutme"
              id="aboutme"
              rows="5"
              placeholder="ზოგადი ინფო შენ შესახებ"
            ></textarea>
          </AboutMeContainer>
          <Email>
            <Label htmlFor="email">ელ.ფოსტა</Label>
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="davitt777@redberry.ge"
            />
            <Hint>უნდა მთავრდებოდეს @redberry.ge-ით</Hint>
          </Email>
          <Number>
            <Label htmlFor="phone">მობილურის ნომერი</Label>
            <Input
              type="text"
              maxLength={17}
              name="phone"
              id="phone"
              placeholder="+995 551 12 34 56"
            />
            <Hint>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</Hint>
          </Number>
        </form>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button form="personal-info" type="submit">
            შემდეგი
          </Button>
        </div>
      </PersonalInfoContainer>
      <Resume />
    </Container>
  );
}

export const Warning = styled.img`
  position: absolute;
  top: 40%;
  right: -30px;
`;

export const CompletedIcon = styled.img`
  position: absolute;
  top: 42%;
  right: 20px;
`;

export const Button = styled.button`
  background: #6b40e3;
  border-radius: 4px;
  color: white;
  padding-block: 13px;
  border: none;
  font-size: 16px;
  width: 150px;
  cursor: pointer;
`;

const Number = styled.div`
  margin-top: 40px;
  position: relative;
`;

const Email = styled.div`
  margin-top: 40px;
  position: relative;
`;

const AboutMeContainer = styled.div`
  margin-top: 60px;
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #bcbcbc;
  }
`;

const PictureUpload = styled.div`
  margin-top: 60px;
  position: relative;
  width: 400px;
  span {
    font-size: 18px;
    font-weight: 600;
    margin-right: 30px;
  }
  label {
    background: #0e80bf;
    color: white;
    border-radius: 4px;
    padding: 5px 20px;
    font-size: 13px;
    cursor: pointer;
  }
  input {
    display: none;
  }
`;

export const Input = styled.input`
  width: 350px;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #bcbcbc;
  font-size: 16px;
`;

export const Hint = styled.div`
  font-size: 13px;
  opacity: 0.6;
  margin-top: 10px;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 7px;
`;

const NameSurname = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ArrowContainer = styled.div`
  min-width: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: absolute;
  left: -100px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    h1 {
      font-size: 28px;
    }
    span {
      font-size: 20px;
      font-weight: 500;
    }
  }
`;

const PersonalInfoContainer = styled.div`
  width: 55%;
  padding-inline: 150px;
  padding-block: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  background: #f9f9f9;
`;
