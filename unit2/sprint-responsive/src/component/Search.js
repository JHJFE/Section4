import styled from "styled-components";
import React from "react";

const BarContainer = styled.div`
width: 508px;
height: 60px;
background-color:white;
border: 1px solid #4fd779;
border-radius: 52px;
padding: 15px;

display: flex;
align-items: center;
justify-content: space-between;
`

const Nicon = styled.div`
color: #4fd779;
font-size: 33px;
font-weight: bolder;
`
const SearchInput = styled.input`

width: calc(400/528*100%);
height: 50px;
font-size: 22px;
border: none;
`
const SearchBar = () =>{
    return (
        <div className="justify-content-center">
            <BarContainer className="bar-container">
                <Nicon>N</Nicon>
                <SearchInput placeholder="검색어를 입력해주세요."/>
                <span class="material-symbols-outlined mic">mic</span>
            </BarContainer>
        </div>
    )
}
export default SearchBar