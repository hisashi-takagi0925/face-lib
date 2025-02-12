import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/lib/shadcn/components/ui/card";
import { ActressDetail } from "../../../../../../../../back-end/src/actress/dto/actress.dto";
import { Avatar } from "@/shared/components/server/Avatar";
import { ProductResponse } from "../../../../../../../../back-end/src/products/dto/product.dto";
import Image from "next/image";

type Props = {
  actressDetail: ActressDetail;
  products: ProductResponse;
};

export const PageContent = ({ actressDetail, products }: Props) => {
  console.log("products", products);
  return (
    <Card className="transition-shadow duration-300">
      <CardHeader>
        <CardTitle>{actressDetail.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center items-center">
            <Avatar
              imageURL={actressDetail.imageURL?.large ?? ""}
              name={actressDetail.name}
              size={250}
            />
          </div>
        </div>
        {products.result.items.map((product) => (
          <div key={product.product_id}>
            <p>{product.title}</p>
            <Image
              src={product.imageURL.large}
              alt={product.title}
              width={300}
              height={300}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
