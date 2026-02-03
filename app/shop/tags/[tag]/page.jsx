import Shop from '@/components/Shop';
import { supabase } from '@/BackendSupTest/lib/supabaseClient';

export default async function PageShop({ params }) {
  const rawTag = params.tag;                   
  const tag = decodeURIComponent(rawTag);      

  const { data: produtos } = await supabase
    .from('product')
    .select('*')
    .eq('tags', tag)                            
    .order('id', { ascending: true });

  return <Shop title="Shop-Sidebar" subtitle="Home / Shop-Sidebar" tag={produtos} />;
}