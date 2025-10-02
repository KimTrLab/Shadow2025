import './Header.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    console.log(e.target)   //<input type="text" value="ㅁㅁ" name="name">
    const { name, value, type } = e.target;
    console.log(name, value, type)
    setForm(prev => ({ ...prev, [name]: value }));  // prev는 이전 함수 값을 가져와서 ...prev 얖은 복사를 하고 동적속성명[name]
    // prev가 이전 상태라고 해석하는 이유가 useState가 함수형 업데이트 특징이기 때문이다. 
    // 이전 상태를 가져와서 새로운 객체{...prev}에 저장하고 값을 갱신한다. 
    // 이전 객체의 변수값은 수정이 불가 .. react immutable 성격이므로 값이 변경되면 얕은 복사 후 값 추가하는 함수로 가능
  };

  const handleSubmit = async (e) => {  //await는 async 키워드 필요, 비동기를 만들어 주는 함수 
    e.preventDefault();
    // 간단한 유효성 검사
    if (!form.name || !form.email || !form.password) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    // try {
    //   setLoading(true);    // 전송하는 동안 이름을 고치지 못하게 하려고 하는 듯.. 제거해도 괜찮음 
    // awaitsms promise가 처리 될때까지 기다린다. async 함수에서만 사용가능
    // axios.post() 서버에게 post요청, 응답이 올 때까지 promise를 반환인데 await를 붙히면 promise가 완료될때까지 실행을 멈추고 결과를 response에 할당
    // 쉽게 말해 서버의 응답을 기다린다는 의미야.
    // 만약 없다면  response는 promise객체 그 자체라서 서버에서 응답이 오기전에 바로 다음을 실행한다.
    // Promise는 비동기 처리가 성공(fulfilled) 또는 실패(rejected) 등의 상태 정보를 갖게됩니다.
    //   const response = await axios.post('http://localhost:8080/api/users/register', form, {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });

    //   alert("회원가입 성공!");
    //   console.log(response.data);

    //   setIsOpen(false);
    //   setForm({ name: '', email: '', password: '' });
    // } catch (error) {
    //   console.error("회원가입 실패:", error.response || error.message);
    //   alert("회원가입 실패: " + (error.response?.data?.message || error.message));
    // } finally {
    //   setLoading(false);  
    // }  

    // promise 방식으로 위에 코를 수정 함
    setLoading(true);
    await axios.post('http://localhost:8080/api/users/register', JSON.stringify(form), {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'        
      }
    })
      .then(response => {
        alert("회원가입 성공!");
        console.log(response.data);

        setIsOpen(false);
        setForm({ name: '', email: '', password: '' });
      })
      .catch(error => {
        console.error("회원가입 실패:", error.response || error.message);
        //alert("회원가입 실패: " + (error.response?.data?.message || error.message));
        const respon = error.response.data;
        console.log(respon)
        alert("회원가입 실패: " + (respon.error || respon.password || respon.name));
      }).finally(() => {
        setLoading(false);
      });


  };

  return (
    <div>
      <header>
        {/* react에서는 css지정할 때 class대신 className을 써야 한다 */}
        <div className="box">
          <div className="boxin">
            <div><h2>Shadow_Coding</h2></div>
            <div id="header_info"> <span onClick={() => setIsOpen(true)}>회원가입</span> 010 - 9407- 8767</div>
          </div>
          <div className="boxin">
            <ul>
              <li ><Link to="/" >Home</Link></li>
              <li ><Link to="/" >AI</Link></li>
              <li><Link to="/cs">컴퓨터과학</Link></li>
              <li><Link to="/">SW개발</Link></li>
              <li><Link to="/lap">연구실</Link></li>
              <li><Link to="/">클라우드</Link></li>
              <li><Link to="/">이러닝</Link></li>
              <li><Link to="/bbs">자유게시판</Link></li>
            </ul>
          </div>

        </div>
      </header>
      {isOpen && (  // jsx에서 {}자바스크립트 표현식을 평가해서 그 결과를 랜더링에 넣겠다. isOpen이 true이면 랜더링 됨
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>이름</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>
              <div>
                <label>이메일</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>비밀번호</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <div className="modal-buttons">
                <button type="submit">가입하기</button>
                <button type="button" onClick={() => setIsOpen(false)}>취소</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default Header;
