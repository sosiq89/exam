import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import CompanyNew from "./CompanyNew";
import axios from "axios";
import {Table} from "react-bootstrap";


const CompanyEdit = () =>{
  const {state} = useLocation();
  const [name, setName] = useState(state.name);
  const [cate, setCate] = useState(state.cate);
  const [manager, setManager] = useState(state.manager);
  const [location, setLocation] = useState(state.location);

  const companyEditPost = () => {
    const companyVO = {
      companyId : state.companyId,
      name : name,
      cate : cate,
      manager : manager,
      location : location
    }

    let urlPath = '/purchase/companyEdit';
    axios.post(urlPath, companyVO)
      .then(res =>{console.log(res)});

    window.location.replace("/purchase/companyList");
  }

  return(
    <div id="newContainer">
      <Table striped bordered hover>
        <tbody>
        <tr>
          <td>업체 이름</td>
          <td>
            <input id="name" value={name}  onChange={(e) => {
              setName(e.target.value);
            }} />
          </td>
          <td>카테고리</td>
          <td><input id="cate" value={cate}  onChange={(e) => {
            setCate(e.target.value);
          }}/></td>
        </tr>
        <tr>
          <td>담당자</td>
          <td><input id="manager" value={manager}  onChange={(e) => {
            setManager(e.target.value);
          }}/></td>
          <td>지역</td>
          <td><input id="location" value={location}  onChange={(e) => {
            setLocation(e.target.value);
          }}/></td>
        </tr>
        <tr>
          <td colSpan="4" style={{textAlign : "center"}}>
            <button onClick={companyEditPost}>저장</button>
            &nbsp;&nbsp;&nbsp;
            <button>취소</button>
          </td>
        </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default CompanyEdit;
