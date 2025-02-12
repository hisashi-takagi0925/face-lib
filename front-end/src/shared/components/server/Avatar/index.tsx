import Image from "next/image";

type Props = {
  imageURL: string;
  name: string;
  size?: number;
};

export const Avatar = ({ imageURL, name, size = 100 }: Props) => {
  return (
    <Image
      src={imageURL}
      alt={name}
      width={size}
      height={size}
      style={{
        borderRadius: "100%",
        objectFit: "cover",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    />
  );
};
