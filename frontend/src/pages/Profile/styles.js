import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 0px 20px;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 5px;
      height: 52px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
        font-size: 18px;
      }
    }

    span {
      color: #df4664;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      background: rgba(255, 255, 255, 0.1);
      border: 0;
      height: 1px;
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 40px;
      align-self: flex-end;
      width: 180px;
      background: #df4664;
      font-weight: bold;
      color: #fff;
      text-align: right;
      border-radius: 5px;
      transition: background 0.5s;
      font-size: 18px;
      padding-right: 25px;

      &:hover {
        background: ${darken(0.09, '#DF4669')};
      }
    }
  }
`;
