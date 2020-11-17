import Link from 'next/link';
import style from './style.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.links}>
        <Link href="/">
          <a className={style.link}>خانه</a>
        </Link>
        <Link href="/courses">
          <a className={style.link}>دوره ها</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
