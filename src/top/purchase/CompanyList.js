import React, {useState, useEffect} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import Posts from "./Posts";
import Pagination from "./Pagination";

const CompanyList = () =>{
  const [companyLists, setLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const offset = (currentPage - 1) * pageSize;

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

  const postsData = (posts) => {
    if(posts){
      let result = posts.slice(offset, offset + pageSize);
      return result;
    }
  }

  return(
    <div id="listContainer">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>업체 이름</th>
            <th>카테고리</th>
            <th>담당자</th>
            <th>지역</th>
            <th>비고</th>
          </tr>
        </thead>
        <Posts companyLists={postsData(companyLists)}/>
        <tfoot>
          <tr>
            <td colSpan="6" style={{textAlign : "center"}}>
              <Pagination currentPage={currentPage}
                          setCurrentPage={setCurrentPage}
                          totalPosts={companyLists.length}
                          pageSize={pageSize}/>
            </td>
          </tr>
          <tr>
            <td colSpan="6" style={{textAlign : "center"}}>
              <input placeholder="업체 이름 입력"
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
