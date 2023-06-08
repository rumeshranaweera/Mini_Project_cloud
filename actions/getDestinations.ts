import prisma from "@/lib/prismadb";

export interface IDestinationsParams {
  userId?: string;
  guestCount?: number;
  locationValue?: string;
  category?: string;
}

export default async function getDestinations(params: IDestinationsParams) {
  try {
    const { userId, guestCount, locationValue, category } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    if (guestCount) {
      query.guestCount = {
        gte: +guestCount,
      };
    }

    if (locationValue) {
      query.locationValue = locationValue;
    }

    const listing = await prisma.destinations.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeListings = listing.map((list) => ({
      ...list,
      createdAt: list.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
