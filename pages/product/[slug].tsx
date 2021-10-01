import { useRouter } from 'next/dist/client/router'
import React from 'react'
import data from '../../utils/data';

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find(product => product.slug === slug);

  if(!product) {
    return <h4 className="text-center m-5">Product Not Found</h4>
  }

  return (
    <>
      <h1>{product.name}</h1>
    </>
  )
}
