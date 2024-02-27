"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Divider,
  Image,
} from "@nextui-org/react";
import { ICON_BLUESKY, ICON_MASTODON, ICON_PIXIV, ICON_X } from "@/consts";
import LinkCard from "./LinkCard";

type UserCardProps = {
  userName: string;
  userText?: string;
  avatarUrl?: string;
  twitterId?: string;
  mastodonId?: string;
  blueskyId?: string;
};

export default function UserCard({
  userName,
  userText,
  avatarUrl,
  twitterId,
  mastodonId,
  blueskyId,
}: UserCardProps) {
  // const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card
      className="min-w-[680px] max-w-[680px] min-h-[400px] px-8 pt-8"
      isBlurred
      shadow="sm"
    >
      <CardHeader className="justify-between ">
        <div className="flex gap-5 w-full">
          <Avatar
            isBordered
            radius="full"
            className="w-[7rem] h-[7rem] text-large"
            src={avatarUrl}
            // src="https://pbs.twimg.com/profile_images/1760188421170135040/BhqVOStd_400x400.jpg"
          />
          <div className="flex flex-col gap-2 items-start justify-center w-4/5">
            <div className="flex justify-between w-full">
              <h4 className="text-3xl font-semibold leading-none text-default-600">
                {userName}
              </h4>
              <div className="flex gap-2 items-end justify-between">
                {twitterId && (
                  <Image radius="none" width={30} alt="ttext" src={ICON_X} />
                )}
                {blueskyId && (
                  <Image
                    radius="none"
                    width={30}
                    alt="ttext"
                    src={ICON_BLUESKY}
                  />
                )}
                {mastodonId && (
                  <Image
                    radius="none"
                    width={30}
                    alt="ttext"
                    src={ICON_MASTODON}
                  />
                )}
              </div>
            </div>

            <h5 className="text-small tracking-tight text-default-400 ">
              {userText}
            </h5>
          </div>
        </div>
      </CardHeader>
      <Divider className="my-4" />

      <CardBody className="px-4 py-0 text-small text-default-400 flex w-full ">
        <div className="flex flex-row flex-wrap justify-between">
          {/* 링크카드는 최대 9개까지 설정 가능 */}
          <LinkCard iconUrl={ICON_PIXIV} description="test" />
        </div>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">#</p>
          <p className=" text-default-400 text-small">prsk</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">#</p>
          <p className="text-default-400 text-small">nichiasa</p>
        </div>
      </CardFooter>
    </Card>
  );
}
