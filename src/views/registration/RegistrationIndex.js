import React, { useState, useEffect } from "react";
import { CNav, CNavItem, CNavLink } from "@coreui/react";
import StudentRegistration from "./StudentRegistration";
import StudentRegistrationFromExcel from "./StudentRegistrationFromExcel";
import Loading from "../common/Loading"; // if function start load image
import { isNullorBlank, emailCheck, numberCheck, nameCheck } from "./Validate";// validation
import { ApiRequest } from "../common/ApiRequest";//apirequest 
import moment from "moment";
import Confirmation from "../common/ConfirmBox";
import "./style.css"
import SuccessError from "../common/Message";


const RegistrationIndex = () => {
  const [activeKey, setActiveKey] = useState(1);
  const [RadioData] = useState([
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
  ]);//radio 
  const [dropData, setDropData] = useState([]); //For Select Skill
  const [career_path, SetCareer] = useState(""); // Front End ,Back End
  const [loading, setLoading] = useState(false); // For Loading
  const [show, setShow] = useState(false); // for confirmation message box
  const [content, setContent] = useState(""); // for content confirmation message
  const [type, setType] = useState(""); // for confirmation type
  const [student_name, SetName] = useState(""); //Student Name State
  const [father_name, SetFatherName] = useState(""); //Father Name State
  const [nrc, SetNRC] = useState(""); //Nrc State
  const [address, SetAddress] = useState(""); //Address State
  const [phone, SetPhno] = useState(""); //Phone State
  const [email, SetEmail] = useState(""); //Email State
  const [imagepreviewurl, SetImagePreviewUrl] = useState(
    "./avatars/profile.png"
  ); //Image Url State
  const [editID,seteditID]=useState("");
  const [student_id, SetId] = useState(""); //Student State
  const [photo, SetImage] = useState(""); //Image State
  const [err, SetErr] = useState([]); //Error State
  const [success, setSuccess] = useState([]); //Success State
  const [dob, SetSelectedDate] = useState(new Date()); //Date Of Birth State
  const [RadioId, SetRadioId] = useState(""); //Radio State
  const [RadioName, SetRadioName] = useState(""); 
  const [ChkData, SetChkData] = useState([]);
  const [Chkid, setChkId] = useState("");
  const [chkskill, setChkskill] = useState([]);
  const [editStatus,setEditStatus]=useState(false);
  const careerChange = (e) => {
    SetCareer(e.target.value);
  };//career select
  const RadioHandle = (id, name) => {
    SetRadioId(id);
    SetRadioName(name);
  };//set radioid
  const CheckHandle = (e) => {
    let value = e.target.value;
    let checked = e.target.checked;
    let res = [];
    let data = ChkData.map((obj) =>
      obj.id === parseInt(value) ? { ...obj, is_checked: checked } : obj
    );

    for (let i = 0; i < data.length; i++) {
      if (data[i].is_checked == true) {
        res.push(data[i].id);
        // setChkskill([...chkskill, data[i].id]);
      }
    }
    console.log('aaaaaaaaaaaaaaaaaa', res);
    setChkskill(res);
    setChkId(res);
  };
  useEffect(() => {
    let id =JSON.parse(localStorage.getItem('STUDENT_DATA'));
    localStorage.removeItem("STUDENT_DATA");
    console.log("session data",id);
    if(id ===''|| id===null){
      systemFormLoad();
    }else
    systemFormLoad(id);
    seteditID(id);
   
  }, []);


//form load for register
  const systemFormLoad = async (data) => {
    let obj = { method: "get", url: "student-registeration/formload" };
    let response = await ApiRequest(obj);

    setDropData(response.data.career_path);
    SetChkData(response.data.skill);
    SetId(response.data.student_id);
    console.log("response data", response);
    // SetImagePreviewUrl("/avatars/profile.jpg");
      if(data =="" || data==null){
        setLoading(false);
        setShow(false);
        SetErr([]);
        SetRadioName("");
        SetCareer("");
        SetSelectedDate(new Date());
        setSuccess([]);
    
        ChkData.map((d, i) => {
          d.is_checked = false;
        });
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
  
      }else{
        systemFormLoadEdit(data,response.data.skill);
      }
      // if (response.data.status == "NG") {
      //   SetErr([response.data.message]);
      //   setSuccess([]);
      // } 
      // else  {
      //   SetErr([]);
      //   setSuccess([response.data.message]);
      // }
  };
  const systemFormLoadEdit =async(data,skill)=>{
    setEditStatus(true);
    setLoading(true);
    let obj ={method :"get" ,url:"student-list/detail",params:{id:data.id}};
    let response = await ApiRequest(obj);
    console.log("detail data",response);
    seteditID(response.data.data[0].id);
    SetId(response.data.data[0].student_id);
    SetName(response.data.data[0].student_name);
    SetFatherName(response.data.data[0].father_name);
    SetNRC(response.data.data[0].nrc);
    SetAddress(response.data.data[0].address);
    SetSelectedDate(response.data.data[0].dob);
    SetEmail(response.data.data[0].email);
    SetPhno(response.data.data[0].phone);
    SetCareer(response.data.data[0].career_path_id);
    setChkskill(response.data.data[0].skills);
    let edit_skill_array=response.data.data[0].skills.split(',').map(i=>Number(i))
    console.log("edit_skill_array",edit_skill_array);
    let data_skill=skill.map((data,index)=>
      edit_skill_array.includes(data.id)?{...data,is_checked:true}:data
    );
    SetChkData(data_skill);
    SetRadioId(response.data.data[0].gender);
    console.log("data ",data_skill);
   
    
  }
  const updateOK =async()=>{
    setLoading(true);
    setShow(false);
    let obj = {
      id : editID,
      student_id: student_id,
      student_name: student_name,
      father_name: father_name,
      nrc: nrc,
      phone: phone,
      email: email,
      gender: 1,
      dob: moment(dob).format("YYYY-MM-DD"),
      address: address,
      photo: photo,
      career_path:career_path ,
      skills: chkskill.toString(),
    };
    console.log('update ok ', obj);
    let save = {
      method: "post",
      url: "student-registeration/update",
      params: obj
    };
    let response = await ApiRequest(save);
    if (response.data.status == "NG") {
      SetErr([response.data.message]);
      setSuccess([]);
    } else {
      SetErr([]);
      setSuccess([response.data.message]);
    }
    setLoading(false);
    setShow(false);
    SetImagePreviewUrl("/avatars/profile.jpg");
    SetName("");
    SetFatherName("");
    SetNRC("");
    SetPhno("");
    SetEmail("");
    SetAddress("");
    SetErr([]);
    SetRadioName("");
    SetCareer("");
    SetSelectedDate(new Date());
    setSuccess([]);

    ChkData.map((d, i) => {
      d.is_checked = false;
    });
  }
  //Register Student data
  const saveData = async () => {
    setLoading(true);
    let obj = {
      student_id: student_id,
      student_name: student_name,
      father_name: father_name,
      nrc: nrc,
      phone: phone,
      email: email,
      gender: 1,
      dob: moment(dob).format("YYYY-MM-DD"),
      address: address,
      photo: photo,
      career_path: career_path,
      skills: chkskill.toString(),
    };
    let save = {
      method: "post",
      url: "student-registeration/save",
      params: obj,
    };
    let response = await ApiRequest(save);
    if (response.data.status == "NG") {
      SetErr([response.message]);
      setSuccess([]);
    } else {
      SetErr([]);
      setSuccess([response.data.message]);
    }
    setLoading(false);
    setShow(false);
    SetImagePreviewUrl("/avatars/profile.jpg");
    SetName("");
    SetFatherName("");
    SetNRC("");
    SetPhno("");
    SetEmail("");
    SetAddress("");
    SetErr([]);
    SetRadioName("");
    SetCareer("");
    SetSelectedDate(new Date());
    setSuccess([]);

    ChkData.map((d, i) => {
      d.is_checked = false;
    });
  };
  const saveBtnClick = () => {
    setShow(true);
  };
  //Name
  const handleChangeUserName = (e) => {
    SetName(e.target.value);
  };
  //ID number
  const handleChangeID = (e) => {
    SetId(e.target.value);
  };
  //Father Name
  const handleChangeFatherName = (e) => {
    SetFatherName(e.target.value);
  };
  //NRC
  const handleChangeNRC = (e) => {
    SetNRC(e.target.value);
  };
  //Address
  const handleChangeAddress = (e) => {
    SetAddress(e.target.value);
  };
  //Phno
  const handleChangePhNo = (e) => {
    SetPhno(e.target.value);
  };
  //Email
  const handleChangeEmail = (e) => {
    SetEmail(e.target.value);
  };
  // Image Choose
  const handleImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      SetImagePreviewUrl(reader.result);
    };
    SetImage(file.name);
    reader.readAsDataURL(file);
  };
  const handleDateChange = (e) => {
    SetSelectedDate(e.target.value);
  };
  //Save Data
  const Save = async () => {
    let error = [];
    if (!isNullorBlank(student_name)) {
      error.push("Please Enter Name");
    } 
    // else if (!nameCheck(student_name)) {
    //   error.push("Please Enter Valid Name");
    // }
    if (!isNullorBlank(father_name)) {
      error.push("Please Enter Father Name");
    } 
    // else if (!nameCheck(father_name)) {
    //   error.push("Please Enter Valid Name");
    // }
    if (!isNullorBlank(nrc)) {
      error.push("Please Enter NRC");
    }
    if (!isNullorBlank(address)) {
      error.push("Please Enter Address");
    }

    if (!isNullorBlank(phone)) {
      error.push("Please Enter Number Format");
    } 
    // else if (!numberCheck(phone)) {
    //   error.push("Please Enter Valid Number");
    // }
    if (!isNullorBlank(email)) {
      error.push("Please Enter Email Format");
    } else if (!emailCheck(email)) {
      error.push("Please Enter Valid Email");
    }
    if (!isNullorBlank(RadioId)) {
      error.push("Please Enter Gender");
    }
    console.log('save btn phone', RadioId)

    if (!isNullorBlank(career_path)) {
      error.push("Please Choose Career");
    }
    if (!isNullorBlank(photo)) {
      error.push("Please upload profile");
    }
    SetErr(error);
    if (error == "" || error == []) {
      setShow(true);
      setContent("Are you sure you want to save data");
      setType("save-data");
    }if(editStatus){   
      setContent("Are you sure you want to update");
      setType("update");
    }
    else  {
      SetErr(error);
      setSuccess([]);
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  //Reset Button
  const Reset = () => {
    SetImagePreviewUrl("/avatars/profile.jpg");
    SetName("");
    SetFatherName("");
    SetNRC("");
    SetPhno("");
    SetEmail("");
    SetAddress("");
    SetErr([]);
    SetRadioName("");
    SetCareer("");
    SetSelectedDate(new Date());
    setSuccess([]);
    ChkData.map((d, i) => {
      d.is_checked = false;
    });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  //Download Button
  const ExcelDownload = async () => {
    let obj = {
      method: "get",
      url: "student-registeration/download",
      type: "blob",
    };
    let response = await ApiRequest(obj);
    if (response.flag == false) {
      setSuccess([]);
      SetErr([response.data.message]);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      let fileName = "StudentRegisteration.xlsx";
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setSuccess(["Successfully Downloaded!"]);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };
  const clearFile = (i) => {
    i.target.value = null;
  };
  const importFile = async (i) => {
    let file = i.target.files[0];
    let formData = new FormData();
    formData.append("import_file", file);
    let obj = {
      method: "post",
      url: "/student-registeration/excel-import",
      params: formData,
    };
    let response = await ApiRequest(obj);
    setLoading(false);
    if (response.flag === false) {
      setSuccess([]);
      SetErr([response.data.message]);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      setSuccess([response.data.message]);
      SetErr([]);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
       <SuccessError success={success} error={err} />
      <Loading start={loading} />
      <Confirmation
        show={show}
        content={content}
        type={type}
        cancel={() => setShow(false)}
        // saveData={saveData}
        updateOK={updateOK}
        okButton={"OK"}
        cancelButton={"Cancel"}
      />
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink active={activeKey === 1} onClick={() => setActiveKey(1)}>
            StudentRegistration
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink active={activeKey === 2} onClick={() => setActiveKey(2)}>
            Student Registration From Excel
          </CNavLink>
        </CNavItem>
      </CNav>
      {activeKey === 1 && (
        <>
          <StudentRegistration
            RadioData={RadioData}
            RadioHandle={RadioHandle}
            RadioId={RadioId}
            RadioName={RadioName}
            careerChange={careerChange}
            dropData={dropData}
            career_path={career_path}
            CheckHandle={CheckHandle}
            ChkData={ChkData}
            Chkid={Chkid}
            chkskill={chkskill}
            handleChangeUserName={handleChangeUserName}
            Save={Save}
            student_name={student_name}
            address={address}
            father_name={father_name}
            nrc={nrc}
            handleImageChange={handleImageChange}
            photo={photo}
            imagepreviewurl={imagepreviewurl}
            email={email}
            phone={phone}
            Reset={Reset}
            handleChangeEmail={handleChangeEmail}
            handleChangeFatherName={handleChangeFatherName}
            handleChangeNRC={handleChangeNRC}
            handleChangePhNo={handleChangePhNo}
            handleChangeAddress={handleChangeAddress}
            student_id={student_id}
            handleDateChange={handleDateChange}
            dob={dob}
            handleChangeID={handleChangeID}
            editStatus={editStatus}
          ></StudentRegistration>
        </>
      )}
      {activeKey === 2 && (
        <StudentRegistrationFromExcel
          ExcelDownload={ExcelDownload}
          clearFile={clearFile}
          importFile={importFile}
        />
      )}
    </>
  );
};
export default RegistrationIndex;
