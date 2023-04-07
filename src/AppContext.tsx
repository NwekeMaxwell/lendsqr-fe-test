import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

export type User = {
  name: string;
  email: string;
};
export interface UserContextInterface {
  userData: User;
  setUserData: Dispatch<SetStateAction<User>>;
}

const defaultState = {
  userData: {
    name: "",
    email: "",
  },
  setUserData: (user: User) => {},
} as UserContextInterface;

export const UserContext = createContext(defaultState);
// export const UserContext = createContext<Partial<UserContextInterface>>({});

type UserProvideProps = {
  children: ReactNode;
};

export default function UserProvider({ children }: UserProvideProps) {
  const [userData, setUserData] = useState<User>({
    name: "",
    email: "",
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
