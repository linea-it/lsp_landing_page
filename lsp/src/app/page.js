import { redirect } from "next/navigation";

// Redirect to the LSP page
export default function Home() {
  redirect("/lsp")
}
