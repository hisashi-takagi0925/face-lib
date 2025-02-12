import { getActressDetail } from "@/domains/actress/repository/getActressDetail";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateFormValue = async ({ params }: Props) => {
  const id = (await params).id;
  const actress = await getActressDetail(id);
  return actress;
};
