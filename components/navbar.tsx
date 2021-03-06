import styles from "../styles/navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname.toString();
  return (
    <div className={styles.nav_wrapper}>
      <div className={styles.nav_container}>
        <div className={styles.main_title}>
          <p>
            <Link href="/">なつかしいポケモンずかん</Link>
          </p>
        </div>
        <div className={styles.nav_menu}>
          <ul className={styles.ul}>
            <li>
              {currentPath === "/" ||
              currentPath === "/register" ||
              currentPath === "/pokedexNonUser" ? null : (
                <Link href="/myPage">マイページ</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
