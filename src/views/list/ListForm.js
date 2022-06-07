import React from "react";
import {
  CCard,
  CRow,
  CCol,
  CCardHeader,
  CCardBody,
  CSelect,
  CInput,
  CImg,
  CInputRadio,
  CLabel,
  CButton,
} from "@coreui/react";
import { Link } from "react-router-dom";
const ListForm = (props) => {
  let { dropData,radioData,SearchHandleChange,searchTextbox,search,downloadtype,RadioHandle,DownloadClick,searchData,btnSearch,searchChange } = props;
 
  return (
    <>
      <CRow>
        <CCol lg="6">
          <CRow>
            <CCol lg="3" style={{ marginRight: "-30px" }}>
              <CSelect value={searchData} onChange={searchChange}>
                {dropData.map((data, index) => {
                  return (
                    <option key={index} 
                      name={data.id} 
                      value={data.id}>
                      {data.name}
                    </option>
                  );
                })}
              </CSelect>
            </CCol>
            <CCol lg="6">
              <CInput
                type="text"
                className="form-control"
                name="search"
                value={searchTextbox}
                placeholder="Enter Keyword"
                onChange={SearchHandleChange}
              />
            </CCol>
            <CCol lg="3">
              <CImg
                className="simg"
                src="/avatars/search.jpg"
                style={{width:'25px', height: "25px", marginTop: "5" }}
                onClick={btnSearch}
              />
            </CCol>
          </CRow>
        </CCol>
        <CCol lg="6">
          <CRow>
            <CCol lg="4" className="ml-left" style={{ display: "flex" }}>
              {radioData.map((data,index) => {
                return (
                  <CRow key={index}>
                    <CCol lg="4" className="radioLabel">
                      <input
                        type="radio"
                        checked={downloadtype === parseInt(data.id) ? true : false}
                        value={data.id}
                        name={data.name}
                        onChange={() => RadioHandle(data.id, data.name)}
                      />
                      </CCol>
                      <CCol lg='4'>
                      <CLabel className="RadioLabel">{data.name}</CLabel>
                      </CCol>     
                  </CRow>
                );
              })}
            </CCol>
            <CCol lg="4">
              <CButton className="btn btn-primary" onClick={DownloadClick}><CImg src="avatars/download.png"  />Download</CButton>
            </CCol>
            <CCol lg="4">
            <Link className="btn btn-primary" to='/registration'><CImg src="avatars/file.png" />Register</Link>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </>
  );
};

export default ListForm;
