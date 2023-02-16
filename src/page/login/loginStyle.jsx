import styled from 'styled-components';

const Loginbox = styled.main`
  height: 1024px;
  .loginbox {
    padding: 10px 20px;
    width: 100%;
    height: 764px;
    display: flex;
    align-items: center;
    justify-content: center;
    .inputbox {
      width: 380px;
      height: 436px;
      border: 1px solid var(--checkbutton);
      border-radius: 5px;
      flex-direction: column;
      display: flex;
      align-items: center;
      .emailinput {
        margin-top: 30px;
      }
      .login {
        width: 300px;
        height: 40px;
        background-color: var(--checkbutton);
        color: #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      > input {
        width: 300px;
        height: 40px;
        padding: 10px 10px;
        border: 1px solid #dedede;
        border-radius: 5px;
        text-align: left;
        margin-top: 10px;
      }
      > span {
        margin-top: 30px;
        color: var(--checkbutton);
        font-size: var(--fontsize);
        font-weight: 600;
      }
      .kakao {
        margin-top: 60px;
        background-color: #fed600;
        border-radius: 5px;
      }
      .google {
        border-radius: 5px;
        background-color: #fff;
      }
      > a {
        margin: 10px 0px;
        width: 298px;
        height: 39px;
        text-decoration: none;
        color: black;
        font-weight: 600;
        display: flex;
        align-items: center;
        filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
        .kakaoimg {
          margin: 9px;
        }
        .googleimg {
          margin: 9px;
          background-color: #fff;
        }
        > p {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
`;
export default Loginbox;
