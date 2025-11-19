import Shop from '@/components/Shop';

export default async function PageShop({params}) {
  const x = await params
  const categoryparams = x.cat
  const res = await fetch(`http://localhost:8000/products/${categoryparams}`)
  const data = await res.json()
  return <Shop title={'Shop-Sidebar'} subtitle={'Home / Shop-Sidebar'} cat={data}/>;
}
