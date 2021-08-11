import styled from "styled-components";

export const Wrapper = styled.main`
  margin-top: 5rem;
  display: flex;
  justify-content: center;

  .home__content {
    max-width: 76.8rem;
    width: 100%;
    padding: 0 18.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      color: #293845;
    }

    .home__loader {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      gap: 0.6rem;

      button {
        margin-bottom: 2rem;
        width: 10rem;
        height: 2.5rem;
        border: 0;
        background-color: #c3cfd9;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
`;

export const Form = styled.form`
  width: 100%;

  .input__container {
    position: relative;
    width: 100%;
    margin: 2rem 0;

    input {
      width: 100%;
      padding: 0.6rem;
      border: 2px solid #c2ccd4;
      border-radius: 5px;

      &::placeholder {
        color: #c2ccd4;
        font-weight: bold;
      }
    }

    .input__icon {
      position: absolute;
      top: 0.6rem;
      right: 1rem;
      color: #788896;
    }
  }
`;
