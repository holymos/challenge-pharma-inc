import styled from "styled-components";

export const BackdropWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #4b5c6b;
  opacity: 0.4;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;

export const OverlayWrapper = styled.div`
  position: absolute;
  width: 30rem;
  height: 18rem;
  padding: 0 2rem;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;

  & > div {
    margin-top: -6rem;
  }

  .user__info_container {
    margin-top: 2rem;
    color: #4b5c6b;

    .user__info_basic {
      margin-top: 0.5rem;

      span {
        padding-right: 1rem;

        & + span {
          padding-left: 1rem;
          border-left: 1px solid #4b5c6b;
        }
      }
    }

    .user__info_contact {
      margin-top: 1rem;
    }

    svg {
      position: absolute;
      top: 0.6rem;
      right: 0.6rem;
    }

    button {
      cursor: pointer;
      background: transparent;
      border: 0;
    }
  }
`;
