import Link from "next/link";
import "@/style/nav.css";
import { Cabin } from "next/font/google";

const cabin = Cabin({ subsets: ["latin-ext"], display: "swap" });

export default function Navy() {
  return (
    <main className='navbar-container'>
      <Link
        className={cabin.className}
        id='link-nav'
        href='/Caja'
        scroll={false}>
        Caja
      </Link>
      <Link
        className={cabin.className}
        id='link-nav'
        href='/Inventario'
        scroll={false}>
        Inventario
      </Link>
      <Link
        className={cabin.className}
        id='link-nav'
        href='/Facturas'
        scroll={false}>
        Facturas
      </Link>
      <Link
        className={cabin.className}
        id='link-nav'
        href='/Usuarios'
        scroll={false}>
        Usuarios
      </Link>
      <Link
        className={cabin.className}
        id='link-nav'
        href='/Logout'
        scroll={false}>
        Cerrar Sesion
      </Link>
    </main>
  );
}
