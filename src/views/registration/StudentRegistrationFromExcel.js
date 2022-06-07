import React from "react";
import { CRow, CCol, CButton, CCard, CImg, CCardBody, CInputFile } from "@coreui/react";
import $ from "jquery";

const StudentRegistrationFromExcel = (props) => {
    const InputClick=()=>{
        $('#ExcelForm').click();
    }
  return (
     
    <>   
     <h1>Student Registration Form</h1><hr></hr>
    <CRow style={{ marginBottom: "30px" }}>
        <CCol lg="4"></CCol>
            <CCol lg="4" xs="12" sm="12" md="12"></CCol>
          </CRow>
      <CRow>
        <CCol lg='3'></CCol>
        <CCol lg='2'>
        <CCard>    
          <CImg className="card-img-top" src="/avatars/download.png" alt="Card image cap"/>
            <CCardBody>       
              <CButton className="btn btn-primary" onClick={props.ExcelDownload}>Download</CButton>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg='2'></CCol>
        <CCol lg='2'>
        <CCard>
            <CImg  className="card-img-top" src="/avatars/upload.png" alt="Card image cap"/>
            <CCardBody>
              <CButton htmlFor="ExcelForm" className="btn btn-primary" onClick={InputClick}>Upload</CButton>
              <CInputFile id="ExcelForm" onChange={props.importFile} style={{visibility:'hidden'}} onClick={props.clearFile} />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg='3'>
        </CCol>
        </CRow>
        <CRow> <CCol lg='3'></CCol>
               <CCol lg='2'></CCol>
                <CCol lg='2'></CCol>
                <CCol lg='2'></CCol>
                <CCol lg='3'><a href="">Go to Link</a></CCol>
        </CRow>      
        {/* <CCol lg="4"></CCol>
        <CCol lg="4" xs="12" sm="12" md="12">
         
          <CRow className="rowDiv">
        <CCol lg="6" xs="6" sm="6" md="6" style={{ textAlign: "end" }}>
          
        </CCol> */}
    </>
  );
};
export default StudentRegistrationFromExcel;
