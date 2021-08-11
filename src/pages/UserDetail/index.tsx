import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useParams, useHistory } from "react-router";

import { AiOutlineClose } from "react-icons/ai";
import { UserImage } from "../../components/UserImage";
import * as S from "./style";
import { User } from "../../context/userContext";
import { useUsers } from "../../hooks/useUser";

type Params = {
  id: string;
};

export function Backdrop() {
  const history = useHistory();
  return <S.BackdropWrapper onClick={() => history.push("/")} />;
}

export function Overlay() {
  const { id } = useParams<Params>();
  const { users } = useUsers();
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const selectedUser = users.find((user) => user.id === id);
    selectedUser && setUser(selectedUser);
  }, [users, id]);

  const history = useHistory();

  return (
    <S.OverlayWrapper>
      <UserImage size="7rem" iconSize="2.5rem" image={user.image} />
      <div className="user__info_container">
        <h3>{user.name}</h3>

        <div className="user__info_basic">
          <span>{user.gender}</span>
          <span>{user.nacionality}</span>
        </div>

        <div className="user__info_contact">
          <h3>{user.email}</h3>
          <p>{user.phone}</p>
          <p>{user.birthday}</p>
          <p>{user.address}</p>
        </div>

        <button onClick={() => history.push("/")}>
          <AiOutlineClose />
        </button>
      </div>
    </S.OverlayWrapper>
  );
}

export function UserDetailModal() {
  return (
    <>
      {createPortal(<Backdrop />, document.getElementById("backdrop-root")!)}
      {createPortal(<Overlay />, document.getElementById("overlay-root")!)}
    </>
  );
}
