import './Section1.css';
import { useSelector } from 'react-redux';


//function Section1Card({ title, info }) {
function Section1Card() {

    const mainSlice = useSelector(state => state.mainSlice)   //array Type
    return (
        <div>
            {/* {console.log(mainSlice.length)} */}
            {mainSlice.map((lec) => (
                <div id="sectioncard">
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