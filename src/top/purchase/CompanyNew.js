import React, {useState, useEffect} from "react";
import {Table} from "react-bootstrap";
import axios from "axios";


const CompanyNew = () =>{
  const [name, setName] = useState('');
  const [cate, setCate] = useState('');
  const [manager, setManager] = useState('');
  const [location, setLocation] = useState('');

  const companyPost = () => {
    const companyVO = {
      name : name,
      cate : cate,
      manager : manager,
      location : location
    }
    let urlPath = '/purchase/companyNew';
    console.log(urlPath);
    axios.post(urlPath, companyVO)
      .then(res =>{console.log(res)});
  }

  return(
    <div id="newContainer">
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>업체 이름</td>
            <td>
              <input onBlur={(e) => {
                setName(e.target.value);
              }} />
            </td>
            <td>카테고리</td>
            <td><input onBlur={(e) => {
              setCate(e.target.value);
            }}/></td>
          </tr>
          <tr>
            <td>담당자</td>
            <td><input onBlur={(e) => {
              setManager(e.target.value);
            }}/></td>
            <td>지역</td>
            <td><input onBlur={(e) => {
              setLocation(e.target.value);
            }}/></td>
          </tr>
          <tr>
            <td colSpan="4" style={{textAlign : "center"}}>
              <button onClick={companyPost}>저장</button>
              &nbsp;&nbsp;&nbsp;
              <button>취소</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default CompanyNew;
