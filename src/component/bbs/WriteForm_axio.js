import React, { useState } from "react";
import axios from "axios";
import "./WriteForm.css";
import Header from '../header/Header';

function WriteForm() {
    const [category, setCategory] = useState("major"); // 구분
    const [title, setTitle] = useState(""); // 제목
    const [content, setContent] = useState(""); // 내용
    const [files, setFiles] = useState([{ file: null, name: "" }]); // 첨부파일

    // 첨부파일 추가
    const addFileInput = () => {
        setFiles([...files, { file: null, name: "" }]);
    };

    // 파일 선택 시 상태 저장
    const handleFileChange = (e, index) => {
        const newFiles = [...files];
        newFiles[index] = {
            file: e.target.files[0],
            name: e.target.files[0] ? e.target.files[0].name : "",
        };
        setFiles(newFiles);
    };

    // 제출 처리
    const handleSubmit = async (e) => {
        e.preventDefault();   // handleSubmit에서 e.preventDefault()로 페이지 리로드 방지

        const formData = new FormData();
        // 일반 파라미터로 보내는 방식 시작  spring에서는  @ModelAttribute
        // formData.append("category", category);
        // formData.append("title", title);
        // formData.append("content", content);
        // 일반 파라미터로 보내는 방식 끝


        //json으로 보내는 방식  시작   - 크롬 개발자 보드로 안 잡힘  spring에서는  @RequestPart("data") BBSDTO bbsDTO
        const data = { "category": category, "title": title,"content":content,"userName":"kim",pass:"1234" };
        formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));
        //json 으로 보내는 방식 끝

        files.forEach((fileObj) => {
            if (fileObj.file) {
                formData.append("files", fileObj.file);
            }
        });

        try {
            const response = await axios.post(
                "http://localhost:8080/bbs/save", // 실제 서버 URL로 바꿔주세요
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.status === 200) {
                alert("글이 성공적으로 등록되었습니다!");
                // 초기화
                setTitle("");
                setContent("");
                setCategory("major");
                setFiles([{ file: null, name: "" }]);
            } else {
                alert("등록 실패: " + response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("서버와 연결할 수 없습니다.");
        }
    };

    return (
        <div>
            <Header />
            <h1>자유게시판 글작성</h1>
            <div className="write-form">
                <h2>자유게시판 글작성</h2>
                <form onSubmit={handleSubmit}>
                    {/* 구분 */}
                    <div className="form-group">
                        <div className="concept-g">
                            <label>구분</label><br />
                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="major">전공</option>
                                <option value="free">잡담</option>
                            </select>
                        </div>
                    </div>

                    {/* 제목 */}
                    <div className="form-group">
                        <label>제목</label>
                        <input
                            type="text"
                            placeholder="제목을 입력하세요"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    {/* 내용 */}
                    <div className="form-group">
                        <label>내용</label>
                        <textarea
                            placeholder="내용을 입력하세요"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>

                    {/* 첨부파일 */}
                    <div className="form-group">
                        <label>첨부파일</label>
                        <div className="file-inputs">
                            {files.map((fileObj, index) => (
                                <div key={index} className="file-item">
                                    <input
                                        type="file"
                                        onChange={(e) => handleFileChange(e, index)}
                                    />
                                    {fileObj.name && (
                                        <span className="file-name">{fileObj.name}</span>
                                    )}
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
