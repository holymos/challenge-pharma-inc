import styled, { css } from "styled-components";
import { UserImageProps } from ".";

export const Wrapper = styled.div`
  ${({ size }: Pick<UserImageProps, "size">) => css`
    width: ${size};
    height: ${size};
    background: #dfe6ed;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
  `}
`;
