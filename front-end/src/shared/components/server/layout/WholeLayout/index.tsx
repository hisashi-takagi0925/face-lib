type Props = {
  children: React.ReactNode;
};

export const WholeLayout = ({ children }: Props) => {
  return <div className={`bg-gray-100 h-full w-full  p-4`}>{children}</div>;
};
