import Render from '../component/Render';
import styled from 'styled-components';
import context1 from '../assets/contents1.png'
import context2 from '../assets/contents2.png'
import context3 from '../assets/contents3.png'
import context4 from '../assets/contents4.png'
import context5 from '../assets/contents5.png'
import context6 from '../assets/contents6.png'
import context7 from '../assets/contents7.png'
import context8 from '../assets/contents8.png'
// 다음부터는 그냥 css 쓸 것
const Content = styled.article`
height: 95%;
width: 95%;
background-repeat: no-repeat;
object-fit: contain;
`
const Content0 = styled(Content)`
display: flex;
flex-direction:column;
`
const WeatherCon = styled.div`
height: 45%;
width: 90%;
background-color: lightgray;
margin:2%
`
const Content1 = styled(Content)`
background-image : url(${context1});
`
const Content2 = styled(Content)`
background-image: url(${context2});
`
const Content3 = styled(Content)`
background-image: url(${context3});
`
const Content4 = styled(Content)`
background-image: url(${context4});
`
const Content5 = styled(Content)`
background-image: url(${context5});
`
const Content6 = styled(Content)`
background-image: url(${context6});
`
const Content7 = styled(Content)`
background-image: url(${context7});
`
const Content8 = styled(Content)`
background-image: url(${context8});
`

const EventButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 230px;
height: 50px;
background-color: white;
margin-top : 20px;
border-radius: 50px;
`

const Main = () => {
  return (
    <div>
      <div className='justify-content-center'>
        <div className='grid '>
          <div className='con' style={{ height: '1200px' }}>
            <div className='info grow1 column' >
              <Content0 className='justify-content-center'>
                <WeatherCon></WeatherCon>
                <WeatherCon></WeatherCon>
              </Content0>
            </div>
            <div className='info grow1'><Content4></Content4></div>
            <div className='info grow1-5'><Content2></Content2></div>
            <div className='info grow1-5'><Content3></Content3></div>
          </div>
          <div className='con' style={{ height: '900px' }}>
            <div className='info grow1-5' ><Content5></Content5></div>
            <div className='info grow3'><Content6></Content6></div>

          </div>
          <div className='con' style={{ height: '1200px' }}>
            <div className='info grow2'><Content1></Content1></div>
            <div className='info grow1'><Content7></Content7></div>
            <div className='info grow1'><Content8></Content8></div>
          </div>
        </div>
      </div>
      <div className='justify-content-center'>
        <EventButton>
          <span class="material-symbols-outlined">sports_score</span>
          이벤트 모아보기  <span class="material-symbols-outlined">arrow_forward_ios</span>

        </EventButton>
      </div>
    </div>
  );
};

export default Main;