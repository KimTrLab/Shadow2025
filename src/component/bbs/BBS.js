import Header from '../header/Header'
import './BBS.css';
function BBS() {
  return (
    <div>
      <Header />
      <div class="container">
        <h1>자유게시판</h1>
        <div class="search-bar">
          <select>
            <option value="title">제목</option>
            <option value="author">작성자</option>
          </select>
          <input type="text" placeholder="검색어를 입력하세요" />
          <button>검색</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>조회</th>
              <th>등록일</th>
              <th>추천</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>첫 게시글입니다</td>
              <td>홍길동</td>
              <td>100</td>
              <td>2025-09-29</td>
              <td>5</td>
            </tr>
            <tr>
              <td>2</td>
              <td>두번째 글</td>
              <td>김철수</td>
              <td>45</td>
              <td>2025-09-28</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>자유롭게 글을 써보세요</td>
              <td>이영희</td>
              <td>78</td>
              <td>2025-09-27</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BBS;
