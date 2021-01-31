import React from 'react';
import './Main.scss';
const Main = () => {
    return (
      <>
        <nav className="navbar">
          <div className="navBox">
            <img className="title" src={titleImg} alt="title" />
            <div className="border"></div>
            <ul>
              <li>클래스</li>
              <li>지식리더</li>
              <li>질문답변</li>
              <li>Coding-X 소개</li>
            </ul>
          </div>
          <img className="user" src={userImg} alt="user" />
        </nav>
        <body>
          <div className="classBox">
            <img src={notebookImg} alt="notebook" />
            <p className="name">파이썬 기초 (클래스명)</p>
            <p className="description">
              개발을 모르는 입문자들이 파이썬을 쉽고 빠르고 재밌게 배울 수
              있습니다.
            </p>
            <p className="date">최근 업데이트 날짜 2021.1.1</p>
          </div>
          <div className="submitBox">
            <div className="first">
              <p>아래는 미리보기입니다.</p>
              <p>제안을 하시면 내부에서 검토후 연락드립니다.</p>
              <div className="dot">
                <AiOutlineMore size="30px" color="#4F5783" />
              </div>
            </div>
            <div className="second">
              <span>초급</span>
              <span>채널</span>
              <span>수강가능</span>
              <p className="smallTitle">python,C#</p>
              <p className="bigTitle"> 파이썬 기초(클래스명)</p>
            </div>
            <div className="third">
              <div className="nickName">
                <img src={userImg} alt="user" />
                <span>닉네임</span>
              </div>
              <div className="contentList">
                <div>
                  <BiDetail size="20px" color="#4F5783" />
                </div>
                <span>레슨 N개·무제한 수강 </span>
              </div>
              <div className="contentList">
                <div>
                  <BiDetail size="20px" color="#4F5783" />
                </div>
                <span>동영상 7개 몇시간, 문서 3개, PDF 5개, 자료 2개</span>
              </div>
              <div className="contentList">
                <div>
                  <AiTwotoneStar size="20px" color="#FFE356" />
                </div>
                <span>0.0 /0명·수강생 0명 </span>
              </div>
            </div>
            <div className="fourth">
              <p>아직 가격이 설정되지 않았습니다.</p>
              <p>가격은 제안후 담당자와 조율이 가능합니다.</p>
            </div>
            <button>최종 제출하기</button>
            <div className="lastBox">
              <div className="heart">
                <AiOutlineHeart size="20px" color="#4F5783" />
                <span>312</span>
              </div>
              <div className="sharing">
                <span>공유하기</span>
                <BiShareAlt size="20px" color="#4F5783" />
              </div>
            </div>
          </div>
          <div className="introBar">
            <ul>
              <li className="introduce">소개</li>
              <li>커리큘럼</li>
              <li>강사프로필</li>
              <li>리뷰</li>
              <li>수강현황</li>
            </ul>
          </div>
          <div className="mainBox">
            <div className="smallBox">
              <p className="head">선수지식</p>
              <p className="content">1.알고리즘</p>
              <p className="content">2.자가학습능력(구글링)</p>
            </div>
            <div className="smallBox">
              <p className="head">얻어갈 수 있는 것</p>
              <p className="content">1.실무 노하우</p>
              <p className="content">2.호호</p>
            </div>
            <div className="smallBox">
              <p className="head">얻어갈 수 있는 사람</p>
              <p className="content">1.실무능력이 부족한 사람</p>
            </div>
            <div className="middleBox">
              <p className="head">클래스 소개</p>
              <p className="content">
                여러분이 데이터 사이언티스트라는 직업을 택하지 않더라도, 데이터에
                대한 이해와 데이터를 다룰 수 있는 능력은 엄청난 경쟁력이 될
                것입니다. 데이터 사이언스는 데이터를 통해 가치를 더할 수 있는 일이
                무엇인지 찾아내고, 데이터를 이용하여 중요한 문제를 해결하는
                분야입니다.
              </p>
            </div>
            <img src={notebookImg} alt="notebook" />
            <div className="lastBox">
              <p>
                데이터분야는 개발 뿐만 아니라 기획,마케팅,HR등등 이제 어느
                곳에서나 꼭 필요하기 때문에 점점 수요가 늘고 있습니다. 코드잇과
                함께 데이터 사이언스의 A-Z까지의 전과정을 배워보세요. 수학, 통계
                지식이 전혀 없더라도 괜찮습니다.
              </p>
              <p>
                이 코스는 여러분을 멋진 데이터 사이언스의 세계로 이끌 것입니다.
              </p>
            </div>
          </div>
        </body>
      </>
    );
  };
  
  export default Main;