import Desenvolvedor from "../../components/Desenvolvedor";
import { supabase } from '@/BackendSupTest/lib/supabaseClient';

export default async function PageDev() {
  const { data: produtos } = await supabase
      .from('product')          
      .select('*')
      .order('id', { ascending: true }); 
  return <Desenvolvedor produtos={produtos} />;
}