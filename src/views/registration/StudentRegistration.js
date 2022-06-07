import {
  CContaine,
  CRow,
  CCol,
  CLabel,
  CInput,
  CInputRadio,
  CContainer,
  CTextarea,
  CButton,
  CSelect,
  CImg,
  CInputCheckbox,
} from "@coreui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isNullorBlank } from "./Validate";

const StudentRegistration = (props) => {
  let {
    RadioData,
    RadioHandle,
    RadioId,
    careerChange,
    dropData,
    career_path,
    chkskill,
    CheckHandle,
    handleChangeUserName,
    Save,
    handleChangeFatherName,
    handleChangeEmail,
    handleChangeNRC,
    handleChangePhNo,
    handleChangeAddress,
    student_id,
    student_name,
    ChkData,
    father_name,
    nrc,
    email,
    phone,
    handleDateChange,
    dob,
    handleChangeID,
    address,
    handleImageChange,
    photo,
    imagepreviewurl,
    Reset,
    editStatus
  } = props;
  return (
    <>
      <h1>Student Registration Form</h1>
      <hr></hr>
      <div className="bg">
        <CRow>
          <CCol lg="4"></CCol>
          <CCol lg="4" xs="12" sm="12" md="12">
            <CRow style={{ marginBottom: "30px" }}></CRow>
            <CRow
              style={{
                alignContent: "center",
                marginBottom: "30px",
                justifyContent: "center",
              }}
            >
              <CLabel htmlFor="photo-upload" className="custom-file-upload">
                <div className="img-wrap img-upload">
                  <CImg
                    htmlFor="photo-upload"
                    id="photo-upload-id"
                    className="c-avatar-img image"
                    src={imagepreviewurl}
                    value={photo}
                  />
                </div>
                <input
                  id="photo-upload"
                  htmlFor="photo-upload-id"
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  hidden
                  onChange={handleImageChange}
                />
              </CLabel>
            </CRow>
            <CRow className="rowDiv">
              <CCol lg="4" xs="4" sm="4" md="4">
                <CLabel className="label">ID:</CLabel>
              </CCol>
              <CCol lg="8" xs="12" sm="8" md="8">
                <CInput
                  type="number"
                  placeholder="Enter ID"
                  name="id"
                  className="form-control"
                  value={student_id}
                  readOnly
                  onChange={(e) => handleChangeID(e)}
                />
              </CCol>
            </CRow>
            <CRow className="rowDiv">
              <CCol lg="4" xs="4" sm="4" md="4" className="col">
                <CLabel className="label">Name:</CLabel>
              </CCol>
              <CCol lg="8" xs="12" sm="8" md="8">
                <CInput
                  type="text"
                  placeholder="Enter Name"
                  className="form-control"
                  name="name"
                  value={student_name}
                  onChange={(e) => handleChangeUserName(e)}
                />
              </CCol>
            </CRow>
            <CRow className="rowDiv">
              <CCol lg="4" xs="8" sm="4" md="4" className="colDiv">
                <CLabel>FatherName:</CLabel>
              </CCol>
              <CCol lg="8" xs="12" sm="8" md="8">
                <CInput
                  type="text"
                  className="form-control"
                  placeholder="Enter Father Name"
                  name="fathername"
                  value={father_name}
                  onChange={(e) => handleChangeFatherName(e)}
                />
              </CCol>
            </CRow>
            <CRow className="rowDiv">
              <CCol lg="4" xs="4" sm="4" md="4" className="colDiv">
                <CLabel className="label">NRC:</CLabel>
              </CCol>
              <CCol lg="8" xs="12" sm="8" md="8">
                <CInput
                  type="text"
                  placeholder="Enter NRC"
                  name="nrc"
                  value={nrc}
                  onChange={(e) => handleChangeNRC(e)}
                />
              </CCol>
            </CRow>
            <CRow className="rowDiv">
              <CCol lg="4" xs="8" sm="4" md="4" className="colDiv">
                <CLabel className="label">PhoneNumber:</CLabel>
              </CCol>
              <CCol lg="8" xs="12" sm="8" md="8">
                <CInput
                  type="text"
                  className="form-control"
                  placeholder="Enter PhoneNumber"
                  name="phone"
                  value={phone}
                  onChange={(e) => handleChangePhNo(e)}
                />
              </CCol>
            </CRow>
            <CRow className="rowDiv">
              <CCol lg="4" xs="4" sm="4" md="4" className="colDiv">
                <CLabel className="label">Email:</CLabel>
              </CCol>
              <CCol lg="8" xs="12" sm="8" md="8">
                <CInput
                  type="text"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  onChange={(e) => handleChangeEmail(e)}
                />
              </CCol>
            </CRow>
            <CRow className="rowDiv">
              <CCol lg="4" xs="4" sm="4" md="4" className="colDiv">
                <CLabel className="label">Gender:</CLabel>
              </CCol>
              <CCol lg="8" xs="12" sm="8" md="8">
                <div className="ml-left" style={{ display: "flex" }}>
                  {RadioData.map((data, index) => {
                    return (
                      <CCol lg="6" className="radioLabel" key={index}>
                        <CInputRadio
                          value={data.id}
                          name={data.name}
                          checked={RadioId === parseInt(data.id) ? true : false}
                          onChange={() => RadioHandle(data.id, data.name)}
                        />
                        <CLabel className="RadioLabel">{data.name}</CLabel>
                      </CCol>
                    );
                  })}
                </div>
              </CCol>
            </CRow>
            <CRow className="rowDiv">
              <CCol lg="4" xs="8" sm="4" md="4" className="colDiv">
                <CLabel className="label">Date</CLabel>
              </CCol>
              <CCol lg="8" xs="12" sm="8" md="8">
                <CInput
                  type="date"
                  className="form-control"
                  name="date"
                  value={dob}
                  onChange={(e) => handleDateChange(e)}
                />
              </CCol>
            </CRow>
            <CRow className="rowDiv">
              <CCol className="col">
                <CLabel className="label">Address:</CLabel>
              </CCol>
              <CCol lg="8" xs="12" sm="8" md="8">
                <CTextarea
                  type="text"
                  className="form-control"
                  placeholder="Enter Address"
                  name="address"
                  value={address}
                  onChange={(e) => handleChangeAddress(e)}
                />
              </CCol>
            </CRow>
            <CRow className="rowDiv">
              <CCol lg="4" xs="5" sm="4" md="4" className="colDiv">
                <CLabel className="label">Select Career Path</CLabel>
              </CCol>
              <CCol lg="8" xs="12" sm="8" md="8">
                <CSelect value={career_path} onChange={careerChange}>
                  <option value="">.....Please Select......</option>
                  {dropData.map((data, index) => {
                    return (
                      <option key={index} id={data.id} value={data.id}>
                        {data.career_name}
                      </option>
                    );
                  })}
                </CSelect>
              </CCol>
            </CRow>
            <CRow className="rowDiv">
              <CCol lg="4" xs="4" sm="4" md="4" className="col">
                <CLabel className="label">Skill:</CLabel>
              </CCol>
              <CCol lg="8" xs="12" sm="8" md="8">
                <CRow className="ml-2">
                  {ChkData.map((data, index) => {
                    return (
                      <CCol lg="6" key={index}>
                        <CInputCheckbox
                          key={index}
                          value={data.id}
                          name={data.id}
                          checked={data.is_checked}
                          onChange={CheckHandle}
                        />
                        <CLabel
                          className="label"
                          style={{ wordBreak: "break-all" }}
                        >
                          {data.skill_name}
                        </CLabel>
                      </CCol>
                    );
                  })}
                </CRow>
              </CCol>
            </CRow>
            <CRow className="rowDiv">
              <CCol lg="6" xs="6" sm="6" md="6" style={{ textAlign: "end" }}>
                  {props.editStatus &&
                  <CButton className="btn btn-primary" onClick={Save}> Update</CButton>
                  }
                 {!props.editStatus &&
                  <CButton className="btn btn-primary" onClick={Save}> Save</CButton>
                  }
              </CCol>
              <CCol lg="6" xs="6" sm="6" md="6">
                <CButton className="btn btn-primary" onClick={Reset}>
                  Reset
                </CButton>
              </CCol>
            </CRow>
            <CRow className="rowDiv">
              <CCol>
                <a style={{ float: "right" }} href="/list">
                  Go to List{" "}
                </a>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </div>
    </>
  );
};

export default StudentRegistration;
