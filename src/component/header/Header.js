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
    console.log(e.target)
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));  // prev는 이전 함수 값을 가져와서 ...prev 얖은 복사를 하고 동적속성명[name]
    // prev가 이전 상태라고 해석하는 이유가 useState가 함수형 업데이트 특징이기 때문이다. 
    // 이전 상태를 가져와서 새로운 객체{...prev}에 저장하고 값을 갱신한다. 
    // 이전 객체의 변수값은 수정이 불가 .. react immutable 성격이므로 값이 변경되면 얕은 복사 후 값 추가하는 함수로 가능
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 간단한 유효성 검사
    if (!form.name || !form.email || !form.password) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    try {
      setLoading(true);    // 전송하는 동안 이름을 고치지 못하게 하려고 하는 듯.. 제거해도 괜찮음 
      const response = await axios.post('http://localhost:8080/api/users/register', form, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      alert("회원가입 성공!");
      console.log(response.data);

      setIsOpen(false);
      setForm({ name: '', email: '', password: '' });
    } catch (error) {
      console.error("회원가입 실패:", error.response || error.message);
      alert("회원가입 실패: " + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);  
    }  
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
      {isOpen && (
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
