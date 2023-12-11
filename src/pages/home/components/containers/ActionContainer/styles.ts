import styled from "styled-components";

export const Section = styled.section`
    background-color: rgb(252, 114, 3);
    display: flex;
    height: 90px;
    justify-content: center;
    align-items: center;
    position: sticky;
    z-index: 3;
    bottom: -1vh;
`;


export const Title = styled.h1`
    font-size: 32px;
    margin-right: 32px;
    color: #fff;
`;


export const Button = {
    backgroundColor: '#fff',
    color: '#ffbb00',
    fontSize: 18,
    fontWeight: 'bold',
    height: '45px'

}