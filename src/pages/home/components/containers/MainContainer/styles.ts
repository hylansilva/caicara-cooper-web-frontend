import styled from "styled-components";

export const ButtonStyle = {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'poppins',
    color: '#FFBB00',
    fontSize:'16px',
    fontWeigth: 'bold',
    width: '9rem',
    justifyContent: 'space-between'
}

export const Banner1: React.CSSProperties = {
    height: '100dvh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: 'url(https://cooperativacaicara.vercel.app/images/flyer_1.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};
export const Banner2: React.CSSProperties = {
    height: '100dvh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: 'url(https://cooperativacaicara.vercel.app/images/flyer_2.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};
export const Banner3: React.CSSProperties = {
    height: '100dvh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: 'url(https://cooperativacaicara.vercel.app/images/flyer_3.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

export const MenuAccount = styled.div`
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 100%);   
    height: 110px;
    width: 100dvw;
    z-index: 2;
    padding: 0 32px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
`;