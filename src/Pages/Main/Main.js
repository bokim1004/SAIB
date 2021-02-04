import React from "react";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import main1 from "../../Images/sectionImg1.png";
import main2 from "../../Images/sectionImg2.png";
import main3 from "../../Images/sectionImg3.png";
import main4 from "../../Images/sectionImg4.png";
import midImg1 from "../../Images/midImg1.png";
import responsive1 from "../../Images/responsive1.png";
import responsive2 from "../../Images/responsive2.png";
import dot from "../../Images/dot.png";
import rating1 from "../../Images/rating1.png";
import rating2 from "../../Images/rating2.png";
import rating3 from "../../Images/rating3.png";
import review from "../../Images/review.png";
import dot2 from "../../Images/dot2.png";
import girls from "../../Images/girls.png";
import awards from "../../Images/awards.png";
import instagram from "../../Images/instagram.png";
import {AiOutlineArrowRight} from "react-icons/ai";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <Nav />
      <body>
        <div className="mainImg"></div>
        <div className="section1">
          <h2>OUR PRODUCTS</h2>
          <div className="innerBox">
            <ul>
              <li>
                <img src={main1} alt="mainImg" />
                <p className="line">파우치에 휴대하기 좋은</p>
                <p className="product">세이브 프리미엄 콘돔 (3pcs)</p>
                <p className="price"> 7,900원</p>
              </li>
              <li>
                <img src={main2} alt="mainImg" />
                <p className="line">천연유래성분으로 순한</p>
                <p className="product">세이브 네츄럴 포밍 여성 청결제</p>
                <div className="saleBox">
                  <span className="salePrice"> 29,500원</span>
                  <span className="sale">⟶ 최대 25% 할인 중</span>
                </div>
              </li>
              <li>
                <img src={main3} alt="mainImg" />
                <p className="line">더 얇고 안전한 세이브 신제품</p>
                <p className="product">세이브 프리미엄 콘돔 리얼필(6pcs)</p>
                <p className="price"> 12,900원</p>
              </li>
            </ul>
            <div className="responsiveImg">
              <div>
                <img src={main3} alt="mainImg" />
                <p className="line">더 얇고 안전한 세이브 신제품</p>
                <p className="product">세이브 프리미엄 콘돔 리얼필(6pcs)</p>
                <p className="price"> 12,900원</p>
              </div>
              <div>
                <img src={main4} alt="mainImg" />
                <p className="line">집에 두고 쓰기 좋은</p>
                <p className="product">프리미엄 콘돔 대용량(24pcs)</p>
                <div className="saleBox">
                  <span className="salePrice"> 49,500원</span>
                  <span className="sale">⟶ 42,100</span>
                </div>
              </div>
            </div>
          </div>
          <button>SHOP 바로가기</button>
        </div>
        <div className="section2">
          <h2>OUR PROMISE</h2>
          <img src={midImg1} className="midImg" alt="midImg" />
          <div className="phoneImg">
            <img src={responsive1} className="phoneImg1" alt="midImg" />
            <img src={responsive2} className="phoneImg2" alt="midImg" />
          </div>
          <img src={dot} className="dot" alt="dot" />
          <img src={review} className="review" alt="review" />
          <ul>
            <li>
              <img src={rating1} alt="rating" />
            </li>
            <li>
              <img src={rating2} alt="rating" />
            </li>
            <li>
              <img src={rating3} alt="rating" />
            </li>
          </ul>
          <img src={dot2} className="dot2" alt="dot" />
        </div>
        <div className="section3">
          <div className="head">
            <h2>CAMPAIGN</h2>
            <AiOutlineArrowRight className="arrow" size="35" color="#5d6078" />
          </div>
          <div className="inner">
            <img src={girls} alt="girls" />
            <div className="textBox">
              <p className="title">Female empowerment </p>
              <p className="describe">
                세이브는 판매수익의 10%를 성 평등과 여성 권리 증진을 위한 다양한
                캠페인에 사용합니다.
              </p>
            </div>
          </div>
        </div>
        <div className="section4">
          <div className="innerBox">
            <div className="first">
              <p className="title">AWARDS</p>
              <AiOutlineArrowRight
                className="arrow"
                size="25"
                color="#5d6078"
              />
              <p className="describe">세이브앤코 수상내역</p>
            </div>
            <div className="second">
              <p className="title">PRESS</p>
              <AiOutlineArrowRight
                className="arrow"
                size="25"
                color="#5d6078"
              />
              <p className="describe">세이브앤코 언론보도</p>
            </div>
            <div className="third">
              <p className="title">STOCKIST</p>
              <AiOutlineArrowRight
                className="arrow"
                size="25"
                color="#5d6078"
              />
              <p className="describe">오프라인 판매처</p>
            </div>
          </div>
        </div>
        <div className="section5">
          <img src={awards} alt="awards" />
        </div>
        <div className="section6">
          <h2>instagram-@saibnco</h2>
          <img src={instagram} alt="instaImg" />
        </div>
      </body>
      <Footer />
    </>
  );
};

export default Main;
