import Image from "next/image";
import Home from "@/pages/Home";

export default function HomePage() {
  return (
    <main className="flex min-h-screen-[80vh] flex-col items-center justify-between">
      <Home />
    </main>
  );
}
