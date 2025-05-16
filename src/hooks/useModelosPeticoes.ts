
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface ModeloPeticao {
  id: number;
  area: string;
  total: number;
  link: string;
}

const fetchModelosPeticoes = async (): Promise<ModeloPeticao[]> => {
  const { data, error } = await supabase
    .from("modelos_peticoes")
    .select("id, area, total, link")
    .order("area", { ascending: true });

  if (error) throw error;
  return (
    data?.map((row: any) => ({
      id: row.id,
      area: row.area,
      total: Number(row.total),
      link: row.link,
    })) ?? []
  );
};

export const useModelosPeticoes = () =>
  useQuery({
    queryKey: ["modelos-peticoes"],
    queryFn: fetchModelosPeticoes,
  });
