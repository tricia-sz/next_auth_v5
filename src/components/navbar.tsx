"user server"
import { auth, signIn,  } from "auth";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  return (
    <div>
      <Link href="/">
        Home
        <div>
          {session && session.user ? (
            //logado
            <div>
              <p>{session.user.name}</p>
            </div>
          ) : (
            //deslogado
            <form
              action={async () => {
                "user server";
                await signIn();
              }}
            >
              <button>Entrar</button>
            </form>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
