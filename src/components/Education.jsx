import { useEffect, useState } from "react";
import { Container } from "./PersonalInformation";
import { Description } from "./Experience";
import styled from "styled-components";
import ArrowLeft from "../assets/angle-left.svg";
import ArrowDown from "../assets/angle-down.png";
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
import axios from "axios";

export default function Education(props) {
  const { goHomePage } = props;

  const [isEducationValidated, setIsEducationValidated] = useState(false);
  const [educationWarning, setEducationWarning] = useState(false);
  const [isEndDateValidated, setIsEndDateValidated] = useState(false);
  const [endDateWarning, setEndDateWarning] = useState(false);
  const [isDescriptionValidated, setIsDescriptionValidated] = useState(false);
  const [descriptionWarning, setDescriptionWarning] = useState(false);
  const [isDegreeValidated, setIsDegreeValidated] = useState(false);
  const [degreeWarning, setDegreeWarning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState();
  const [degreesList, setDegreesList] = useState([]);
  const [selectedDegree, setSelectedDegree] = useState(
    JSON.parse(localStorage.getItem("selectedDegrees")) || [
      {
        id: Date.now(),
        degree: "",
      },
    ]
  );
  const [eduFormData, setEduFormData] = useState(
    JSON.parse(localStorage.getItem("eduFormData")) || [
      {
        id: Date.now(),
        institute: "",
        degree_id: "",
        due_date: "",
        description: "",
      },
    ]
  );

  // education input validation

  const handleEducationBlur = (e) => {
    if (e.target.value.length < 2) {
      let inputId = e.target.id;
      setEducationWarning((prevState) => ({ ...prevState, [inputId]: true }));
      setIsEducationValidated((prevState) => ({
        ...prevState,
        [inputId]: false,
      }));

      const educationInputsInfo =
        JSON.parse(localStorage.getItem("educationValidated")) || {};
      educationInputsInfo[inputId] = false;
      localStorage.setItem(
        "educationValidated",
        JSON.stringify(educationInputsInfo)
      );
    } else {
      let inputId = e.target.id;
      setIsEducationValidated((prevState) => ({
        ...prevState,
        [inputId]: true,
      }));
      setEducationWarning((prevState) => ({ ...prevState, [inputId]: false }));
      const educationInputsInfo =
        JSON.parse(localStorage.getItem("educationValidated")) || {};
      educationInputsInfo[inputId] = true;
      localStorage.setItem(
        "educationValidated",
        JSON.stringify(educationInputsInfo)
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
        JSON.parse(localStorage.getItem("eduEndDateValidated")) || {};
      endDateInputsInfo[inputId] = false;
      localStorage.setItem(
        "eduEndDateValidated",
        JSON.stringify(endDateInputsInfo)
      );
    } else {
      let inputId = e.target.id;
      setIsEndDateValidated((prevState) => ({ ...prevState, [inputId]: true }));
      setEndDateWarning((prevState) => ({ ...prevState, [inputId]: false }));
      const endDateInputsInfo =
        JSON.parse(localStorage.getItem("eduEndDateValidated")) || {};
      endDateInputsInfo[inputId] = true;
      localStorage.setItem(
        "eduEndDateValidated",
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
        JSON.parse(localStorage.getItem("eduDescriptionValidated")) || {};
      descriptionInputsInfo[inputId] = false;
      localStorage.setItem(
        "eduDescriptionValidated",
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
        JSON.parse(localStorage.getItem("eduDescriptionValidated")) || {};
      descriptionInputsInfo[inputId] = true;
      localStorage.setItem(
        "eduDescriptionValidated",
        JSON.stringify(descriptionInputsInfo)
      );
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("eduFormData");
    if (storedData) {
      setEduFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("eduFormData", JSON.stringify(eduFormData));
  }, [eduFormData]);

  useEffect(() => {
    localStorage.setItem("selectedDegrees", JSON.stringify(selectedDegree));
  }, [selectedDegree]);

  const handleInputChange = (e, id, inputName) => {
    const index = eduFormData.findIndex((form) => form.id === id);
    const newFormData = [...eduFormData];
    newFormData[index][inputName] = e.target.value;
    setEduFormData(newFormData);
  };

  const handleAddForm = () => {
    setEduFormData([
      ...eduFormData,
      {
        id: Date.now(),
        institute: "",
        degree_id: "",
        due_date: "",
        description: "",
      },
    ]);
    setSelectedDegree([...selectedDegree, { id: Date.now(), degree: "" }]);
  };

  useEffect(() => {
    const storedSelectedDegrees = localStorage.getItem("selectedDegrees");
    if (storedSelectedDegrees) {
      setSelectedDegree(storedSelectedDegrees);
    }

    const storedDegreeList = localStorage.getItem("degreeList");

    if (storedDegreeList) {
      setDegreesList(JSON.parse(storedDegreeList));
    } else {
      axios
        .get("https://resume.redberryinternship.ge/api/degrees")
        .then((response) => {
          setDegreesList(response.data);
          localStorage.setItem("degreeList", JSON.stringify(response.data));
        });
    }
  }, []);

  useEffect(() => {
    const image = localStorage.getItem("image");
    fetch(image)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "edited.jpeg", { type: "image/jpeg" });
        setFile(file);
      });
  }, []);

  useEffect(() => {
    const selectedDegrees = JSON.parse(localStorage.getItem("selectedDegrees"));
    if (selectedDegrees) {
      setSelectedDegree(selectedDegrees);
    }
  }, []);

  const handleDegreeClick = (e, degreeId, id, degreeName) => {
    setIsOpen(false);
    const degreesIndex = selectedDegree.findIndex((degree) => degree.id === id);
    const newSelectedDegrees = [...selectedDegree];
    newSelectedDegrees[degreesIndex]["degree"] = degreeName;
    setSelectedDegree(newSelectedDegrees);

    const index = eduFormData.findIndex((form) => form.id === id);
    const newFormData = [...eduFormData];
    newFormData[index]["degree_id"] = degreeId;
    setEduFormData(newFormData);

    let inputId = e.target.id;
    setIsDegreeValidated((prevState) => ({
      ...prevState,
      [inputId]: true,
    }));
    setDegreeWarning((prevState) => ({ ...prevState, [inputId]: false }));

    const degreeInfo =
      JSON.parse(localStorage.getItem("degreeValidated")) || {};
    degreeInfo[inputId] = true;
    localStorage.setItem("degreeValidated", JSON.stringify(degreeInfo));
  };

  const handleDegreeContainerClick = (id) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [`isOpen${id}`]: true,
    }));

    Object.entries(isOpen).forEach(([isOpenid, isOpen, index]) => {
      if (isOpen) {
        setIsOpen((prevState) => ({
          ...prevState,
          [isOpenid]: false,
        }));
      }
      if (isOpen && !selectedDegree[index]) {
        if (!selectedDegree[index]) {
          setDegreeWarning((prevState) => ({
            ...prevState,
            [`degree${id}`]: true,
          }));
          setIsDegreeValidated((prevState) => ({
            ...prevState,
            [`degree${id}`]: false,
          }));
          const degreeInfo =
            JSON.parse(localStorage.getItem("degreeValidated")) || {};
          degreeInfo[`degree${id}`] = false;
          localStorage.setItem("degreeValidated", JSON.stringify(degreeInfo));
        }
      }
    });
  };

  return (
    <Container>
      <EducationContainer>
        <Header>
          <ArrowContainer onClick={goHomePage}>
            <img style={{ height: 20 }} src={ArrowLeft} alt="arrow-left-icon" />
          </ArrowContainer>
          <header>
            <h1>განათლება</h1>
            <span>3/3</span>
          </header>
        </Header>
        {eduFormData.map((form, index) => (
          <form key={form.id}>
            <div style={{ position: "relative", marginTop: 35 }}>
              <Label htmlFor="position">სასწავლებელი</Label>
              {isEducationValidated[`education${form.id}`] ? (
                <CompletedIcon src={Completed} alt="completed-icon" />
              ) : null}
              {educationWarning[`education${form.id}`] ? (
                <Warning src={WarningIcon} alt="warning-icon" />
              ) : null}
              <Input
                style={{
                  width: "100%",
                  borderColor: isEducationValidated[`education${form.id}`]
                    ? "#98E37E"
                    : educationWarning[`education${form.id}`]
                    ? "#EF5050"
                    : "#bcbcbc",
                }}
                type="text"
                onBlur={(e) => handleEducationBlur(e, index)}
                name="education"
                id={`education${form.id}`}
                onChange={(e) => handleInputChange(e, form.id, "institute")}
                value={form.institute}
                placeholder="სასწავლებელი"
              />
              <Hint>მინიმუმ 2 სიმბოლო</Hint>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <div style={{ position: "relative", marginTop: 35 }}>
                <Label htmlFor="degree">ხარისხები</Label>
                {degreeWarning[`degree${form.id}`] ? (
                  <Warning
                    style={{ top: "53%" }}
                    src={WarningIcon}
                    alt="warning-icon"
                  />
                ) : null}
                <Degrees
                  style={{
                    opacity: form.degree_id !== "აირჩიეთ ხარისხი" ? 1 : 0.6,
                    borderColor: isDegreeValidated[`degree${form.id}`]
                      ? "#98E37E"
                      : degreeWarning[`degree${form.id}`]
                      ? "#EF5050"
                      : "#bcbcbc",
                  }}
                  onClick={() => handleDegreeContainerClick(form.id)}
                >
                  {selectedDegree[index].degree === "" ? (
                    <p style={{ opacity: 0.6 }}>აირჩიეთ ხარისხი</p>
                  ) : (
                    <p>{selectedDegree[index].degree}</p>
                  )}
                  <img src={ArrowDown} alt="angle-down-icon" />
                </Degrees>
                {isOpen[`isOpen${form.id}`] ? (
                  <DegreesList>
                    {degreesList.map((degree) => (
                      <span
                        onClick={(e) =>
                          handleDegreeClick(e, degree.id, form.id, degree.title)
                        }
                        id={`degree${form.id}`}
                        className={degree.title}
                        key={degree.id}
                        name={degree.title}
                      >
                        {degree.title}
                      </span>
                    ))}
                  </DegreesList>
                ) : null}
              </div>
              <div style={{ position: "relative", marginTop: 35 }}>
                <Label htmlFor="enddate">დამთავრების რიცხვი</Label>
                {endDateWarning[`eduEndDate${form.id}`] ? (
                  <Warning
                    style={{ top: "53%" }}
                    src={WarningIcon}
                    alt="warning-icon"
                  />
                ) : null}
                <Input
                  style={{
                    borderColor: isEndDateValidated[`eduEndDate${form.id}`]
                      ? "#98E37E"
                      : endDateWarning[`eduEndDate${form.id}`]
                      ? "#EF5050"
                      : "#bcbcbc",
                    opacity: 0.6,
                  }}
                  type="date"
                  onBlur={(e) => handleEndDateBlur(e, index)}
                  onChange={(e) => handleInputChange(e, form.id, "due_date")}
                  value={form.due_date}
                  name="enddate"
                  id={`eduEndDate${form.id}`}
                />
              </div>
            </div>
            <Description>
              <Label htmlFor="eduDescription">აღწერა</Label>
              {descriptionWarning[`eduDescription${form.id}`] ? (
                <Warning
                  style={{ top: "42%" }}
                  src={WarningIcon}
                  alt="warning-icon"
                />
              ) : null}
              <textarea
                style={{
                  borderColor: isDescriptionValidated[
                    `eduDescription${form.id}`
                  ]
                    ? "#98E37E"
                    : descriptionWarning[`eduDescription${form.id}`]
                    ? "#EF5050"
                    : "#bcbcbc",
                }}
                name="eduDescription"
                onBlur={(e) => handleDescriptionBlur(e, index)}
                onChange={(e) => handleInputChange(e, form.id, "description")}
                value={form.description}
                id={`eduDescription${form.id}`}
                rows="10"
                placeholder="განათლების აღწერა"
              ></textarea>
            </Description>
          </form>
        ))}
        <AddNewEducationceBtn
          onClick={handleAddForm}
          style={{ paddingInline: 35 }}
        >
          მეტი გამოცდილების დამატება
        </AddNewEducationceBtn>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/experience">
            <Button>უკან</Button>
          </Link>

          <Button onClick={handleNextPageClick} form="experience" type="submit">
            დასრულება
          </Button>
        </div>
      </EducationContainer>
      <Resume eduFormData={eduFormData} />
    </Container>
  );
}

const DegreesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  background-color: white;
  padding: 13px;
  position: absolute;
  z-index: 1;
  box-shadow: 1px 1px 12px #bcbcbc;
  span {
    margin-bottom: 25px;
  }
  .სხვა {
    margin: 0;
  }
`;

const Degrees = styled.div`
  width: 350px;
  padding: 12px;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  border: 1px solid #bcbcbc;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  img {
    height: 7px;
  }
`;

const AddNewEducationceBtn = styled.button`
  max-width: 300px;
  padding-block: 20px;
  background: #62a1eb;
  border: none;
  color: white;
  font-size: 15px;
  border-radius: 4px;
  margin-block: 35px;
`;

const EducationContainer = styled.div`
  width: 55%;
  padding-inline: 150px;
  padding-block: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
