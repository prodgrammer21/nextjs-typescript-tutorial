import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Partial.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar_main}>
      <Link href="/" passHref={true}>
        <Image className={styles.logo} src="/logo.png" alt="logo" width="20px" height="20px" />
      </Link>
      <div className={styles.navbar_menu_main}>
        <Link href="/about">
          <a className="navbar-menu-item">About</a>
        </Link>
        <Link href="/users">
          <a className="navbar-menu-item">User List</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
