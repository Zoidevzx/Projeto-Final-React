// app/shop/page.jsx
import Shop from '@/components/Shop';
import { supabase } from '@/BackendSupTest/lib/supabaseClient';

export default async function PageShop() {
  const { data: produtos } = await supabase
    .from('product')          
    .select('*')
    .order('id', { ascending: true });

  return <Shop title="Shop-Sidebar" subtitle="Home / Shop-Sidebar" allproducts={produtos} />;
}
