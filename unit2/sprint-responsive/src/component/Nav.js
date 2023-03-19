import styled from 'styled-components';
import '../App.css';

const NavContainer = styled.div`
display: flex;
justify-content: space-between;
`
const UsedContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 10px;
`
const LogoutIcon = styled.div`
width: 38px;
height: 38px;
border-radius:50%;
background-color: white;

display: flex;
justify-content: center;
align-items: center;
`


const Nav = () => {
  return (
    <div className='header'>
      <NavContainer>
        <span class="material-symbols-outlined icon">
          menu
        </span>
        <UsedContainer>
          <span class="material-symbols-outlined icon">credit_card</span>
          <span class="material-symbols-outlined icon">notifications</span>
          <LogoutIcon>
            <div className='icon bold'>Na.</div>
          </LogoutIcon>
        </UsedContainer>
      </NavContainer>
    </div>
  );
};

export default Nav;
