import Shop from '@/components/Shop';

export default async function PageShop({ params }) {
  const x = await params
  const tagparams = x.tag
  const res = await fetch(`http://localhost:8000/products/tags/${tagparams}`)
  const data = await res.json()
  return <Shop title={'Shop-Sidebar'} subtitle={'Home / Shop-Sidebar'} tag={data} />;
}
