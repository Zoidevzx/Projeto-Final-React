import Shop from '@/components/Shop';

export default async function PageShop() {
  const res = await fetch(`http://localhost:8000/products`)
  const data = await res.json()
  return <Shop title={'Shop-Sidebar'} subtitle={'Home / Shop-Sidebar'} cat={data}/>;
}
