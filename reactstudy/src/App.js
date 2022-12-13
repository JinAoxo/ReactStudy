// /* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// 안쓰고 있는것에 대한 warning 메세지를 제거 해주는 방법  /* eslint-disable */ 최상단에 활성화 

function App() {

  // *. [state] 만들기 / 상단에 import 생성
  // const [first, setfirst] = useState(second); 
  
  // first : data 이름
  // setfirst : 변경을 도와주는 함수
  

  let [title1, title1Change] = useState(['리스트 정리', 'data2', 'data3']);
  // let [data, b] = useState(['data1', 'data2', 'data3']);
  // let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] ); 

  return (
    <div className="App">

      <div className="app-warp">
        <div className="list-header">
          <h1 className="title1">{ title1[0] }</h1>
        </div>
        <div className="list-wrap">
          <div className="item">
            {/* <h4>{ 제목 }</h4>
            <p>{ 내용 }</p> */}
            <h4> 제목 </h4>
            <p> 내용 </p>

            <button> 확인하기</button>
          </div>
        </div>
      </div>
      

      {/* 
      공부 일정 및 리스트 정리
      #1. 메인 컨텐츠 정리 
        - 비쥬얼 영역 정리 
            - 슬라이드 형 
              - 전체 슬라이드
              - 내부 슬라이드
              - 영상 슬라이드
              - 부분 슬라이드
              - 슬로건 영역

        - 게시판 영역 정리
          - 리스트 형 
          - 포토형 
          - 포토 슬라이드 형 
          - 카드형 
          - 스크롤 형
          
        - 
        - 
        - 

      
      */}

      {/* <div>{ data[0] }</div>
      <div>{ data[1] }</div>
      <div>{data[2]}</div>
      
      <div>{ 글제목[0] }</div>
      <div>{ 글제목[1] }</div>
      <div>{글제목[2]}</div> */}

      {/* <button onClick={() => { 글제목 }}> 수정버튼 </button> */}
      
      {/* <button onClick={() => {
        let copy = [...글제목]
        copy[0] = '여자코트 추천';
        글제목변경(copy)
      }}> 수정버튼 </button>
       */}
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
