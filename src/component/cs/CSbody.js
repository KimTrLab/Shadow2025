import './Cs.css';
import pic1 from '../../img/logo.svg';
import pic2 from '../../img/logo.svg';
import pic3 from '../../img/logo.svg';
import pic4 from '../../img/logo.svg';
function CSbody() {
  return (
    <div>
    <div class="container">
      <h1>tialwild</h1>
      <div class="image-grid">
        <div class="image-item-4">
          <img src={pic1} alt="그림이여" />
          <h3>자연의 고요함</h3>
          <p>안개 낀 아침 숲속의 풍경을 담은 사진입니다.</p>
        </div>
        <div class="image-item-4">
          <img src={pic2} alt="그림이여 2" />
          <h3>자연의 고요함</h3>
          <p>안개 낀 아침 숲속의 풍경을 담은 사진입니다.</p>
        </div>
        <div class="image-item-4">
          <img src={pic3} alt="그림이여 3" />
          <h3>자연의 고요함</h3>
          <p>안개 낀 아침 숲속의 풍경을 담은 사진입니다.</p>
        </div>
        <div class="image-item-4">
          <img src={pic4} alt="그림이여 4" />
          <h3>자연의 고요함</h3>
          <p>안개 낀 아침 숲속의 풍경을 담은 사진입니다.</p>
        </div>
      </div>    
    </div>
    <div class="container">
      <div class="image-grid">
        <div class="image-item-2">
          <img src={pic1} alt="그림이여" />
          <h3>자연의 고요함</h3>
          <p>안개 낀 아침 숲속의 풍경을 담은 사진입니다.</p>
        </div>
        <div class="image-item-2">
          <img src={pic2} alt="그림이여 2" />
          <h3>자연의 고요함</h3>
          <p>안개 낀 아침 숲속의 풍경을 담은 사진입니다.</p>
        </div>
      </div>    
    </div>
    </div>
  );
}

export default CSbody;
