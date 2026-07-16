import { deliverCourseAccess } from "@/lib/course-delivery";
import { getProductFromReference } from "@/lib/products";
import {
  transactionMatchesProduct,
  verifyWompiEvent,
  type WompiTransaction,
} from "@/lib/wompi";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;

    if (!verifyWompiEvent(body)) {
      return Response.json({ received: false }, { status: 401 });
    }

    const event = body as {
      event?: string;
      data?: { transaction?: WompiTransaction };
    };
    const transaction = event.data?.transaction;
    if (event.event !== "transaction.updated" || !transaction) {
      return Response.json({ received: true, ignored: true });
    }

    const product = getProductFromReference(transaction.reference);
    if (
      transaction.status === "APPROVED" &&
      product?.delivery === "course" &&
      transactionMatchesProduct(transaction, product)
    ) {
      await deliverCourseAccess(transaction);
    }

    return Response.json({ received: true });
  } catch (error) {
    console.error("Evento Wompi invalido", error);
    return Response.json({ received: false }, { status: 400 });
  }
}
