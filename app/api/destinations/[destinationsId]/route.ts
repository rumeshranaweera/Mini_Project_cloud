import getCurrentUser from "@/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

interface IParams {
  destinationsId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { destinationsId } = params;
  console.log("🚀 ~ file: route.ts:20 ~ destinationsId:", destinationsId);

  if (!destinationsId || typeof destinationsId !== "string") {
    throw new Error("Invalid Id");
  }

  const reservation = await prisma.reservationDestinations.deleteMany({
    where: {
      id: destinationsId,
      OR: [
        { userId: currentUser.id },
        { destinations: { userId: currentUser.id } },
      ],
    },
  });

  return NextResponse.json(reservation);
}
