
import Shop from '@/components/Shop';
import { supabase } from '@/BackendSupTest/lib/supabaseClient';

export default async function PageShop({ params }) {
  const rawCategory = params.cat;
  const category = decodeURIComponent(rawCategory);

  const { data: produtos } = await supabase
    .from('product')              
    .select('*')
    .eq('category', category)     
    .order('id', { ascending: true });

  return <Shop title="Shop-Sidebar" subtitle="Home / Shop-Sidebar" cat={produtos} />;
}
