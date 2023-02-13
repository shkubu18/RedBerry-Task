import { useState } from "react";
import styled from "styled-components";
import ArrowLeft from "../assets/angle-left.svg";
import ResumeIcon from "../assets/resume-icon.png";
import EmailLogo from "../assets/vector2.png";
import PhoneLogo from "../assets/vector3.png";
import XMark from "../assets/xmark.png";
import {
  AboutMeInfo,
  EducationSection,
  ExperienceSection,
  PersonalInfoSection,
  ProfileIMG,
  SectionHeadings,
} from "./Resume";

export default function GeneratedResume(props) {
  const [isClosed, setIsClosed] = useState(false);

  const { goHomePage } = props;

  const storedCV = JSON.parse(localStorage.getItem("genereted_resume"));

  return (
    <Container>
      <ArrowContainer onClick={goHomePage}>
        <img style={{ height: 20 }} src={ArrowLeft} alt="arrow-left-icon" />
      </ArrowContainer>
      <Resume>
        <div style={{ minHeight: 870, maxHeight: 870, overflowY: "scroll" }}>
          <PersonalInfoSection>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1 style={{ color: "#F93B1D", fontSize: 35 }}>
                {storedCV.name} {storedCV.surname}
              </h1>
              <span style={{ marginTop: 25, fontSize: 20 }}>
                <img
                  style={{ height: 17, marginRight: 7 }}
                  src={EmailLogo}
                  alt="email-logo"
                />
                {storedCV.email}
              </span>

              <span style={{ marginTop: 10, fontSize: 20 }}>
                <img
                  style={{ height: 17, marginRight: 7 }}
                  src={PhoneLogo}
                  alt="phone-logo"
                />
                {storedCV.phone_number}
              </span>

              <div style={{ marginTop: 30 }}>
                <SectionHeadings>ჩემს შესახებ</SectionHeadings>
                <AboutMeInfo>
                  {storedCV.about_me ? storedCV.about_me : null}
                </AboutMeInfo>
              </div>
            </div>
            <div>
              <ProfileIMG
                src={`https://resume.redberryinternship.ge${storedCV.image}`}
                alt="selected-picture"
              />
            </div>
          </PersonalInfoSection>
          <ExperienceSection>
            <SectionHeadings>გამოცდილება</SectionHeadings>
            {storedCV.experiences.map((experience) => (
              <div
                key={experience.id}
                style={{
                  marginBottom: 20,
                  borderBottom: "1px solid #C8C8C8",
                  paddingBottom: 20,
                }}
              >
                <h3 style={{ fontSize: 16 }}>
                  {experience.position + ","} {experience.employer}
                </h3>
                <div style={{ display: "flex", marginTop: 7 }}>
                  <span style={{ fontSize: 16, opacity: 0.5, marginRight: 15 }}>
                    {experience.start_date}
                  </span>
                  <span style={{ fontSize: 16, opacity: 0.5 }}>
                    {experience.due_date}
                  </span>
                </div>
                <p style={{ marginTop: 15 }}>{experience.description}</p>
              </div>
            ))}
          </ExperienceSection>
          <EducationSection>
            <SectionHeadings>განათლება</SectionHeadings>
            {storedCV.educations.map((education) => (
              <div
                key={education.id}
                style={{
                  marginBottom: 20,
                  borderBottom: "1px solid #C8C8C8",
                  paddingBottom: 20,
                }}
              >
                <h3 style={{ fontSize: 16 }}>
                  {education.institute + ","} {education.degree}
                </h3>
                <div style={{ display: "flex", marginTop: 7 }}>
                  <span style={{ fontSize: 16, opacity: 0.5 }}>
                    {education.due_date}
                  </span>
                </div>
                <p style={{ marginTop: 15 }}>{education.description}</p>
              </div>
            ))}
          </EducationSection>
        </div>
        <div style={{ marginInline: 70, marginTop: 30 }}>
          <img src={ResumeIcon} alt="resume-icon" />
        </div>
      </Resume>
      {!isClosed ? (
        <PopUpInfo>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img
              onClick={() => setIsClosed(!isClosed)}
              style={{ marginRight: 10, marginTop: 10, cursor: "pointer" }}
              src={XMark}
              alt="xmark"
            />
          </div>
          <h3 style={{ width: "100%", fontSize: 28, marginTop: 27 }}>
            რეზიუმე წარმატებით გაიგზავნა 🎉
          </h3>
        </PopUpInfo>
      ) : null}
    </Container>
  );
}

const PopUpInfo = styled.div`
  max-width: 420px;
  height: 170px;
  padding-left: 30px;
  box-shadow: 1px 1px 10px 2px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  position: absolute;
  right: 50px;
`;

const Resume = styled.div`
  width: 820px;
  border: 1px solid black;
  margin-right: 100px;
  max-height: 970px;
  border-radius: 2px;
  margin-left: 26.5%;
`;

const ArrowContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f9f9f9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  padding-inline: 50px;
  padding-top: 40px;
  position: relative;
`;
