import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
border-top: 1px solid lightgray;
padding-top: 30px;
margin-top: 50px;
padding-bottom: 50px;
`

const Footer = () => {
  return (
    <Container className='justify-content-center'>
      <div className='column'>
        <div >로그인  |  전체서비스  |  PC버전</div>
        <div >이용약관  |  개인정보처리방침  |  고객센터</div>
        <div>NAVER</div>
      </div>
    </Container>
  )
};

export default Footer;
