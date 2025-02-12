import { Card, CardContent, CardHeader } from "@/lib/shadcn/components/ui/card";
import { ActressResponse } from "../../../../../../../../back-end/src/actress/dto/actress.dto";
import Link from "next/link";
import { Button } from "@/lib/shadcn/components/ui/button";
import { Avatar } from "@/shared/components/server/Avatar";

type ActressInfoProps = {
  actress: ActressResponse["result"]["actress"][number];
};

export const ActressInfo = ({ actress }: ActressInfoProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 hover:bg-pink-100">
      <CardHeader>{/* <CardTitle>{actress.name}</CardTitle> */}</CardHeader>
      <CardContent>
        <div className="flex flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center items-center">
              <Avatar
                imageURL={actress.imageURL?.large ?? ""}
                name={actress.name}
              />
            </div>
            <div>
              <p>{actress.name}</p>
            </div>
          </div>
          <Link href={`/actressDetail/${actress.id}`}>
            <Button
              size={"lg"}
              className="bg-pink-400 hover:bg-pink-500 text-white font-bold text-lg"
            >
              詳細を見る
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
