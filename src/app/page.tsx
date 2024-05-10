import { auth } from "@/lib/auth";
import LogoutButtonWrapper from "@/lib/auth/logout/button";

const Protected = async () => {
  const session = await auth();

  return (
    <div className="w-full items-center justify-center">
      <div>
        <p >{session?.user?.name}</p>
        <p >{session?.user?.email}</p>
      </div>

      <LogoutButtonWrapper>
        <button type="submit" className="w-40" >
          logout
        </button>
      </LogoutButtonWrapper>
    </div>
  );
};

export default Protected;
