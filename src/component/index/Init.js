import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { mainActions } from '../../store/Store';


//function Section1Card({ title, info }) {
function InitData() {

    
    const dispatch = useDispatch();
   

    let d1 = ["java", "Java Is the Language of Possibilities Java is powering the innovation behind our digital world. Harness this potential with Java resources for student coders, hobbyists, developers, and IT leaders."]
    let d2 = ["Oracle", "Java Is the Language of Possibilities Java is powering the innovation behind our digital world. Harness this potential with Java resources for student coders, hobbyists, developers, and IT leaders."]
    let d3 = ["Web", "Java Is the Language of Possibilities Java is powering the innovation behind our digital world. Harness this potential with Java resources for student coders, hobbyists, developers, and IT leaders."]
   
    useEffect(() => {
        dispatch(mainActions.clear());
        // 초기 상태 설정
        const initdata1 = { title: d1[0], text:d1[1] };
        dispatch(mainActions.add(initdata1));
        const initdata2 = { title: d2[0], text:d2[1] };
        dispatch(mainActions.add(initdata2));
        const initdata3 = { title: d3[0], text:d3[1] };
        dispatch(mainActions.add(initdata3));
        console.log('add');
    }, ); // 빈 배열을 두 번째 인자로 넣어줘서 최초 렌더링 때만 실행

}
export default InitData;