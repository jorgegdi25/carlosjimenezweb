import { verifyWompiEvent } from "@/lib/wompi";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;

    if (!verifyWompiEvent(body)) {
      return Response.json({ received: false }, { status: 401 });
    }

    return Response.json({ received: true });
  } catch (error) {
    console.error("Evento Wompi invalido", error);
    return Response.json({ received: false }, { status: 400 });
  }
}
