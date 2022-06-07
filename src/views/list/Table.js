import { CButton, CImg, CRow, CPagination } from "@coreui/react";
import React from "react";
import UserData from "./UsersData";

const Table = (props) => {
  let { currentPage, lastPage, setActivePage, DetailCLick, maindata, total,DeleteBtn,EditBtn } =
    props;
  // console.log("Maindata ",maindata)
  return (
    <>
      {maindata.length > 0 && (
        <>
          <p style={{ textAlign: "right", color: "green" }}>
            Table Row:{total} row(s)
          </p>
          <div style={{ overflow: "auto" }}>
            <table className="table-list table">
              <thead>
                <tr>
                  <th style={{ width: "30px", textAlign: "center" }}>No</th>
                  <th style={{ width: "90px", textAlign: "center" }}>ID</th>
                  <th style={{ width: "150px", textAlign: "center" }}>Name</th>
                  <th style={{ width: "150px", textAlign: "center" }}>Email</th>
                  <th style={{ width: "150px", textAlign: "center" }}>
                    Career
                  </th>
                  <th style={{ width: "150px", textAlign: "center" }}>Phone</th>
                  <th
                    colSpan="3"
                    style={{ minWidth: "300px", textAlign: "center" }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {maindata.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{data.student_id}</td>
                      <td>{data.student_name}</td>
                      <td>{data.email}</td>
                      <td>{data.career_name}</td>
                      <td>{data.phone}</td>
                      <td width="100px">
                        <CButton className="btn-primary" onClick={()=>EditBtn(data)}>
                          <CImg src="/avatars/edit.png"></CImg>Edit
                        </CButton>
                      </td>
                      <td width="100px">
                        <CButton className="btn-info" onClick={()=>DetailCLick(data)}>
                          <CImg src="/avatars/file.png"></CImg>Detail
                        </CButton>
                      </td>
                      <td width="100px">
                        <CButton className="btn-danger" onClick={()=>DeleteBtn(data.id)}>
                          <CImg src="/avatars/delete.png"></CImg>Delete
                        </CButton>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {total > 10 && (
            <CRow alignHorizontal="center" className="mt-3">
              <CPagination
                activePage={currentPage}
                pages={lastPage}
                dots={false}
                arrows={false}
                firstButton="First page"
                lastButton="Last page"
                onActivePageChange={(i) => setActivePage(i)}
              ></CPagination>
            </CRow>
          )}
        </>
      )}
    </>
  );
};

export default Table;
