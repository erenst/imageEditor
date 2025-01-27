import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <nav className="w-full h-[68px] bg-muted flex items-center justify-between ">
        <span className="font-semibold ml-[20px]">logo</span>
      </nav>
      <div className="flex items-center justify-center w-full h-[calc(100%-68px)] bg-red-200">
        <Button variant="secondary">Hello world!</Button>
      </div>
    </div>
  );
}
