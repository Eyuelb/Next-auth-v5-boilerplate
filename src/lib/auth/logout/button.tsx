import { logout } from "./actions";
import { PropsWithChildren } from "react";

const LogoutButtonWrapper = async ({ children }: PropsWithChildren) => {
  return <form action={logout}>{children}</form>;
};

export default LogoutButtonWrapper;
