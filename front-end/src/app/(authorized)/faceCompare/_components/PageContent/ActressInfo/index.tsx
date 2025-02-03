import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/lib/shadcn/components/ui/card";
import { ActressResponse } from "../../../../../../../../back-end/src/actress/dto/actress.dto";
import Image from "next/image";

type ActressInfoProps = {
  actress: ActressResponse["result"]["actress"][number];
};

export const ActressInfo = ({ actress }: ActressInfoProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{actress.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={actress.imageURL?.large}
          alt={actress.name}
          width={300}
          height={300}
          style={{
            borderRadius: "100%",
            objectFit: "cover",
            boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </CardContent>
    </Card>
  );
};
