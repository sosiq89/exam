import React from "react";

const CompanyNew = () =>{
  return(
    <div id="newContainer">
      <table>
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
      </table>
    </div>
  );
}

export default CompanyNew;
