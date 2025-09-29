import Header from '../header/Header'
import './Lap.css';
import Bootimg from '../../img/boot_icon.PNG';
import AIimge from '../../img/ai.PNG';
function Lap() {
  return (
    <div>
      <Header />
      <div class="containerLap">
        <input type="text" placeholder="관심있는 주제나 연구실 이름을 입력하세요" class="search-input" />
        <button class="btn search-btn">연구실 검색하기</button>
        <button class="btn create-btn">연구실 만들기</button>
      </div>
      <div class="containerLap">
        <div class="recommended-lab1">
          <h2>추천 연구실</h2>
          <p>여기에 추천 연구실 관련 내용이 들어갑니다.</p>
        </div>
        
        <div class="my-lab">
          <div class="participating-labs">
            <h4> 참여 중인 연구실</h4>
          </div>
          <div class="lab-header">
            <img src={Bootimg} alt="연구실 아이콘" class="lab-icon" />
            <div class="title-group" >
              <h2>AI 서버와 FullSTack</h2>
              <p class="total-posts">전체글 00건</p>
            </div>
            <button class="heart-btn" aria-label="좋아요 버튼">❤️</button>
          </div>
          <table class="lab-table">
            <tbody>
              <tr>
                <td>첫 번째 연구 주제</td>
                <td>
                  <div class="author-date">
                    <span class="author">홍길동</span>
                    <span class="date">2025-09-29</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>두 번째 연구 주제</td>
                <td>
                  <div class="author-date">
                    <span class="author">김철수</span>
                    <span class="date">2025-08-15</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="lab-header">
            <img src={AIimge} alt="연구실 아이콘" class="lab-icon" />
            <div class="title-group" >
              <h2>AI모델만들기</h2>
              <p class="total-posts">전체글 00건</p>
            </div>
            <button class="heart-btn" aria-label="좋아요 버튼">❤️</button>
          </div>
          <table class="lab-table">
            <tbody>
              <tr>
                <td>첫 번째 연구 주제</td>
                <td>
                  <div class="author-date">
                    <span class="author">홍길동</span>
                    <span class="date">2025-09-29</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>두 번째 연구 주제</td>
                <td>
                  <div class="author-date">
                    <span class="author">김철수</span>
                    <span class="date">2025-08-15</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="lab-header">
            <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="연구실 아이콘" class="lab-icon" />
            <div class="title-group" >
              <h2>React + Spring boot </h2>
              <p class="total-posts">전체글 00건</p>
            </div>
            <button class="heart-btn" aria-label="좋아요 버튼">❤️</button>
          </div>
          <table class="lab-table">
            <tbody>
              <tr>
                <td>첫 번째 연구 주제</td>
                <td>
                  <div class="author-date">
                    <span class="author">홍길동</span>
                    <span class="date">2025-09-29</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>두 번째 연구 주제</td>
                <td>
                  <div class="author-date">
                    <span class="author">김철수</span>
                    <span class="date">2025-08-15</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="lab-header">
            <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="연구실 아이콘" class="lab-icon" />
            <div class="title-group" >
              <h2>React + Spring boot </h2>
              <p class="total-posts">전체글 00건</p>
            </div>
            <button class="heart-btn" aria-label="좋아요 버튼">❤️</button>
          </div>
          <table class="lab-table">
            <tbody>
              <tr>
                <td>첫 번째 연구 주제</td>
                <td>
                  <div class="author-date">
                    <span class="author">홍길동</span>
                    <span class="date">2025-09-29</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>두 번째 연구 주제</td>
                <td>
                  <div class="author-date">
                    <span class="author">김철수</span>
                    <span class="date">2025-08-15</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="recommended-lab2">
          <h2>추천 연구실</h2>
          <p>여기에 추천 연구실 관련 내용이 들어갑니다.</p>
        </div>
      </div>
    </div>
  );
}
export default Lap;
