import UserCard from "@/components/UserCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <UserCard />
      </div>
    </main>
  );
}
