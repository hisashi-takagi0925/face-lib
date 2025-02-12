import { getActresses } from "@/domains/actress/repository/getActresses";
import { ActressInfo } from "./ActressInfo";

export const PageContent = async () => {
  const actresses = await getActresses({
    offset: 2001,
    hits: 100,
  });

  return (
    <div className="grid grid-cols-1 gap-8">
      {actresses?.map((actress) => (
        <div key={actress.id}>
          {actress.imageURL?.large && <ActressInfo actress={actress} />}
        </div>
      ))}
    </div>
  );
};
