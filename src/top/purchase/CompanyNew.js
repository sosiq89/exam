import React from "react";
import {Container} from "react-bootstrap";
import {Table} from "react-bootstrap";

const CompanyNew = () =>{
  return(
    <div id="newContainer">
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>업체 이름</td>
            <td><input /></td>
            <td>카테고리</td>
            <td><input /></td>
          </tr>
          <tr>
            <td>담당자</td>
            <td><input /></td>
            <td>지역</td>
            <td><input /></td>
          </tr>
          <tr>
            <td colSpan="4" style={{textAlign : "center"}}>
              <button>저장</button>
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
