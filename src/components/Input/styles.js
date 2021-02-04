import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 600px;

  label {
    margin-left: 10px;
    font-size: 20px;
    line-height: 36px;
    font-weight: 400;
  }

  input {
    display: flex;
    align-content: center;
    padding: 10px;
    width: 100%;
    height: 34px;
    margin-top: 10px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 9px;
  }
`;
