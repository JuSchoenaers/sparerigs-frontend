import Image from "next/image";
import TopBar from "@/components/Header";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopBar></TopBar>
    </main>
  );
}
