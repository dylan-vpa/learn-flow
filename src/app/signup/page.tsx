import { signup } from "../../utils/supabase/actions";
import Styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";

const SignUp = () => {
  return (
    <>
      <Header />
      <main className={Styles.main}>
        <section className={Styles.signup}>
          <h1>¡Bienvenido!</h1>
          <div>
            <h2>Crea una cuenta</h2>
            <p>¡Es sencillo!,registrate para acceder a nuestros servicios</p>
          </div>
          <form className={Styles.form}>
            <label htmlFor="name">
              Nombre
              <input id="name" name="name" type="text" required />
            </label>
            <label htmlFor="email">
              Email
              <input id="email" name="email" type="email" required />
            </label>
            <label htmlFor="password">
              Contraseña
              <input id="password" name="password" type="password" required />
            </label>
            <button formAction={signup}>Sign Up</button>
            <span>
              ¿Ya tienes una cuenta? <Link href="/login"> Inicia sesion</Link>
            </span>
          </form>
        </section>
        <Image
          className={Styles.banner}
          src="/login-singup.png"
          alt=""
          width={1000}
          height={1000}
        />
      </main>
    </>
  );
};

export default SignUp;
