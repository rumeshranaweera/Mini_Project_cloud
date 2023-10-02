import { NextResponse } from "next/server";
import Stripe from "stripe";
import { type safeListing } from "@/types";

export async function POST(request: Request) {
  const { data }: { data: safeListing } = await request.json();

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });

  const transformedData: Stripe.Checkout.SessionCreateParams.LineItem = {
    quantity: 1,
    price_data: {
      currency: "usd",
      unit_amount: data.price * 100,
      product_data: {
        name: data.title,
        description: data.description,
        images: [data.imageSrc],
      },
    },
  };

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [transformedData],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
      metadata: {
        email: "test@test.com",
      },
    });
    console.log();
    return NextResponse.json(session.url, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ data: "something went wrong" }, { status: 500 });
  }
}
