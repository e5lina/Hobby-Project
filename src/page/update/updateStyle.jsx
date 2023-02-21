import styled from 'styled-components';

const UpdateBox = styled.main`
  height: 764px;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    border: 1px solid var(--checkbutton);
    display: flex;
    flex-direction: column;
    width: 650px;
    height: 600px;
    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 40px 0px;
      color: var(--checkbutton);
    }
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      select {
        border-radius: 10px;
        width: 250px;
        height: 40px;
        padding: 10px;
        outline: none;
        margin: 0px 20px;
      }
    }
    .textinbox {
      display: flex;
      flex-direction: column;
      .imgbtn {
        background-color: #fff;
        border: 1px solid black;
        width: 540px;
        height: 40px;
        margin: 20px 0px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
      }
      .btn {
        background-color: var(--checkbutton);
        color: #fff;
        border: none;
        width: 540px;
        height: 40px;
        border-radius: 5px;
        font-size: var(--fontsize);
        cursor: pointer;
      }
    }
    .titlebox {
      width: 540px;
      height: 40px;
      border: 1px solid black;
      border-radius: 10px;
      padding: 10px;
      outline: none;
      margin: 20px 0px;
    }
    .textarea {
      width: 540px;
      height: 200px;
      border-radius: 10px;
      padding: 10px;
      resize: none;
    }
  }
`;

export default UpdateBox;
