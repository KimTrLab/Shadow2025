import './Section1.css';
import { useSelector } from 'react-redux';


//function Section1Card({ title, info }) {
function Section1Card() {

    const mainSlice = useSelector(state => state.mainSlice)   //array Type
    return (
        <div>
            {/* {console.log(mainSlice.length)} */}
            {mainSlice.map((lec) => (
                //// map을 사용할 때는 각 항목에 고유한 key prop을 지정해야 합니다.
                <div id="sectioncard" key={lec.title}>
                    <div>
                        <button onClick={()=>alert(lec.title)}> {lec.title} </button>
                        {/* callback : onClick={ttt}     onClick={()=>alert(lec.title)} 
                            즉시호출(클릭버튼 트리거 전에 동작 됨) : onClick={ttt()}   onClick={alert(lec.title)} */}
                    </div>
                    <div>
                        <p> {lec.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Section1Card;