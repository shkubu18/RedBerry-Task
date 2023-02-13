import { useEffect, useState } from "react";
import { Container } from "./PersonalInformation";
import styled from "styled-components";
import ArrowLeft from "../assets/angle-left.svg";
import WarningIcon from "../assets/warning-icon.png";
import Completed from "../assets/completed-icon.png";
import Resume from "./Resume";
import {
  Label,
  Input,
  Hint,
  ArrowContainer,
  Header,
  Button,
  Warning,
  CompletedIcon,
} from "./PersonalInformation";
import { Link } from "react-router-dom";

export default function Experience(props) {
  const { goHomePage } = props;

  const [isPositionValidated, setIsPositionValidated] = useState(false);
  const [positionWarning, setPositionWarning] = useState(false);
  const [isEmployerValidated, setIsEmployerValidated] = useState(false);
  const [employerWarning, setEmployerWarning] = useState(false);
  const [isStartDateValidated, setIsStartDateValidated] = useState(false);
  const [startDateWarning, setStartDateWarning] = useState(false);
  const [isEndDateValidated, setIsEndDateValidated] = useState(false);
  const [endDateWarning, setEndDateWarning] = useState(false);
  const [isDescriptionValidated, setIsDescriptionValidated] = useState(false);
  const [descriptionWarning, setDescriptionWarning] = useState(false);
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("formData")) || [
      {
        id: Date.now(),
        position: "",
        employer: "",
        start_date: "",
        due_date: "",
        description: "",
      },
    ]
  );

  // position input validation

  const handlePositionBlur = (e) => {
    if (e.target.value.length < 2) {
      let inputId = e.target.id;
      setPositionWarning((prevState) => ({ ...prevState, [inputId]: true }));
      setIsPositionValidated((prevState) => ({
        ...prevState,
        [inputId]: false,
      }));

      const positionInputsInfo =
        JSON.parse(localStorage.getItem("positionValidated")) || {};
      positionInputsInfo[inputId] = false;
      localStorage.setItem(
        "positionValidated",
        JSON.stringify(positionInputsInfo)
      );
    } else {
      let inputId = e.target.id;
      setIsPositionValidated((prevState) => ({
        ...prevState,
        [inputId]: true,
      }));
      setPositionWarning((prevState) => ({ ...prevState, [inputId]: false }));
      const positionInputsInfo =
        JSON.parse(localStorage.getItem("positionValidated")) || {};
      positionInputsInfo[inputId] = true;
      localStorage.setItem(
        "positionValidated",
        JSON.stringify(positionInputsInfo)
      );
    }
  };

  // employer input validation

  const handleEmployerBlur = (e) => {
    if (e.target.value.length < 2) {
      let inputId = e.target.id;
      setEmployerWarning((prevState) => ({ ...prevState, [inputId]: true }));
      setIsEmployerValidated((prevState) => ({
        ...prevState,
        [inputId]: false,
      }));
      const employerInputsInfo =
        JSON.parse(localStorage.getItem("employerValidated")) || {};
      employerInputsInfo[inputId] = false;
      localStorage.setItem(
        "employerValidated",
        JSON.stringify(employerInputsInfo)
      );
    } else {
      let inputId = e.target.id;
      setIsEmployerValidated((prevState) => ({
        ...prevState,
        [inputId]: true,
      }));
      setEmployerWarning((prevState) => ({ ...prevState, [inputId]: false }));
      const employerInputsInfo =
        JSON.parse(localStorage.getItem("employerValidated")) || {};
      employerInputsInfo[inputId] = true;
      localStorage.setItem(
        "employerValidated",
        JSON.stringify(employerInputsInfo)
      );
    }
  };

  // // startdate input validation

  const handleStartDateBlur = (e) => {
    if (e.target.value.length < 2) {
      let inputId = e.target.id;
      setStartDateWarning((prevState) => ({ ...prevState, [inputId]: true }));
      setIsStartDateValidated((prevState) => ({
        ...prevState,
        [inputId]: false,
      }));
      const startDateInputsInfo =
        JSON.parse(localStorage.getItem("startDateValidated")) || {};
      startDateInputsInfo[inputId] = false;
      localStorage.setItem(
        "startDateValidated",
        JSON.stringify(startDateInputsInfo)
      );
    } else {
      let inputId = e.target.id;
      setIsStartDateValidated((prevState) => ({
        ...prevState,
        [inputId]: true,
      }));
      setStartDateWarning((prevState) => ({ ...prevState, [inputId]: false }));
      const startDateInputsInfo =
        JSON.parse(localStorage.getItem("startDateValidated")) || {};
      startDateInputsInfo[inputId] = true;
      localStorage.setItem(
        "startDateValidated",
        JSON.stringify(startDateInputsInfo)
      );
    }
  };

  // // enddate input validation

  const handleEndDateBlur = (e) => {
    if (e.target.value.length < 2) {
      let inputId = e.target.id;
      setEndDateWarning((prevState) => ({ ...prevState, [inputId]: true }));
      setIsEndDateValidated((prevState) => ({
        ...prevState,
        [inputId]: false,
      }));
      const endDateInputsInfo =
        JSON.parse(localStorage.getItem("endDateValidated")) || {};
      endDateInputsInfo[inputId] = false;
      localStorage.setItem(
        "endDateValidated",
        JSON.stringify(endDateInputsInfo)
      );
    } else {
      let inputId = e.target.id;
      setIsEndDateValidated((prevState) => ({ ...prevState, [inputId]: true }));
      setEndDateWarning((prevState) => ({ ...prevState, [inputId]: false }));
      const endDateInputsInfo =
        JSON.parse(localStorage.getItem("endDateValidated")) || {};
      endDateInputsInfo[inputId] = true;
      localStorage.setItem(
        "endDateValidated",
        JSON.stringify(endDateInputsInfo)
      );
    }
  };

  // description input validation

  const handleDescriptionBlur = (e) => {
    if (e.target.value.length < 2) {
      let inputId = e.target.id;
      setDescriptionWarning((prevState) => ({ ...prevState, [inputId]: true }));
      setIsDescriptionValidated((prevState) => ({
        ...prevState,
        [inputId]: false,
      }));
      const descriptionInputsInfo =
        JSON.parse(localStorage.getItem("descriptionValidated")) || {};
      descriptionInputsInfo[inputId] = false;
      localStorage.setItem(
        "descriptionValidated",
        JSON.stringify(descriptionInputsInfo)
      );
    } else {
      let inputId = e.target.id;
      setIsDescriptionValidated((prevState) => ({
        ...prevState,
        [inputId]: true,
      }));
      setDescriptionWarning((prevState) => ({
        ...prevState,
        [inputId]: false,
      }));
      const descriptionInputsInfo =
        JSON.parse(localStorage.getItem("descriptionValidated")) || {};
      descriptionInputsInfo[inputId] = true;
      localStorage.setItem(
        "descriptionValidated",
        JSON.stringify(descriptionInputsInfo)
      );
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleAddForm = () => {
    setFormData([
      ...formData,
      {
        id: Date.now(),
        position: "",
        employer: "",
        start_date: "",
        due_date: "",
        description: "",
      },
    ]);
  };

  const handleInputChange = (e, id, inputName) => {
    const index = formData.findIndex((form) => form.id === id);
    const newFormData = [...formData];
    newFormData[index][inputName] = e.target.value;
    setFormData(newFormData);
  };

  return (
    <Container>
      <ExperienceContainer>
        <Header>
          <ArrowContainer onClick={goHomePage}>
            <img style={{ height: 20 }} src={ArrowLeft} alt="arrow-left-icon" />
          </ArrowContainer>
          <header>
            <h1>გამოცდილება</h1>
            <span>2/3</span>
          </header>
        </Header>
        {formData.map((form, index) => (
          <form key={form.id}>
            <div style={{ position: "relative", marginTop: 35 }}>
              <Label htmlFor="position">თანამდებობა</Label>
              {isPositionValidated[`position${form.id}`] ? (
                <CompletedIcon src={Completed} alt="completed-icon" />
              ) : null}
              {positionWarning[`position${form.id}`] ? (
                <Warning src={WarningIcon} alt="warning-icon" />
              ) : null}
              <Input
                style={{
                  width: "100%",
                  borderColor: isPositionValidated[`position${form.id}`]
                    ? "#98E37E"
                    : positionWarning[`position${form.id}`]
                    ? "#EF5050"
                    : "#bcbcbc",
                }}
                type="text"
                onBlur={(e) => handlePositionBlur(e, index)}
                name="position"
                id={`position${form.id}`}
                onChange={(e) => handleInputChange(e, form.id, "position")}
                value={form.position}
                placeholder="დეველოპერი, დიზაინერი, ა.შ."
              />
              <Hint>მინიმუმ 2 სიმბოლო</Hint>
            </div>
            <div style={{ position: "relative", marginTop: 35 }}>
              <Label htmlFor="employer">დამსაქმებელი</Label>
              {isEmployerValidated[`employer${form.id}`] ? (
                <CompletedIcon src={Completed} alt="completed-icon" />
              ) : null}
              {employerWarning[`employer${form.id}`] ? (
                <Warning src={WarningIcon} alt="warning-icon" />
              ) : null}
              <Input
                style={{
                  width: "100%",
                  borderColor: isEmployerValidated[`employer${form.id}`]
                    ? "#98E37E"
                    : employerWarning[`employer${form.id}`]
                    ? "#EF5050"
                    : "#bcbcbc",
                }}
                type="text"
                onBlur={(e) => handleEmployerBlur(e, index)}
                onChange={(e) => handleInputChange(e, form.id, "employer")}
                value={form.employer}
                id={`employer${form.id}`}
                name="employer"
                placeholder="დამსაქმებელი"
              />
              <Hint>მინიმუმ 2 სიმბოლო</Hint>
            </div>
            <Calendars>
              <div style={{ position: "relative", marginTop: 35 }}>
                <Label htmlFor="startdate">დაწყების რიცხვი</Label>
                {startDateWarning[`startdate${form.id}`] ? (
                  <Warning
                    style={{ top: "53%" }}
                    src={WarningIcon}
                    alt="warning-icon"
                  />
                ) : null}
                <Input
                  style={{
                    borderColor: isStartDateValidated[`startdate${form.id}`]
                      ? "#98E37E"
                      : startDateWarning[`startdate${form.id}`]
                      ? "#EF5050"
                      : "#bcbcbc",
                  }}
                  type="date"
                  onBlur={(e) => handleStartDateBlur(e, index)}
                  onChange={(e) => handleInputChange(e, form.id, "start_date")}
                  value={form.start_date}
                  name="startdate"
                  id={`startdate${form.id}`}
                />
              </div>
              <div style={{ position: "relative", marginTop: 35 }}>
                <Label htmlFor="enddate">დამთავრების რიცხვი</Label>
                {endDateWarning[`enddate${form.id}`] ? (
                  <Warning
                    style={{ top: "53%" }}
                    src={WarningIcon}
                    alt="warning-icon"
                  />
                ) : null}
                <Input
                  style={{
                    borderColor: isEndDateValidated[`enddate${form.id}`]
                      ? "#98E37E"
                      : endDateWarning[`enddate${form.id}`]
                      ? "#EF5050"
                      : "#bcbcbc",
                  }}
                  type="date"
                  onBlur={(e) => handleEndDateBlur(e, index)}
                  onChange={(e) => handleInputChange(e, form.id, "due_date")}
                  value={form.due_date}
                  name="enddate"
                  id={`enddate${form.id}`}
                />
              </div>
            </Calendars>
            <Description>
              <Label htmlFor="description">აღწერა</Label>
              {isDescriptionValidated[`description${form.id}`] ? (
                <CompletedIcon
                  style={{ top: "38%", right: -30 }}
                  src={Completed}
                  alt="completed-icon"
                />
              ) : null}
              {descriptionWarning[`description${form.id}`] ? (
                <Warning
                  style={{ top: "37%" }}
                  src={WarningIcon}
                  alt="warning-icon"
                />
              ) : null}
              <textarea
                style={{
                  borderColor: isDescriptionValidated[`description${form.id}`]
                    ? "#98E37E"
                    : descriptionWarning[`description${form.id}`]
                    ? "#EF5050"
                    : "#bcbcbc",
                }}
                name="description"
                onBlur={(e) => handleDescriptionBlur(e, index)}
                onChange={(e) => handleInputChange(e, form.id, "description")}
                value={form.description}
                id={`description${form.id}`}
                rows="5"
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              ></textarea>
            </Description>
          </form>
        ))}
        <AddNewExperienceBtn
          onClick={handleAddForm}
          style={{ paddingInline: 35 }}
        >
          მეტი გამოცდილების დამატება
        </AddNewExperienceBtn>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/personal-info">
            <Button>უკან</Button>
          </Link>
          <Button onClick={handleNextPageClick} form="experience" type="submit">
            შემდეგი
          </Button>
        </div>
      </ExperienceContainer>
      <Resume formData={formData} />
    </Container>
  );
}

const AddNewExperienceBtn = styled.button`
  max-width: 300px;
  padding-block: 20px;
  background: #62a1eb;
  border: none;
  color: white;
  font-size: 15px;
  border-radius: 4px;
  margin-block: 35px;
`;

export const Description = styled.div`
  position: relative;
  margin-top: 35px;
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #bcbcbc;
  }
  border-bottom: 1px solid #c1c1c1;
  padding-bottom: 50px;
`;

const Calendars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ExperienceContainer = styled.div`
  width: 55%;
  padding-inline: 150px;
  padding-block: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
