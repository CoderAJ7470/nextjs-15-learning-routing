'use client';

import { usePathname } from 'next/navigation';

const NotFound = () => {
  const pathname = usePathname();
  const productId = pathname.split('/')[2];
  const reviewId = pathname.split('/')[4];

  return (
    <>
      <h1>
        Could not find review {reviewId} for product {productId}
      </h1>
    </>
  );
};

export default NotFound;
