import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    flex-direction: column;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: space-between;

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

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #261F2D;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: #fff;
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: #fff;
    /* ${props => (props.available ? '#999' : '#261F2D')}; */
  }
`;
