import { ICON_PIXIV } from "@/consts";
import { Image } from "@nextui-org/react";

type LinkCardProps = {
  iconUrl: string;
  description: string;
};

export default function LinkCard({ iconUrl, description }: LinkCardProps) {
  return (
    <>
      <div className="flex gap-3 w-[180px] max-h-[50px] items-center p-2 border-l-2 rounded m-1">
        <Image radius="none" width={20} alt="text" src={iconUrl} />
        <p className="text-small  min-w-[100px] ">{description}</p>
      </div>
    </>
  );
}
