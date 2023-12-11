import styled from "styled-components";

export const Section = styled.section`
    background-color: #FFBB00;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 128px 0;
`;

export const Card = {
    width: 410,
    height: 286,
    borderRadius: 20,
    fontFamily: 'sans-serif',
    boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.15)',
    icon: {
        backgroundColor: '#FFBB00',
        margin: '0 0 16px'
    },
    Title:{
        fontSize: 27,
        margin: '0 0 16px'
    },
    text:{
        fontSize: 18,
        margin: '0 0 16px'
    },
    Button: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'normal',
        color: '#076A94'
    }

}