import React, {useState, useEffect} from "react";
import axios from "axios";
import {Pagination} from "react-bootstrap";
import {Table} from "react-bootstrap";

const CompanyList = () =>{
  const [companyLists, setLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const urlPath = '/purchase/companyList';
  let [searchWord, setWord] = useState("");


  useEffect(() => {
    companySearch();
  }, []);

  const companySearch = () => {

    const fetchLists = async () => {
      let res = await axios.get(urlPath,
        {params : {searchWord : searchWord}});

      setLists(res.data);
    }

    fetchLists().then(r => {console.log(r)});
  }

  return(
    <div id="listContainer">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>순번</th>
            <th>업체 이름</th>
            <th>카테고리</th>
            <th>담당자</th>
            <th>지역</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" style={{textAlign : "center"}}>
              <input placeholder="검색어 입력"
              onBlur={(e) => {setWord(e.target.value)}}/>
              &nbsp;&nbsp;&nbsp;
              <button onClick={companySearch}>검색</button>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}

export default CompanyList;
