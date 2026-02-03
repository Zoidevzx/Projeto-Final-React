import Product from '@/components/Product';
import { supabase } from '@/BackendSupTest/lib/supabaseClient';

export default async function PageProduct({ params }) {
  const id = parseInt(params.product, 10);

  if (Number.isNaN(id)) {
    return <Product title="Single-Product" subtitle="home/single-product" product={[]} productprincipal={params.product} />;
  }

  const { data: lastRow } = await supabase
    .from('product')
    .select('id')
    .order('id', { ascending: false })
    .limit(1);

  const lastId = lastRow?.[0]?.id ?? id;

  let ids = [];
  if (id === 1) {
    ids = [id, id + 1, id + 2];
  } else if (id === lastId) {
    ids = [id, id - 1, id - 2];
  } else {
    ids = [id - 1, id, id + 1];
  }

  const { data: products } = await supabase
    .from('product')
    .select('*')
    .in('id', ids);

  const ordered = (products || []).sort((a, b) => {
    if (a.id === id) return -1;
    if (b.id === id) return 1;
    return a.id - b.id;
  });

  return (
    <Product
      title="Single-Product"
      subtitle="home/single-product"
      product={ordered}
      productprincipal={params.product}
    />
  );
}
