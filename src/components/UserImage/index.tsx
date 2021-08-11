import { FaUser } from "react-icons/fa";
import * as S from "./style";

export type UserImageProps = {
  size: string;
  iconSize: string;
  image?: string | null;
};

export function UserImage({ size, iconSize, image = null }: UserImageProps) {
  return (
    <S.Wrapper size={size}>
      {image ? (
        <img src={image} alt="Foto do usuário" />
      ) : (
        <FaUser color="#9eadba" size={iconSize} />
      )}
    </S.Wrapper>
  );
}
