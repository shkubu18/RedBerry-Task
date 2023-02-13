import { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowLeft from "../assets/angle-left.svg";
import WarningIcon from "../assets/warning-icon.png";
import Completed from "../assets/completed-icon.png";
import Resume from "./Resume";

export default function PersonalInformation(props) {
  const { goHomePage } = props;

  const [isNameValidated, setIsNameValidated] = useState(false);
  const [nameWarning, setNameWarning] = useState(false);
  const [name, setName] = useState("");
  const [isSurnameValidated, setIsSurnameValidated] = useState(false);
  const [surnameWarning, setSurnameWarning] = useState(false);
  const [surname, setSurname] = useState("");
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [selectedPictureWarning, setSelectedPictureWarning] = useState(false);
  const [aboutme, setAboutme] = useState("");
  const [isAboutmeEmpty, setIsAboutmeEmpty] = useState(true);
  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const [emailWarning, setEmailWarning] = useState(false);
  const [email, setEmail] = useState("");
  const [isPhoneValidated, setIsPhoneValidated] = useState(false);
  const [phoneWarning, setPhoneWarning] = useState(false);
  const [phone, setPhone] = useState("");

  const georgianRegex = /^[\u10A0-\u10FF]+$/;

  // name input validation

  const handleNameChange = (event) => {
    setName(event.target.value);
    localStorage.setItem("name", event.target.value);
    const storedName = localStorage.getItem("name");
    if (storedName.length === 0) {
      localStorage.removeItem("name");
    }
  };

  const handleNameBlur = (event) => {
    if (
      !event.target.value.match(georgianRegex) ||
      event.target.value.length < 2
    ) {
      setNameWarning(true);
      setIsNameValidated(false);
      localStorage.setItem("nameValidated", false);
    } else {
      setIsNameValidated(true);
      setNameWarning(false);
      localStorage.setItem("nameValidated", true);
    }
  };

  // surname input validation

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
    localStorage.setItem("surname", event.target.value);
    const storedSurname = localStorage.getItem("surname");
    if (storedSurname.length === 0) {
      localStorage.removeItem("surname");
    }
  };

  const handleSurnameBlur = (event) => {
    if (
      !event.target.value.match(georgianRegex) ||
      event.target.value.length < 2
    ) {
      setSurnameWarning(true);
      setIsSurnameValidated(false);
      localStorage.setItem("surnameValidated", false);
    } else {
      setIsSurnameValidated(true);
      setSurnameWarning(false);
      localStorage.setItem("surnameValidated", true);
    }
  };

  // picture input validation

  const handlePictureChange = (event) => {
    const file = event.target.files[0];

    if (!file.type.startsWith("image/")) {
      console.log("only image files");
      return;
    }

    const reader = new FileReader();

    reader.onload = function () {
      const imageUrl = reader.result;
      setSelectedPicture(imageUrl);
      setSelectedPictureWarning(false);
      localStorage.setItem("storedImage", imageUrl);
      localStorage.setItem("image", imageUrl);
      localStorage.setItem("pictureValidated", true);
    };

    reader.readAsDataURL(file);
  };

  // aboutme input some declarations

  const handleAboutmeChange = (event) => {
    setAboutme(event.target.value);
    localStorage.setItem("about_me", event.target.value);
    const storedAboutme = localStorage.getItem("about_me");
    if (storedAboutme.length === 0) {
      localStorage.removeItem("about_me");
    }
  };

  const handleAboutmeBlur = () => {
    if (aboutme.length > 0) {
      setIsAboutmeEmpty(false);
    } else {
      setIsAboutmeEmpty(true);
    }
  };

  // email input validation

  const emailRegex = /^[\w-.]+@redberry\.ge$/;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    localStorage.setItem("email", event.target.value);
    const storedEmail = localStorage.getItem("email");
    if (storedEmail.length === 0) {
      localStorage.removeItem("email");
    }
  };

  const handleEmailBlur = (event) => {
    if (!event.target.value.match(emailRegex)) {
      setEmailWarning(true);
      setIsEmailValidated(false);
      localStorage.setItem("emailValidated", false);
    } else {
      setIsEmailValidated(true);
      setEmailWarning(false);
      localStorage.setItem("emailValidated", true);
    }
  };

  // phone input validation

  const phoneRegex = /^(\+995)\s(\d{3})\s(\d{2})\s(\d{2})\s(\d{2})$/;

  const handlePhoneChange = (event) => {
    let value = event.target.value;
    let formattedValue = value.replace(
      /(\995)(\d{3})(\d{2})(\d{2})(\d{2})/,
      "$1 $2 $3 $4 $5"
    );

    setPhone(formattedValue);

    localStorage.setItem("phone_number", formattedValue);
    const storedPhone = localStorage.getItem("phone_number");
    if (storedPhone.length === 0) {
      localStorage.removeItem("phone_number");
    }
  };

  const handlePhoneBlur = (event) => {
    if (!event.target.value.match(phoneRegex)) {
      setPhoneWarning(true);
      setIsPhoneValidated(false);
      localStorage.setItem("phoneValidated", false);
    } else {
      setIsPhoneValidated(true);
      setPhoneWarning(false);
      localStorage.setItem("phoneValidated", true);
    }
  };

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedSurname = localStorage.getItem("surname");
    const storedPicture = localStorage.getItem("image");
    const storedAboutme = localStorage.getItem("about_me");
    const storedEmail = localStorage.getItem("email");
    const storedPhone = localStorage.getItem("phone_number");
    if (storedName) {
      setName(storedName);
    }
    if (storedSurname) {
      setSurname(storedSurname);
    }
    if (storedPicture) {
      setSelectedPicture(storedPicture);
    }
    if (storedAboutme) {
      setAboutme(storedAboutme);
    }
    if (storedEmail) {
      setEmail(storedEmail);
    }
    if (storedPhone) {
      setPhone(storedPhone);
    }
  }, []);

  const handleClick = (event) => {
    event.preventDefault();

    const nameValidated = localStorage.getItem("nameValidated");
    const surnameValidated = localStorage.getItem("surnameValidated");
    const pictureValidated = localStorage.getItem("pictureValidated");
    const emailValidated = localStorage.getItem("emailValidated");
    const phoneValidated = localStorage.getItem("phoneValidated");

    if (nameValidated === "true") {
      setIsNameValidated(true);
    } else {
      setNameWarning(true);
    }

    if (surnameValidated === "true") {
      setIsSurnameValidated(true);
    } else {
      setSurnameWarning(true);
    }

    if (emailValidated === "true") {
      setIsEmailValidated(true);
    } else {
      setEmailWarning(true);
    }

    if (phoneValidated === "true") {
      setIsPhoneValidated(true);
    } else {
      setPhoneWarning(true);
    }

    if (!pictureValidated) {
      setSelectedPictureWarning(true);
    }

    if (
      nameValidated === "true" &&
      surnameValidated === "true" &&
      emailValidated === "true" &&
      pictureValidated === "true" &&
      phoneValidated === "true"
    ) {
      window.location.href = "/experience";
    }
  };

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
              {isNameValidated ? (
                <CompletedIcon src={Completed} alt="completed-icon" />
              ) : null}
              {nameWarning ? (
                <Warning src={WarningIcon} alt="warning-icon" />
              ) : null}
              <Input
                style={{
                  borderColor: isNameValidated
                    ? "#98E37E"
                    : nameWarning
                    ? "#EF5050"
                    : "#bcbcbc",
                }}
                type="text"
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                value={name}
                name="name"
                id="name"
                placeholder="დავით"
              />
              <Hint>მინიმუმ 2 ასო, ქართული ასოები</Hint>
            </div>
            <div style={{ position: "relative" }}>
              <Label htmlFor="surname">გვარი</Label>
              {isSurnameValidated ? (
                <CompletedIcon src={Completed} alt="completed-icon" />
              ) : null}
              {surnameWarning ? (
                <Warning src={WarningIcon} alt="warning-icon" />
              ) : null}
              <Input
                style={{
                  borderColor: isSurnameValidated
                    ? "#98E37E"
                    : surnameWarning
                    ? "#EF5050"
                    : "#bcbcbc",
                }}
                type="text"
                onChange={handleSurnameChange}
                onBlur={handleSurnameBlur}
                value={surname}
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
            {selectedPictureWarning ? (
              <Warning
                style={{ top: "15%" }}
                src={WarningIcon}
                alt="warning-icon"
              />
            ) : null}
            <input
              type="file"
              name="picture"
              onChange={handlePictureChange}
              id="picture"
            />
          </PictureUpload>
          <AboutMeContainer>
            <Label htmlFor="aboutme">ჩემ შესახებ (არასავალდებულო)</Label>
            <textarea
              style={{
                borderColor: !isAboutmeEmpty ? "#98E37E" : "#bcbcbc",
              }}
              name="aboutme"
              onChange={handleAboutmeChange}
              onBlur={handleAboutmeBlur}
              value={aboutme}
              id="aboutme"
              rows="5"
              placeholder="ზოგადი ინფო შენ შესახებ"
            ></textarea>
          </AboutMeContainer>
          <Email>
            <Label htmlFor="email">ელ.ფოსტა</Label>
            {isEmailValidated ? (
              <CompletedIcon src={Completed} alt="completed-icon" />
            ) : null}
            {emailWarning ? (
              <Warning src={WarningIcon} alt="warning-icon" />
            ) : null}
            <Input
              style={{
                width: "100%",
                borderColor: isEmailValidated
                  ? "#98E37E"
                  : emailWarning
                  ? "#EF5050"
                  : "#bcbcbc",
              }}
              type="text"
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              value={email}
              name="email"
              id="email"
              placeholder="davitt777@redberry.ge"
            />
            <Hint>უნდა მთავრდებოდეს @redberry.ge-ით</Hint>
          </Email>
          <Number>
            <Label htmlFor="phone">მობილურის ნომერი</Label>
            {isPhoneValidated ? (
              <CompletedIcon src={Completed} alt="completed-icon" />
            ) : null}
            {phoneWarning ? (
              <Warning src={WarningIcon} alt="warning-icon" />
            ) : null}
            <Input
              style={{
                width: "100%",
                borderColor: isPhoneValidated
                  ? "#98E37E"
                  : phoneWarning
                  ? "#EF5050"
                  : "#bcbcbc",
              }}
              type="text"
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
              value={phone}
              maxLength={17}
              name="phone"
              id="phone"
              placeholder="+995 551 12 34 56"
            />
            <Hint>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</Hint>
          </Number>
        </form>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={handleClick} form="personal-info" type="submit">
            შემდეგი
          </Button>
        </div>
      </PersonalInfoContainer>
      <Resume
        name={name}
        surname={surname}
        selectedPicture={selectedPicture}
        aboutme={aboutme}
        email={email}
        phone={phone}
      />
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
