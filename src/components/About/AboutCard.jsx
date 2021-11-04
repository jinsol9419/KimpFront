import React from 'react';
import styled from 'styled-components';
import Half from '../Layout/Half';
import CardImg1 from '../../image/CardImg1.png';
import CardImg2 from '../../image/CardImg2.png';
import Number from '../Home/Number';

function AboutCard() {
  const BREAK_POINT_MEDIUM = 768;
  const BREAK_POINT_SMALL = 576;
  const BREAK_POINT_LARGE = 992;

  const Block = styled.div`
    width: 100%;
    display: block;
    padding: 20px;
    @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
      padding: 0;
    }
  `;

  const Card = styled.section`
    position: relative;
    div {
      justify-content: space-evenly;
      // width: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    img {
      justify-content: space-evenly;
      height: 400px;
      width: 600px;
      @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
        height: 300px;
        width: 450px;
      }
      @media only screen and (max-width: ${BREAK_POINT_MEDIUM}px) {
        height: 300px;
        width: 450px;
      }
    }
  `;
  const Division = styled.div`
    display: flex;
    h2 {
      color: #fff;
    }
    p {
      color: #c9c9c9;
    }
  `;

  const Line = styled.div`
    border-left: 1px solid #fff;
    height: 40px;
    margin: 20px;
    @media only screen and (max-width: ${BREAK_POINT_LARGE}px) {
      display: none;
    }
  `;

  return (
    <Card>
      <Half>
        <Block>
          <Division>
            <Number black>1</Number>
            <div style={{paddingLeft: '30px'}}>
              <h2>안전한 정보공유</h2>
              <p>한국무역협회에서 분사한 M&A플랫폼</p>
            </div>
          </Division>
          <Line />
          <Division>
            <Number black>2</Number>
            <div style={{paddingLeft: '30px'}}>
              <h2>다양한 매물</h2>
              <p>M&A 생태계 다양한 관계자들을 포용</p>
            </div>
          </Division>
          <Line />
          <Division>
            <Number black>3</Number>
            <div style={{paddingLeft: '30px'}}>
              <h2>딱맞는 연결</h2>
              <p>최적의 전문가 및 네트워킹을 통한 선택</p>
            </div>
          </Division>
        </Block>

        <img src={CardImg1} alt="카드1" />
      </Half>

      <Half style={{paddingTop: '100px', borderBottom: '1px solid #e7e7e77e'}}>
        <img src={CardImg2} alt="카드2" />
        <div>
          <h1>
            Safe Process of M&A,
            <br />
            We will DO BEST
            <br />
            for your BUSINESS.
          </h1>
          <p>
            M&A 중개 및 사업승계 컨설팅 서비스를 제공하는 KIMP.
            <br />
            어렵기만한 M&A, KIMP가 해결해 드립니다.
            <br />
            한국무역협회 산하의 KIMP에서 안전한 M&A 바로 시작하세요. <br />
          </p>
        </div>
      </Half>
    </Card>
  );
}

export default AboutCard;
