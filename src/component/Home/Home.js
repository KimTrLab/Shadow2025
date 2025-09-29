import './Home.css';
import pic2 from '../../img/logo.svg';
import Section1Card from './Section1_card';
import Header from '../header/Header';
import './Init';
import InitData from './Init';

function Home() {
  console.log('app run')
  InitData()
  return (
    <div>
      <Header />
      <div id="pic">
        <img src={pic2} alt='aaa'></img>
      </div>

      <div id="section">
        <div id="section_area">
          {/* <Section1Card title={section_data[0]} info={section_data[1]} />
          <Section1Card title={section_data1[0]} info={section_data1[1]} />
          <Section1Card title={section_data2[0]} info={section_data2[1]} /> */}
          <Section1Card />
        </div>
      </div>

    </div>
  );
}
export default Home;
