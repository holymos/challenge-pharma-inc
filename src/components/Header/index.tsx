import { BsFillImageFill } from "react-icons/bs";
import { UserImage } from "../UserImage";

import * as S from "./styles";

export function Header() {
  return (
    <S.Wrapper>
      <div className="header__content">
        <div className="header__logo_container">
          <div className="header__logo">
            <BsFillImageFill color="#9eadba" />
          </div>
          <h2>Pharma Inc.</h2>
        </div>

        <UserImage size="4rem" iconSize="1rem" />
      </div>
    </S.Wrapper>
  );
}
