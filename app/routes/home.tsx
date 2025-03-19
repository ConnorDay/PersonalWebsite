import type { Route } from "./+types/home";
import { Welcome } from "./welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Connor Day's Website" },
    { name: "description", content: "Website owned by Connor Day" },
  ];
}

export default function Home() {
  return <Welcome />;
}
