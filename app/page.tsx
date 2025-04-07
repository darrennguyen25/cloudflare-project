import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-10">
      <div className="flex flex-col justify-center gap-3">
        <Input placeholder="This is my input component" />
        <Button>Submit</Button>
      </div>
      <div className="p-5">
        <ul>
          <li>first message</li>
          <li>second message</li>
        </ul>
      </div>
    </main>
  );
}
