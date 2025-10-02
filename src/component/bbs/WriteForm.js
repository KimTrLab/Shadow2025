import React, { useState } from "react";
import "./WriteForm.css";
import Header from '../header/Header'

function WriteForm() {
    const [files, setFiles] = useState([{ file: null, name: "" }]); // 파일 상태

    // 첨부파일 추가
    const addFileInput = () => {
        setFiles([...files, { file: null, name: "" }]);
    };

    // 파일 선택 시 이름 저장
    // const handleFileChange = (e, index) => {
    //     const newFiles = [...files];
    //     newFiles[index] = {
    //         file: e.target.files[0],
    //         name: e.target.files[0] ? e.target.files[0].name : "",
    //     };
    //     setFiles(newFiles);
    // };
    return (
        <div>
            <Header />

            <h1>자유게시판 글작성</h1>
            <div className="write-form">
                <h2>자유게시판 글작성</h2>
                <form>
                    {/* 구분 */}
                    <div className="form-group">
                        <div className="concept-g">
                        <label>구분</label><br></br>
                        <select>
                            <option value="major">전공</option>
                            <option value="free">잡담</option>
                        </select>
                        </div>
                    </div>
                    {/* 제목 */}
                    <div className="form-group">
                        <label>제목</label>
                        <input type="text" placeholder="제목을 입력하세요" />
                    </div>

                    {/* 내용 */}
                    <div className="form-group">
                        <label>내용</label>
                        <textarea placeholder="내용을 입력하세요"></textarea>
                    </div>

                    

                    {/* 첨부파일 */}
                    <div className="form-group">
                        <label>첨부파일</label>
                        <div className="file-inputs">
                            {files.map((fileObj, index) => (
                                <div key={index} className="file-item">
                                    <input
                                        type="file"
                                        // onChange={(e) => handleFileChange(e, index)}
                                    />
                                    {/* {fileObj.name && (
                                        <span className="file-name">{fileObj.name}</span>
                                    )} */}
                                </div>
                            ))}
                            <button
                                type="button"
                                className="add-file-btn"
                                onClick={addFileInput}
                            >
                                + 추가
                            </button>
                        </div>
                    </div>

                    {/* 제출 버튼 */}
                    <div className="form-actions">
                        <button type="submit">등록</button>
                        <button type="reset">취소</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default WriteForm;
