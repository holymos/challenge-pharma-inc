import styled from "styled-components";

export const Wrapper = styled.header`
  height: 6rem;
  background: #fff;
  display: flex;
  align-items: center;

  .header__content {
    display: flex;
    justify-content: space-between;
    max-width: 116rem;
    width: 100%;
    margin: 0 auto;
    padding: 0.6rem 2.5rem;
  }

  .header__logo_container {
    display: flex;
    align-items: center;

    h2 {
      margin-left: 1rem;
      font-weight: bold;
      color: #293845;
    }
  }

  .header__logo {
    width: 3rem;
    height: 3rem;
    background: #dfe6ed;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
