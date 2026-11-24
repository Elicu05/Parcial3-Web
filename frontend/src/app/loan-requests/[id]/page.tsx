import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { readSessionToken } from "../../../lib/session";

type ReceiptPageProps = { params: Promise<{ id: string }> };

export async function apiFetch(path: string, options: RequestInit = {}) {
  // TODO FRONT-C: leer params y consultar el detalle con apiFetch.
  // TODO FRONT-C: mostrar ID, purpose, days y tool.name de la solicitud recibida.
  const token = await readSessionToken();
  if (!token) redirect("/login");
  

  return (
    <main>
      <h1>Loan receipt</h1>
      <Link href="/loan-requests">Back to requests</Link>
      <section className="panel">
        <p>Complete the request details.</p>
      </section>
    </main>
  );
}

