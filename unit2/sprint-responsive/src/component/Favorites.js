import React from "react";
import styled from "styled-components";

const FavoritesContainer = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 500px;
    padding-top: 80px;
    padding-bottom: 80px;
`
const Meue = styled.div`
`
const Favorites = () => {
    let store = [{ id: 0, src: '/menu1.png' }, { id: 1, src: '/menu2.png' }, { id: 2, src: '/menu3.png' }, { id: 3, src: '/menu4.png' }, { id: 4, src: '/menu5.png' }, { id: 5, src: '/menu6.png' }, { id: 6, src: '/menu7.png' }, { id: 7, src: '/menu8.png' }]
    return (
        <div className="justify-content-center">
            <FavoritesContainer >
                {store.map((e) => {
                    return <img className="favorite-icon" key={e.id} src={e.src} alt='이미지'></img>
                })}
            </FavoritesContainer>
        </div>
    )
}

export default Favorites