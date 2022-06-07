import React from 'react';
import {CRow,CButton,CModal,CModalBody,CButtonToolbar,CModalHeader,CImg,CCol,CLink,CCard, CInput, CLabel} from '@coreui/react';
const DetailModal = props => {
    const {
        show,
        closeBtn,
        data
    } = props;
    return (
        <>
         {data != "" && 
                <CModal  size="lg" centered closeOnBackdrop={true} show={show} id="advanced">
                    <CModalHeader><span><h5 style={{fontWeight: 'bold',marginLeft: '20px'}}>Student Detail Information</h5></span></CModalHeader>
                    <CModalBody>
                        <CRow id="approver-modal">
                            <CCol lg='12'>
                                <CRow >
                                    <CCol style={{
                                            alignContent: "center",
                                            marginBottom: "30px",
                                            textAlign: "center"
                                    }}>
                                        <CImg src='avatars/profile.png' style={{width:'100px',height:'100px'}}/>
                                    </CCol>
                                </CRow>
                                <CRow style={{margin:'20px'}}>
                                    <CCol lg='3'></CCol>
                                    <CCol style={{textAlign:'start'}} lg='2'> ID</CCol>
                                    <CCol lg='2'>:</CCol>
                                    <CCol lg='5'>{data.id}</CCol>
                                </CRow> 
                                <CRow style={{margin:'20px'}}>
                                    <CCol lg='3'></CCol>
                                    <CCol style={{textAlign:'start'}} lg='2'> Name</CCol>
                                    <CCol lg='2'>:</CCol>
                                    <CCol lg='5'>{data.student_name}</CCol>
                                </CRow> 
                                <CRow style={{margin:'20px'}}>
                                    <CCol lg='3'></CCol>
                                    <CCol style={{textAlign:'start'}} lg='2'> Father's Name</CCol>
                                    <CCol lg='2'>:</CCol>
                                    <CCol lg='5'>{data.father_name}</CCol>
                                </CRow> 
                                <CRow style={{margin:'20px'}}>
                                    <CCol lg='3'></CCol>
                                    <CCol style={{textAlign:'start'}} lg='2'> NRC </CCol>
                                    <CCol lg='2'>:</CCol>
                                    <CCol lg='5'>{data.nrc}</CCol>
                                </CRow> 
                                <CRow style={{margin:'20px'}}>
                                    <CCol lg='3'></CCol>
                                    <CCol style={{textAlign:'start'}} lg='2'> Phone No </CCol>
                                    <CCol lg='2'>:</CCol>
                                    <CCol lg='5'>{data.phone}</CCol>
                                </CRow> 
                                <CRow style={{margin:'20px'}}>
                                    <CCol lg='3'></CCol>
                                    <CCol style={{textAlign:'start'}} lg='2'> Email </CCol>
                                    <CCol lg='2'>:</CCol>
                                    <CCol lg='5'>{data.email}</CCol>
                                </CRow> 
                                <CRow style={{margin:'20px'}}>
                                    <CCol lg='3'></CCol>
                                    <CCol style={{textAlign:'start'}} lg='2'> Gender </CCol>
                                    <CCol lg='2'>:</CCol>
                                    <CCol lg='5'>{data.gender}</CCol>
                                </CRow> 
                                <CRow style={{margin:'20px'}}>
                                    <CCol lg='3'></CCol>
                                    <CCol style={{textAlign:'start'}} lg='2'> Gender </CCol>
                                    <CCol lg='2'>:</CCol>
                                    <CCol lg='5'>{data.gender}</CCol>
                                </CRow> 
                                <CRow style={{margin:'20px'}}>
                                    <CCol lg='3'></CCol>
                                    <CCol style={{textAlign:'start'}} lg='2'> Date of Birth </CCol>
                                    <CCol lg='2'>:</CCol>
                                    <CCol lg='5'>{data.dob}</CCol>
                                </CRow> 
                                <CRow style={{margin:'20px'}}>
                                    <CCol lg='3'></CCol>
                                    <CCol style={{textAlign:'start'}} lg='2'> Address </CCol>
                                    <CCol lg='2'>:</CCol>
                                    <CCol lg='5'>{data.address}</CCol>
                                </CRow> 
                                <CRow style={{margin:'20px'}}>
                                    <CCol lg='3'></CCol>
                                    <CCol style={{textAlign:'start'}} lg='2'> Career Path </CCol>
                                    <CCol lg='2'>:</CCol>
                                    <CCol lg='5'>{data.career_path_id}</CCol>
                                </CRow> 
                                <CRow style={{margin:'20px'}}>
                                    <CCol lg='3'></CCol>
                                    <CCol style={{textAlign:'start'}} lg='2'> Skill </CCol>
                                    <CCol lg='2'>:</CCol>
                                    <CCol lg='5'>{data.skills}</CCol>
                                </CRow> 
                            </CCol>  
                        </CRow>
                        <CButtonToolbar className="confirm-body" justify="center">
                            <CButton className="confirm-btn btn-primary" onClick={closeBtn}>Close</CButton>
                        </CButtonToolbar>
                    </CModalBody>
                </CModal>
    
         } 
            
        </>
    )
}
export default DetailModal