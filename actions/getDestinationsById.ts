import prisma from "@/lib/prismadb";

interface IParams {
  destinationId?: string;
}

export default async function getDestinationsById(params: IParams) {
  try {
    const { destinationId } = params;

    const listing = await prisma.destinations.findUnique({
      where: {
        id: destinationId,
      },
      include: {
        user: true,
      },
    });

    if (!listing) {
      return null;
    }

    return {
      ...listing,
      createdAt: listing.createdAt.toString(),
      user: {
        ...listing.user,
        createdAt: listing.user.createdAt.toString(),
        updatedAt: listing.user.updatedAt.toString(),
        emailVerified: listing.user.emailVerified?.toString() || null,
      },
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}
