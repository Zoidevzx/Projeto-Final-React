import Product from '@/components/Product';

export default async function PageProduct({params}) {
  const x = await params
  const productparams = x.product
  const res = await fetch(`http://localhost:8000/product/${productparams}`)
  const data = await res.json()
  return (<Product title={'Single-Product'} subtitle={'home/single-product'} product={data} productprincipal={productparams} />)
}
