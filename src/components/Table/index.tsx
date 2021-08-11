import { Link } from "react-router-dom";

import { RiArrowUpDownFill } from "react-icons/ri";
import * as S from "./style";
import { useUsers } from "../../hooks/useUser";

type TableProps = {
  searchTerm?: string;
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

export function Table({ searchTerm = "" }: TableProps) {
  const { users, sortByName, sortByGender } = useUsers();

  return (
    <S.Table>
      <thead>
        <tr>
          <th>
            <div>
              <span>Name</span>
              <button onClick={sortByName}>
                <RiArrowUpDownFill />
              </button>
            </div>
          </th>
          <th>
            <div>
              <span>Gender</span>
              <button onClick={sortByGender}>
                <RiArrowUpDownFill />
              </button>
            </div>
          </th>
          <th>Birth</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users
          .filter((user) => {
            if (searchTerm === "") return user;

            return user.name
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase());
          })
          .map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.birthday}</td>
              <td>
                <Link to={`user/${user.id}`} onClick={scrollToTop}>
                  Visualizar
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </S.Table>
  );
}
