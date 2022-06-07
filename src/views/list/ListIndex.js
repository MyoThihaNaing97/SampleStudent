import React, { lazy, useEffect, useState } from "react";
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
import Table from "./Table";
import ListForm from "./ListForm";
import "./style1.css";
import UserData from "./UsersData";
import SuccessError from "../common/Message";
import DetailModal from "./DetailModal";
import { ApiRequest } from "../common/ApiRequest";
import Loading from "../common/Loading";
import CommonMessage from "../common/CommonMessage";
import $ from "jquery";
import Confirmation from "../common/ConfirmBox";
import { useHistory } from "react-router-dom";

const ListIndex = () => {
  const [dropData, setDropData] = useState([
    { id: 0, name: "All" },
    { id: 1, name: "ID" },
    { id: 2, name: "Name" },
    { id: 3, name: "Email" },
    { id: 4, name: "CareerPath" },
  ]); //select data
  const [downloadname, SetDownloadName] = useState(""); //Radio State
  const [radioData, setRadioData] = useState([
    { id: 1, name: "Excel" },
    { id: 2, name: "PDF" },
  ]); //radio data
  const history=useHistory();
  const [downloadtype, SetDownloadType] = useState(""); //radio type click
  const [searchTextbox, setSearchTextBox] = useState(""); //search text;
  const [currentPage, setCurrentPage] = useState();// pagination first 
  const [lastPage, setLastPage] = useState();// pagination last
  const [loading, setLoading] = useState(false); // loading
  const [success, setSuccess] = useState([]); //success text
  const [error, setError] = useState([]); // error text
  const [maindata, setMainData] = useState([]); // maindata
  const [total, setTotal] = useState([]); //total
  let [searchData, setSearchData] = useState(""); // search id
  const [detailModalShow, setDetailModalShow] = useState(false);// modal box
  const [detaildata,setDetailData]=useState("");
  const [confirmShow, setConfirmShow ] = useState(false); // for confirmation message box
  const [content, setContent ] = useState(""); // for content confirmation message
  const [confirmType, setConfirmType ] = useState(""); // for confirmation type 
  const [deleteid,setDeleteId]=useState("");

  // console.log("LoadiED", loading);
  useEffect(() => {
    (async () => {
      setLoading(true);
      await search();
    })();
  }, []);


  const SearchHandleChange = (e) => {
    setSearchTextBox(e.target.value);
  };
  const RadioHandle = (id, name) => {
    alert(id);
    SetDownloadType(id);
    SetDownloadName(name);
  };
  let searchChange = (e) => {
    setSearchData(e.target.value);
  };
  const btnSearch = (page) => {
    setError([]);
    setSuccess([]);
    setLoading(true);
    search(page);
  };
  const setActivePage = (page) => {
    setError([]);
    setSuccess([]);
    setLoading(true);
    search(page);
  };
  const search = async (page = 1) => {
    setLoading(true);
    setError([]);
    setSuccess([]);
    let search = {
      method: "get",
      url: `student-list/search?page=${page}`,
      params: {
        search_id: searchData,
        search_value: searchTextbox,
      },
    };
    let response = await ApiRequest(search);
    console.log("response ", response);
    if (response.data.data.length > 0) {
      setMainData(response.data.data);
      setCurrentPage(response.data.current_page);
      setLastPage(response.data.last_page);
      setTotal(response.data.total);
    } else {
      setMainData([]);
      setCurrentPage("");
      setLastPage("");
      setError([response.data.data.message]);
      setTotal();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  const tempSearch=async(page = 1)=>{
    setLoading(true);
    let search = {
      "method": "get",
      "url": `student-list/search?page=${page}`,
      "params": {
        "search_id": searchData,
        "search_value": searchTextbox,
      },
    };
    let response = await ApiRequest(search);
    console.log("tempSearch ", response);
    if (response.data.data.length > 0) {
      setMainData(response.data.data);
      setCurrentPage(response.data.current_page);
      setLastPage(response.data.last_page);
      setTotal(response.data.total);
    } else {
      setMainData([]);
      setCurrentPage("");
      setLastPage("");
      setError([response.data.message]);
      setTotal();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }
  const DetailCLick =async (e) => {
    console.log(e);
    let obj={
      "method":"get",
      "url":"student-list/detail",
      "params":{
        "id":e.id
      }
    }
    let response=await ApiRequest(obj);
    if(response.data.status=="OK"){
      setDetailData(response.data.data[0])
      setLoading(false);
      setDetailModalShow(true);
    }else{
      setDetailData("");setLoading(true);setSuccess([]);setError([response.data.message]);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  const DownloadClick = async () => {
    let err = "";
    if (downloadtype == "") {
      err = CommonMessage.JSE001.replace("%s", "download type");
    }
    if (err) {
      setError([err]);
      $("html", "body").animate({ scrollTop: 0 }, 1000);
    } else {
      setError([]);
      setLoading(true);
      let obj = {
        method: "post",
        url: "/student-list/download",
        params: {
          search_id: searchData,
          search_value: searchTextbox,
          download_type: downloadtype,
        },
        type: "blob",
      };
      let response = await ApiRequest(obj);
      let type = "";
      if (downloadtype == "2") {
        type = ".pdf";
      } else {
        type = ".xlsx";
      }

      let fileName = `StudentList${type}`;
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
  
  const DeleteBtn=async(e)=>{
    setDeleteId(e);
    setConfirmShow(true);
    setContent("Are you sure you want to delete");
    setConfirmType('delete');
  }
  const EditBtn =(e)=>{
    let data ={ 
      id: e.id
    };
    localStorage.setItem('STUDENT_DATA', JSON.stringify(data) );
    history.push(`/registration`);
  }
  const deleteOK=async()=>{
    setConfirmShow(false);
    setSuccess([]);
    setError([]);
    let obj ={
      method:"delete",
      url:"/student-list/delete",
      params:{
        "student_id":deleteid
      }
    }
    let response=await ApiRequest(obj);
    let page =currentPage;
    if(response.data.status == "OK"){  
      if(maindata.length-1 ==0 ){
        page=currentPage-1;
      }
      setError([]);setSuccess([response.data.message]);window.scrollTo({top:0,left:0,behavior:'smooth'});
      tempSearch(page);
    }else{
      setLoading(false);setSuccess([]);setError([response.data.message]);window.scrollTo({top:0,left:0,behavior:'smooth'});
    }
  }
 


  return (
    <>
      <Loading start={loading} />
      <CRow>
        <CCol lg={12}>
          <CCard>
            <CCardHeader>
              <h5>Student List</h5>
              <SuccessError success={success} error={error} />
            </CCardHeader>
            <CCardBody>
              <ListForm
                dropData={dropData}
                radioData={radioData}
                SearchHandleChange={SearchHandleChange}
                searchTextbox={searchTextbox}
                search={search}
                downloadname={downloadname}
                downloadtype={downloadtype}
                RadioHandle={RadioHandle}
                DownloadClick={DownloadClick}
                searchData={searchData}
                btnSearch={btnSearch}
                searchChange={searchChange}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol lg={12}>
          <CCard>
            <CCardHeader>
              {/* <p style={{textAlign:'right',color:'green'}}>Table Row:{total} row(s)</p> */}
            </CCardHeader>
            <CCardBody style={{ paddingTop: "50px" }}>
              <Table
                currentPage={currentPage}
                lastPage={lastPage}
                setActivePage={setActivePage}
                DetailCLick={DetailCLick}
                maindata={maindata}
                DeleteBtn={DeleteBtn}
                EditBtn={EditBtn}
                total={total}
              />

              <DetailModal
                show={detailModalShow}
                closeBtn={() => setDetailModalShow(false)}
                data={detaildata}
               
              />
              <Confirmation
               show={confirmShow}
               content={content}
               type={confirmType}
               cancel={() => setConfirmShow(false)}
               deleteOK={deleteOK}
               okButton={"Yes"}
               cancelButton={"Cancel"}/>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default ListIndex;
