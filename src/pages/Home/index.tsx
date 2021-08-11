import { RiUserSearchFill } from "react-icons/ri";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Table } from "../../components/Table";

import * as S from "./style";
import { useState } from "react";
import { useUsers } from "../../hooks/useUser";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchMoreUsers, isFetching } = useUsers();

  return (
    <S.Wrapper>
      <div className="home__content">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dolore
          doloremque, maiores commodi iste beatae veniam deleniti velit
          molestiae.
        </p>

        <S.Form>
          <div className="input__container">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <RiUserSearchFill className="input__icon" />
          </div>
        </S.Form>

        <Table searchTerm={searchTerm} />

        <div className="home__loader">
          {!isFetching ? (
            <button onClick={fetchMoreUsers}>Load more</button>
          ) : (
            <>
              <AiOutlineLoading3Quarters />
              <span>Loading more...</span>
            </>
          )}
        </div>
      </div>
    </S.Wrapper>
  );
}
