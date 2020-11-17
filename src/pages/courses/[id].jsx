import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Course = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>دوره {id}</h1>
      <div>
        <Link href="/courses">
          <a>بازگشت به دوره ها</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>بازگشت به خانه</a>
        </Link>
      </div>
    </div>
  );
};

export default Course;
