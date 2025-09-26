import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        {/* react에서는 css지정할 때 class대신 className을 써야 한다 */}
        <div className="box">
          <div className="boxin">
            <div><h2>Shadow_Coding</h2></div>
            <div id="header_info"> login 010 - 9407- 8767</div>
          </div>
          <div className="boxin">
            <ul>
              <li ><Link to="/" >Home</Link></li>
              <li ><Link to="/ai" >AI</Link></li>
              <li><Link to="/cs">컴퓨터과학</Link></li>
              <li><Link to="/sw">SW개발</Link></li>
              <li><Link to="/lap">연구실</Link></li>
              <li><Link to="/cloude">클라우드</Link></li>
              <li><Link to="/eleaning">이러닝</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
