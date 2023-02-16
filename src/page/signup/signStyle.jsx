import styled from 'styled-components';

const Signbox = styled.main`
  height: 1024px;
  .signbox {
    height: 764px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .box {
      border: 1px solid var(--checkbutton);
      padding: 20px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      > div {
        width: 300px;
        height: 40px;
        border: 1px solid #dedede;
        border-radius: 5px;
        display: flex;
        align-items: center;
        margin: 10px 0px;
        .email {
          margin: 13px;
        }
        > img {
          margin: 10px;
        }
      }
      > span {
        margin-bottom: 20px;
        color: var(--checkbutton);
        font-weight: 600;
      }
      div > input {
        width: 100%;
        border: none;
        outline: none;
      }
      .signupbtn {
        margin-top: 20px;
        margin-bottom: 10px;
        width: 300px;
        height: 40px;
        border-radius: 5px;
        text-decoration: none;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--fontsize);
        background-color: var(--checkbutton);
        color: white;
      }
    }
  }
`;

export default Signbox;
