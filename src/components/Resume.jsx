import styled from "styled-components";
import EmailLogo from "../assets/vector2.png";
import PhoneLogo from "../assets/vector3.png";
import ResumeIcon from "../assets/resume-icon.png";

export default function Resume(props) {
  const {
    name,
    surname,
    selectedPicture,
    aboutme,
    email,
    phone,
    formData,
    eduFormData,
    selectedDegree,
  } = props;

  const storedName = localStorage.getItem("name");
  const storedSurname = localStorage.getItem("surname");
  const storedPicture = localStorage.getItem("storedImage");
  const storedSelectedDegrees = JSON.parse(
    localStorage.getItem("selectedDegrees")
  );
  const storedAboutme = localStorage.getItem("about_me");
  const storedEmail = localStorage.getItem("email");
  const storedPhone = localStorage.getItem("phone_number");

  let storagedFormData = JSON.parse(localStorage.getItem("formData"));
  let storagedEduFormData = JSON.parse(localStorage.getItem("eduFormData"));

  return (
    <Container>
      <ResumeContainer>
        {name ||
        storedName ||
        surname ||
        storedSurname ||
        email ||
        storedEmail ||
        phone ||
        storedPhone ||
        selectedPicture ||
        storedPicture ||
        aboutme ||
        storedAboutme ? (
          <PersonalInfoSection>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1 style={{ color: "#F93B1D", fontSize: 35 }}>
                {name ? name : storedName} {surname ? surname : storedSurname}
              </h1>
              {email || storedEmail ? (
                <span style={{ marginTop: 25, fontSize: 20 }}>
                  <img
                    style={{ height: 17, marginRight: 7 }}
                    src={EmailLogo}
                    alt="email-logo"
                  />
                  {email ? email : storedEmail}
                </span>
              ) : null}

              {phone || storedPhone ? (
                <span style={{ marginTop: 10, fontSize: 20 }}>
                  <img
                    style={{ height: 17, marginRight: 7 }}
                    src={PhoneLogo}
                    alt="phone-logo"
                  />
                  {phone ? phone : storedPhone}
                </span>
              ) : null}

              {aboutme || storedAboutme ? (
                <div style={{ marginTop: 30 }}>
                  <SectionHeadings>ჩემს შესახებ</SectionHeadings>
                  <AboutMeInfo>{aboutme ? aboutme : storedAboutme}</AboutMeInfo>
                </div>
              ) : null}
            </div>
            <div>
              {selectedPicture || storedPicture ? (
                <ProfileIMG
                  src={selectedPicture ? selectedPicture : storedPicture}
                  alt="selected-picture"
                />
              ) : null}
            </div>
          </PersonalInfoSection>
        ) : null}
        {storagedFormData ? (
          <ExperienceSection>
            <SectionHeadings
              style={{
                display:
                  storagedFormData[0].position !== "" ||
                  storagedFormData[0].employer !== "" ||
                  storagedFormData[0].start_date !== "" ||
                  storagedFormData[0].due_date !== "" ||
                  storagedFormData[0].description !== ""
                    ? "block"
                    : "none",
              }}
            >
              გამოცდილება
            </SectionHeadings>
            {window.location.pathname === "/experience"
              ? formData.map((form) => (
                  <div
                    key={form.id}
                    style={{
                      marginBottom: 20,
                      borderBottom: "1px solid #C8C8C8",
                      display:
                        form.position !== "" ||
                        form.employer !== "" ||
                        form.start_date !== "" ||
                        form.due_date !== "" ||
                        form.description !== ""
                          ? "block"
                          : "none",
                      paddingBottom: 20,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 16,
                        display:
                          form.position !== "" || form.employer !== ""
                            ? "block"
                            : "none",
                      }}
                    >
                      {form.position + ","} {form.employer}
                    </h3>
                    <div style={{ display: "flex", marginTop: 7 }}>
                      <span
                        style={{ fontSize: 16, opacity: 0.5, marginRight: 15 }}
                      >
                        {form.start_date}
                      </span>
                      <span style={{ fontSize: 16, opacity: 0.5 }}>
                        {form.due_date}
                      </span>
                    </div>
                    <p style={{ marginTop: 15 }}>{form.description}</p>
                  </div>
                ))
              : storagedFormData.map((form) => (
                  <div
                    key={form.id}
                    style={{
                      marginBottom: 20,
                      display:
                        form.position !== "" ||
                        form.employer !== "" ||
                        form.start_date !== "" ||
                        form.due_date !== "" ||
                        form.description !== ""
                          ? "block"
                          : "none",
                      borderBottom: "1px solid #C8C8C8",
                      paddingBottom: 20,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 16,
                        display:
                          form.position !== "" || form.employer !== ""
                            ? "block"
                            : "none",
                      }}
                    >
                      {form.position + ","} {form.employer}
                    </h3>
                    <div style={{ display: "flex", marginTop: 7 }}>
                      <span
                        style={{ fontSize: 16, opacity: 0.5, marginRight: 15 }}
                      >
                        {form.start_date}
                      </span>
                      <span style={{ fontSize: 16, opacity: 0.5 }}>
                        {form.due_date}
                      </span>
                    </div>
                    <p style={{ marginTop: 15 }}>{form.description}</p>
                  </div>
                ))}
          </ExperienceSection>
        ) : null}
        {storagedEduFormData ? (
          <EducationSection>
            <SectionHeadings
              style={{
                display:
                  storagedEduFormData[0].institute !== "" ||
                  storagedEduFormData[0].degree_id !== "" ||
                  storagedEduFormData[0].due_date !== "" ||
                  storagedEduFormData[0].description !== ""
                    ? "block"
                    : "none",
              }}
            >
              გამოცდილება
            </SectionHeadings>
            {window.location.pathname === "/education"
              ? eduFormData.map((form, index) => (
                  <div
                    key={form.id}
                    style={{
                      marginBottom: 20,
                      display:
                        form.institute !== "" ||
                        form.degree_id !== "" ||
                        form.due_date !== "" ||
                        form.description !== ""
                          ? "block"
                          : "none",
                      borderBottom: "1px solid #C8C8C8",
                      paddingBottom: 20,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 16,
                        display:
                          form.institute !== "" || form.degree_id !== ""
                            ? "block"
                            : "none",
                      }}
                    >
                      {form.institute + ","} {selectedDegree[index].degree}
                    </h3>
                    <div style={{ display: "flex", marginTop: 7 }}>
                      <span style={{ fontSize: 16, opacity: 0.5 }}>
                        {form.due_date}
                      </span>
                    </div>
                    <p style={{ marginTop: 15 }}>{form.description}</p>
                  </div>
                ))
              : storagedEduFormData.map((form, index) => (
                  <div
                    key={form.id}
                    style={{
                      marginBottom: 20,
                      display:
                        form.institute !== "" ||
                        form.degree_id !== "" ||
                        form.due_date !== "" ||
                        form.description !== ""
                          ? "block"
                          : "none",
                      borderBottom: "1px solid #C8C8C8",
                      paddingBottom: 20,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 16,
                        display:
                          form.institute !== "" || form.degree_id !== ""
                            ? "block"
                            : "none",
                      }}
                    >
                      {form.institute + ","}{" "}
                      {storedSelectedDegrees[index].degree}
                    </h3>
                    <div style={{ display: "flex", marginTop: 7 }}>
                      <span style={{ fontSize: 16, opacity: 0.5 }}>
                        {form.due_date}
                      </span>
                    </div>
                    <p style={{ marginTop: 15 }}>{form.description}</p>
                  </div>
                ))}
          </EducationSection>
        ) : null}
      </ResumeContainer>
      <div style={{ marginInline: 70, marginTop: 30 }}>
        <img src={ResumeIcon} alt="resume-icon" />
      </div>
    </Container>
  );
}

export const SectionHeadings = styled.h3`
  color: #f93b1d;
  margin-bottom: 15px;
`;

export const ProfileIMG = styled.img`
  height: 260px;
  width: 260px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AboutMeInfo = styled.p`
  inline-size: 340px;
  overflow-wrap: break-word;
  line-height: 1.5;
`;

export const EducationSection = styled.div`
  display: flex;
  margin-inline: 70px;
  justify-content: space-between;
  flex-direction: column;
`;

export const ExperienceSection = styled.div`
  display: flex;
  padding-block: 30px;
  margin-inline: 70px;
  justify-content: space-between;
  flex-direction: column;
`;

export const PersonalInfoSection = styled.div`
  display: flex;
  padding-top: 70px;
  padding-bottom: 30px;
  margin-inline: 70px;
  border-bottom: 1px solid #c8c8c8;
  justify-content: space-between;
`;

const ResumeContainer = styled.div`
  min-height: 970px;
  max-height: 970px;
  overflow-y: scroll;
`;

const Container = styled.div`
  width: 45%;
  background-color: white;
  max-height: 1080px;
`;
