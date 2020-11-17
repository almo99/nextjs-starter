import React from 'react';
import Link from 'next/link';

const Courses = () => {
  const id = 1;
  return (
    <div>
      <h1>دوره ها</h1>
      <Link href="/courses/[id]" as={`/courses/${id}`}>
        <a>دوره 1</a>
      </Link>
    </div>
  );
};

export default Courses;
