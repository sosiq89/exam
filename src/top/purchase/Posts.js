import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Posts({companyLists}){
  const navigate = useNavigate();
  let urlPath = '/purchase';

  const delCompany = (e) =>{
    urlPath += '/delCompany';
    axios.delete(urlPath,
      {params : {companyId : e.target.value}})
      .then(r => {console.log(r)});

    window.location.replace("/purchase/companyList");
  }

  const editCompany = (e) => {
    const comId = e.target.value;
    const company = companyLists.map((companyList) => {
      if(companyList.companyId == comId){
        navigate('/purchase/companyEdit',{
          state :
            {companyId : companyList.companyId,
            name : companyList.name,
            cate : companyList.cate,
            location : companyList.location,
            manager : companyList.manager
          }});
      }
    });
  }

  return(
    <tbody>
      {companyLists.map(({companyId, name, cate, manager, location}, index) => (
          <tr key={companyId}>
            <td style={{textAlign:"center"}}>
              {companyLists.length - (index)}</td>
            <td>{name}</td>
            <td>{cate}</td>
            <td>{manager}</td>
            <td>{location}</td>
            <td style={{textAlign:"center"}}>
              <button onClick={editCompany} value={companyId}>수정</button>&nbsp;&nbsp;
              <button onClick={delCompany} value={companyId}>삭제</button>
            </td>
          </tr>
        ))}
    </tbody>
  );

}

export default Posts;
