import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #17151e;
  padding: 0 20px;
`;

export const Content = styled.div`
  height: 80px;
  margin: 0 auto;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
    }

    a {
      font-weight: bold;
      color: #fff;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 15px;

    strong {
      display: block;
      color: #fff;
      font-size: 14px;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999999;
    }
  }

  button {
    margin: 0px 0 0;
    height: 40px;
    align-self: flex-end;
    width: 80px;
    background: #df4664;
    font-weight: bold;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    transition: background 0.5s;
    font-size: 18px;

    &:hover {
      background: ${darken(0.09, '#DF4669')};
    }
  }
`;
