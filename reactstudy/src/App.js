// /* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// 안쓰고 있는것에 대한 warning 메세지를 제거 해주는 방법  /* eslint-disable */ 최상단에 활성화 

function App() {

  // *. [state] 만들기 / 상단에 import 생성
  // const [first, setfirst] = useState(second); 
  
  // first : data 이름 / setfirst : 변경을 도와주는 함수

  let [title1, title1Change] = useState(['리스트 정리', 'data2', 'data3']);
  let [title2, title2Change] = useState(['강의1', '강의2', '강의3']);
  let [text, textChange] = useState(['리스트 정리', 'data2', 'data3']);
  let [누르기, 누르기변경] = useState(0);

  // *. onClick에 넣는 방법
  function 함수() { 
    console.log(1);
  }

  return (
    <div className="App">

      <div className="app-warp">
        <div className="list-header">
          <h1 className="title1">{ title1[0] }</h1>
        </div>
        <div className="list-wrap">
          <div className="item">
            <h4>{ title2[0] }</h4>
            <p>{ text[0] }</p>
            {/* <button onClick={() => { console.log(1); }}> 🌙 확인하기 {누르기}</button> */}
            {/* <button onClick={() => { 누르기변경(1) }}> 🌙 확인하기 {누르기}</button> */}
            {/* <button className='item-btn' onClick={() => { 누르기변경(누르기+1) }}> 🌙 확인하기 {누르기}</button> */}
            <button className='item-btn' onClick={() => { 누르기변경(누르기+1) }}> 🌙 확인하기 {누르기}</button>
            {/* <button className='item-btn' onClick={() => { 누르기변경(['1', '2', '3']) }}> 🌙 확인하기 {누르기}</button> */}
            {/* <button className='item-btn' onClick={() => {
              // 누르기[0] ='1'
              // 누르기변경(누르기)
              // let copy = 누르기; (안됨)
              let copy = [...누르기];
              copy[0] = '변경된것';
              누르기변경(copy);
            }}> 🌙 확인하기 {누르기}</button> */}
          </div>

          {/* 3. 컴포넌트를 만들어 쓰는 방법 : 내부에 만들수 있고 외부에 만들어서 불러올 수 있음*/}
          {/* <div className='modal'>
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
          </div> */}

          <Modal></Modal>
          {/* <Modal/> */}
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
          - 리스트 형 (일반형)
          - 포토형 (갤러리형)
          - 포토 슬라이드 형 
          - 동영상형
          - 썸네일형
          - 아코디언 형
          - 카드형 
          - 스크롤 형
          - 요약형
          - 웹진형          
        - 게시판 상세 유형
          - 일반형
          - 갤러리
          - 답글형
          - 동영상형
          - 아코디언형
          - 정보형
          - 카트뉴스형
        - 공통 오류 안내
        - 공통 통합 검색 결과
        - 개인정보 수집 이용 안내
        - 로그인 서브형
        - 설문조사 등록형
        - 입력폼
        - 조직도
        - 캘린더 형
        - html
          - jumpto 형

      
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

function Modal() { 
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

// *. 이렇게 만들기도함, const로 만드는 경우 오류  메세지 자동 출력
// let Modal = () => {
//   return (
//     <div className='modal'>
//       <h4>제목</h4>
//       <p>날짜</p>
//       <p>상세내용</p>
//     </div>
//   )
// }

export default App;
