import { createFileRoute } from "@tanstack/react-router";
import { Bench } from "@/components/bench";
import { Chrome } from "@/components/chrome";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Chrome>
      <Bench />
    </Chrome>
  );
}
