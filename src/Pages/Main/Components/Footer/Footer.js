import React from "react";
import socialM from "../../../../Images/socialM.png";
import circle from "../../../../Images/circle.png";
import promotion from "../../../../Images/promotion.png";
import {AiOutlineUpCircle} from "react-icons/ai";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="inner">
          <div className="firstBox">
            <p className="firstList">
              <span className="name">(주) 세이브앤코 |</span>
              <span className="company">
                대표 박지원 | 사업자 등록번호 165-87-00778 | 통신판매업 제
                2021-서울동작-0147호
              </span>
            </p>
            <p className="secondList">
              <span>
                hello@saibnco.com | TEL 02-6204-1023 | 서울 동작구 노량진로
                10,2층 E-01
              </span>
            </p>
            <p>Copyrightⓒ 세이브앤코 All Rights Reserved</p>
          </div>
          <div className="secondBox">
            <p className="first">
              <span>이용약관 | 개인정보취급방침 | 가이드</span>
            </p>
            <p className="second">
              <span>
                고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서
                가입한 PG사의 구매안전서비스를 이용하실 수 있습니다.| KG이니시스
                에스크로(서비스가입사실확인)
              </span>
            </p>
          </div>
        </div>
        <img src={socialM} alt="socialMedia" />
      </div>
      <div className="promotion">
        <img src={promotion} className="promote" alt="promote" />
        <img src={circle} className="circle" alt="circle" />
        <AiOutlineUpCircle className="arrow" size="65" color="#e8b0bf" />
      </div>
    </footer>
  );
};

export default Footer;
