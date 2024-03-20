import { redirect } from "next/navigation";
import 'regenerator-runtime/runtime'

export default function Root() {
  redirect("/home");
}
