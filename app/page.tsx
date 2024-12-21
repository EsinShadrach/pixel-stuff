import { CursorThing } from "~/components/cursor-thing";
import { PixelButton } from "~/components/pixel-button";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen start-background">
      <CursorThing />
      <div className="p-3 mt-auto">
        <PixelButton className="active:scale-95 transition-all duration-300 focus:outline-none focus:scale-105">
          Start
        </PixelButton>
      </div>
    </main>
  );
}
