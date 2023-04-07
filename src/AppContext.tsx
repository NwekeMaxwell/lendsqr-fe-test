import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

export type User = {
  clicked: boolean;
};

export interface UserContextInterface {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const defaultState = {
  user: {
    clicked: false,
  },
  setUser: (user: User) => {},
} as UserContextInterface;

export const UserContext = createContext(defaultState);
// export const UserContext = createContext<Partial<UserContextInterface>>({});

type UserProvideProps = {
  children: ReactNode;
};

export default function UserProvider({ children }: UserProvideProps) {
  const [user, setUser] = useState<User>({
    clicked: false,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
