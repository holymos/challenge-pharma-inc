import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../api/randomUser";

export type User = {
  id: string;
  image?: string;
  name: string;
  email: string;
  gender: string;
  birthday: string;
  phone: string;
  nacionality: string;
  address: string;
};

type UserContextData = {
  users: User[];
  isFetching: boolean;
  sortByName: () => void;
  sortByGender: () => void;
  fetchMoreUsers: () => void;
};

export const UserContext = createContext({} as UserContextData);

type UserContextProviderProps = {
  children: ReactNode;
};
export function UserContextProvider({ children }: UserContextProviderProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [isSortedAlphabetically, setIsSortedAlphabetically] = useState(false);
  const [isSortedByGender, setIsSortedByGender] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [pageCounter, setPageCounter] = useState(2);
  const [isSortedAlphabeticallyFromAToZ, setIsSortedAlphabeticallyFromAToZ] =
    useState(false);

  function sortByName() {
    if (!isSortedAlphabetically || !isSortedAlphabeticallyFromAToZ) {
      const newUsersList = users.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      });

      setUsers(newUsersList);
      setIsSortedByGender(false);
      setIsSortedAlphabetically(true);
      setIsSortedAlphabeticallyFromAToZ(true);
    }

    if (isSortedAlphabetically && isSortedAlphabeticallyFromAToZ) {
      const newUsersList = users.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
        return 0;
      });

      setUsers(newUsersList);
      setIsSortedAlphabetically(true);
      setIsSortedByGender(false);
      setIsSortedAlphabeticallyFromAToZ(false);
    }
  }

  function sortByGender() {
    if (!isSortedByGender) {
      const newUsersList = users.sort((a, b) => {
        if (a.gender.toLowerCase() < b.gender.toLowerCase()) return -1;
        if (a.gender.toLowerCase() > b.gender.toLowerCase()) return 1;
        return 0;
      });

      setUsers(newUsersList);
      setIsSortedAlphabetically(false);
      setIsSortedByGender(true);
      setIsSortedAlphabeticallyFromAToZ(false);
    }

    if (isSortedByGender) {
      const newUsersList = users.sort((a, b) => {
        if (a.gender.toLowerCase() > b.gender.toLowerCase()) return -1;
        if (a.gender.toLowerCase() < b.gender.toLowerCase()) return 1;
        return 0;
      });

      setUsers(newUsersList);
      setIsSortedAlphabetically(false);
      setIsSortedByGender(false);
      setIsSortedAlphabeticallyFromAToZ(false);
    }
  }

  function fetchMoreUsers() {
    setIsFetching(true);
    setPageCounter(pageCounter + 1);

    try {
      api
        .get("/api/", {
          params: {
            results: "50",
            seed: "foobar",
            page: pageCounter,
          },
        })
        .then((result) => {
          const userData = result.data.results.map((user: any) => ({
            id: user.login.uuid,
            image: user.picture.large,
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            gender: user.gender,
            birthday: new Date(user.dob.date).toLocaleDateString("pt-BR"),
            phone: user.phone,
            nacionality: user.nat,
            address: `${user.location.street.name}, ${user.location.street.number}. ${user.location.city}, ${user.location.state} - ${user.location.country}`,
          }));

          setUsers((oldState) => [...oldState, ...userData]);
        })
        .finally(() => setIsFetching(false));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    try {
      api
        .get("/api/", {
          params: {
            results: "50",
            seed: "foobar",
            page: "1",
          },
        })
        .then((result) => {
          const userData = result.data.results.map((user: any) => ({
            id: user.login.uuid,
            image: user.picture.large,
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            gender: user.gender,
            birthday: new Date(user.dob.date).toLocaleDateString("pt-BR"),
            phone: user.phone,
            nacionality: user.nat,
            address: `${user.location.street.name}, ${user.location.street.number}. ${user.location.city}, ${user.location.state} - ${user.location.country}`,
          }));

          setUsers(userData);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ users, sortByName, sortByGender, fetchMoreUsers, isFetching }}
    >
      {children}
    </UserContext.Provider>
  );
}
