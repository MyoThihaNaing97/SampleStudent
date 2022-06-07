import React from 'react'
import CIcon from '@coreui/icons-react';
import cifAU from '@coreui/icons';
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbRouter,
  CCard,
  CCardBody,
  CCardHeader,
  CLink,
  CCol,
  CRow,
  CImg
} from '@coreui/react'
import routes from '../../../routes'
import UserData from './UserData'
import add from './add.js'
import minus from './minus.js'


// import { PI, add } from './math'

// console.log(add(8));
// let users = [
//   { name: 'Bob', gender: 'male', },
//   { name: 'Alice', gender: 'femail' },
//   { name: 'Tom', gender: 'male' }
//   ];
// let users = [
//   { name: 'Bob', gender: 'male', age: 21 },
//   { name: 'Chit', gender: 'femail', age: 22  },
//   { name: 'Tom', gender: 'male', age: 23  },
//   { name: 'Lay', gender: 'male', age: 28  },
//   { name: 'Mya Mya', gender: 'male', age: 23  },
//   { name: 'Aye', gender: 'female', age: 23  }
// ];
// let result = users.filter(function(user) {
// return user.gender == 'male';
// });
// result;

const SubMenu = () => {
  console.log(add(8, -5));
  console.log(minus(-10, 12));
  // let result=minus(50,30);
let total=UserData.length;
  let count = 0;
  let bg = '';
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            Header
          </CCardHeader>
          <CCardBody>

            {UserData.map((item, index) => {
              if (index % 2 == 0) {
                bg = 'cyan'
              }
              else {
                bg = 'grey'
              }
              if (item.age > 18) {
                count++;
              }

              return (

                <div key={index} style={{ background: `${bg}`, padding: '20px', marginBottom: '20px' }}>
                  <div className='row' >
                    <div className='col' style={{ marginBottom: '10px' }}>
                      <CImg src={'/avatars/id-card.png'} alt="titleicon" width={28} height={28} />&nbsp;
                      Student_Id<br />
                    </div>
                    <div className='col' style={{ marginBottom: '10px' }}>
                      : {item.student_id}
                    </div>
                  </div>
                  <div className='row' >
                    <div className='col' style={{ marginBottom: '10px' }}>
                      <CImg src={'/avatars/user.png'} alt="titleicon" width={28} height={28} />&nbsp;
                      Name<br />
                    </div>
                    <div className='col' style={{ marginBottom: '10px' }}>
                      : {item.student_name}
                    </div>
                  </div>
                  <div className='row' >
                    <div className='col' style={{ marginBottom: '10px' }}>
                      <CImg src={'/avatars/email.png'} alt="titleicon" width={28} height={28} />&nbsp;
                      Email<br />
                    </div>
                    <div className='col' style={{ marginBottom: '10px' }}>
                      : {item.email}
                    </div>
                  </div>
                  <div className='row' >
                    <div className='col' style={{ marginBottom: '10px' }}>
                      <CImg src={'/avatars/career.png'} alt="titleicon" width={28} height={28} />&nbsp;
                      Career<br />
                    </div>
                    <div className='col' style={{ marginBottom: '10px' }}>
                      : {item.career}
                    </div>
                  </div>
                  <div className='row' >
                    <div className='col' style={{ marginBottom: '10px' }}>
                      <CImg src={'/avatars/phone.png'} alt="titleicon" width={28} height={28} />&nbsp;
                      Phone No <br />
                    </div>
                    <div className='col' style={{ marginBottom: '10px' }}>
                      : {item.student_id}
                    </div>
                  </div>
                  <div className='row' >
                    <div className='col' style={{ marginBottom: '10px' }}>
                      <CImg src={'/avatars/phone.png'} alt="titleicon" width={28} height={28} />&nbsp;
                      Age <br />
                    </div>
                    <div className='col' style={{ marginBottom: '10px' }}>
                      : {item.age}
                    </div>
                  </div>
                </div>
                
                
              )
            })}
            <h1>Total greater than 18 years count = {count}</h1>



            {/* 
            
             
             
              </div>      */}

            {/* {UserData.map((item,index)=>{
                return(<p></p>)
              })} */}
            {/* {UserData.map((item,index)=>{
              return (    
              // <p >No: {item.id}
              <div key={index}>
              <div className='row'>
                <div className='col'style={{maxWidth: '90px'}}>No:{item.id}</div>
                <div className='col'>Student_Id:{item.student_id}</div>
                <div className='col'> Name: {item.student_name}</div>
                <div className='col'> Email: {item.email}</div>
                <div className='col'> Career: {item.career} </div>
                <div className='col'> Phone: {item.phone}</div>
              </div>     
              </div>) 
              // </p>)
            })} */}
            {/* {UserData.map((item,index)=>{
                return(
                  <table>
                     <tr></tr> 
                  </table>
                )
              })} */}
            {/* {UserData.map((item,index) => {
              return (
                <h6 key={index} style={{color: 'red',fontWeight:'500'}}>My Name is {item.student_name}.<br></br>
                    Student Id is {item.student_id}</h6>
              )
            })} */}
            {/* <br></br>
           
            <h6>Hello World!</h6> */}
            {/* {users.map((item,index)=>{
              return(
              <table key={index}>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>
              </table>)
            })} */}

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SubMenu
