import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 125px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #000000;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  height: 108px;
  display: flex;
  padding: 10px 30px 10px 10px;

  div {
    background: #ffffff;
    align-items: center;
    justify-content: center;
    height: 91px;
    width: 91px;
    display: flex;
  }
`;
