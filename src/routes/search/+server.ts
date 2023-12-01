import { json } from "@sveltejs/kit";

export function POST({ request }) {
  console.log(request);
  return json({ message: "Hello world!" });
}
