import { useRouter } from 'next/dist/client/router'
import NextLink from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import Layout from '../../components/Layout';
import ProductDetail from '../../components/ProductDetail';
import data from '../../utils/data';
import styles from './styles.module.scss';

export default function ProductDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find(product => product.slug === slug);

  if(!product) {
    return <h4 className="text-center m-5">Product Not Found</h4>
  }

  return (
    <Layout title={product.name} description={product.description}>
      <div className="pt-3">
        <NextLink href="/" passHref>
          <a className={styles.link}>
            <FaArrowLeft />
            <span>Back to Products</span>
          </a>
        </NextLink>
      </div>
      <main className="mt-3">
        <ProductDetail product={product} />
      </main>
    </Layout>
  )
}
