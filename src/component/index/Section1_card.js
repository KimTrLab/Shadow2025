import './Section1.css';
import { useSelector } from 'react-redux';


//function Section1Card({ title, info }) {
function Section1Card() {

    const mainSlice = useSelector(state => state.mainSlice)   //array Type
    return (
        <div>
            {/* {console.log(mainSlice.length)} */}
            {mainSlice.map((lec) => (
                //// 각 항목에 고유한 key prop을 지정해야 합니다.
                <div id="sectioncard" key={lec.title}>
                    <div>
                        <h2> {lec.title} </h2>
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