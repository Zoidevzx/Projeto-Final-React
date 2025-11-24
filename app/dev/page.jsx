import Desenvolvedor from "../../components/Desenvolvedor";

export default async function PageShop() {
  const res = await fetch("http://localhost:8000/products")
  const data = await res.json() 
  return <Desenvolvedor produtos={data} />;
}