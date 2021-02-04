import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  background: #07305a;
  flex-direction: column;
  align-items: center;
`;

export const ContainerText = styled.div`
  margin: 40px auto;
  h1 {
    color: #fff;
    font-weight: 700;
    line-height: 72px;
  }
`;

export const Content = styled.div`
  margin: 0px 100px 50px 100px;
  padding: 30px 20px;
  width: 100%;
  max-width: 1200px;
  background: #eaf0f4;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  justify-items: center;
  flex-direction: column;

  @media (max-width: 1100px) {
    width: 90%;
    margin: 10px;
  } ;
`;

export const ContentHeader = styled.div`
  h1 {
    font-weight: 700;
    size: 32px;
    line-height: 42px;
    color: #000000;
  }
  h2 {
    size: 22px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: -0.015em;
  }

  @media (max-width: 1100px) {
    h1 {
      size: 28px;
      line-height: 30px;
    }

    h2 {
      size: 18px;
      line-height: 30px;
    }
  }
`;

export const ContentBody = styled.div`
  margin-top: 50px;
  display: flex;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 500px;
  height: 417px;

  div {
    position: absolute;
    left: -250px;
    top: -60px;

    img {
      width: 900px;
      height: 750px;
    }
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FormWindow = styled.div`
  flex-direction: column;
`;
