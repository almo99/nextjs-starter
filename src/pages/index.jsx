import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>خانه</h1>
      <Link href="/courses">
        <a>دوره ها</a>
      </Link>
    </div>
  );
};

export default Home;
