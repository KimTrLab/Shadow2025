import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { mainActions } from '../../store/MainSlice';
import axios from 'axios';

//function Section1Card({ title, info }) {
function InitData() {
    const dispatch = useDispatch();
    // let d1 = ["java", "Java Is the Language of Possibilities Java is powering the innovation behind our digital world. Harness this potential with Java resources for student coders, hobbyists, developers, and IT leaders."]
    // let d2 = ["Oracle", "Java Is the Language of Possibilities Java is powering the innovation behind our digital world. Harness this potential with Java resources for student coders, hobbyists, developers, and IT leaders."]
    // let d3 = ["Web", "Java Is the Language of Possibilities Java is powering the innovation behind our digital world. Harness this potential with Java resources for student coders, hobbyists, developers, and IT leaders."]

    useEffect(() => {
        dispatch(mainActions.clear());
        axios.get('http://192.168.1.2:8080/aa')
            .then(response => {
                //   setData(response.data); // 서버에서 받은 데이터를 상태에 저장
                const data = response.data;

                // 객체의 값만 배열로 변환
                const valuesArray = Object.values(data);  // [1, 2, 3]
                console.log(valuesArray)
                // 객체의 키만 배열로 변환
                // const keysArray = Object.keys(obj);  // ['a', 'b', 'c']
                // 키-값 쌍을 배열로 변환
                const entriesArray = Object.entries(data);  // [['a', 1], ['b', 2], ['c', 3]]
                //console.log(typeof (entriesArray))
                // Object.entries(entriesArray).map(([key, value]) => {
                entriesArray.map(([key, value]) => {
                    // console.log(key);   // 키
                    // console.log(value); // 값
                    const initdata1 = { title: key, text: value };
                    dispatch(mainActions.add(initdata1));
                    return 0   //map은 항상 리턴해 줘야 함
                });

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        // 초기 상태 설정
        // const initdata1 = { title: d1[0], text: d1[1] };
        // dispatch(mainActions.add(initdata1));
        // const initdata2 = { title: d2[0], text: d2[1] };
        // dispatch(mainActions.add(initdata2));
        // const initdata3 = { title: d3[0], text: d3[1] };
        // dispatch(mainActions.add(initdata3));
        // console.log('add');
    },); // 빈 배열을 두 번째 인자로 넣어줘서 최초 렌더링 때만 실행

}
export default InitData;