import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const { totalPrice, destinationsId } = body;

  if (!destinationsId || !totalPrice) {
    return NextResponse.error();
  }

  const listenAndReservation = await prisma.destinations.update({
    where: {
      id: destinationsId,
    },
    data: {
      reservationDestinations: {
        create: {
          userId: currentUser.id,
          totalPrice: totalPrice,
        },
      },
    },
  });

  return NextResponse.json(listenAndReservation);
}
