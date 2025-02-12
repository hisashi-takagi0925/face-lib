import { getActressDetail } from "@/domains/actress/repository/getActressDetail";
import { PageContent } from "./_components/PageContent/index.client";
import { getProducts } from "@/domains/products/repository/getProducts";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const actressDetail = await getActressDetail(resolvedParams.id);

  if (!actressDetail) {
    return <div>Actress not found</div>;
  }

  const products = await getProducts({
    actress_id: actressDetail.id,
  });
  console.log("products", products);
  if (!products) {
    return <div>Products not found</div>;
  }

  return <PageContent actressDetail={actressDetail} products={products} />;
}
