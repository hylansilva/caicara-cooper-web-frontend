import styled from "styled-components";


export const Container = styled.div`
  background-color: var(--ceilingBrightWhite);
  border-radius: 8px;
  width: 360px;
  height: 45px;
  display: flex;
  flex-direction: row;
`;

export const Selected = styled.div`
  width: 50%;
  padding: 8px 16px;
  background-color: #fff;
  border: solid 2px #eaeaea;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Unselected = styled.div`
  width: 50%;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const IconModality = styled.img`
   width: 25px;
   height: 19px;
   margin-right: 8px;
`;

export const TextModality = styled.span`
  font-weight: bold;
  color: var(--davysGrey);
  font-size: 14px;
`;