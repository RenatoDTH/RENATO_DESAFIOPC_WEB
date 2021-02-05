import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 600px;

  p {
    margin-left: 10px;
    font-size: 20px;
    line-height: 36px;
    font-weight: 400;
  }

  textarea {
    padding: 10px;
    width: 100%;
    height: 150px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 9px;
    resize: vertical;
    padding: 10px;
    font-size: 18px;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;
