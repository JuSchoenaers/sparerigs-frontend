import Image from "next/image";
import TopBar from "@/components/Header";
import ActionChip from "@/components/ActionChip";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 bg-gradient-to-b from-primary-950 to-black">
      <TopBar></TopBar>
      <ActionChip className='drop-shadow-xl shadow-primary-200' info={"Things You Should Know About E-Waste"} label={"Read more"}></ActionChip>
    </main>
  );
}
