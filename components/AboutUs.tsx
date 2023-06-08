/* eslint-disable @next/next/no-img-element */
"use client";

type Props = {};

function AboutUs({}: Props) {
  return (
    <div className="max-w-7xl mx-auto w-full px-2 grid grid-cols-2 gap-y-8 justify-items-center mt-10 pt-5">
      <div className="relative px-4 col-span-full sm:col-span-1">
        <h2 className="w-full h-20 text-4xl text-center sm:text-left font-cookie">
          About us
        </h2>
        <p>
          {`Travel refers to the act of moving from one place to another for various purposes, such as leisure, business, exploration, or personal reasons. It involves the journey and experience of visiting different locations, whether it's within your own country or internationally.`}
        </p>
        <img
          src="https://dl.dropboxusercontent.com/s/cvh1jvsqfhtdr5b/places.png"
          className="mt-10"
          alt=""
        />
      </div>
      <div className="px-2 col-span-full sm:col-span-1">
        <h2 className="w-full h-20 text-center text-4xl font-cookie">
          What our customers say?
        </h2>
        <div className="w-full grid grid-cols-9 gap-y-5 justify-items-start mt-10">
          <div className="justify-items-center col-span-2 sm:col-span-1 w-12 h-12 overflow-hidden rounded-full">
            <img
              src="https://dl.dropboxusercontent.com/s/9h3xd7u1ufjq78z/avatar-1.png"
              className="w-full h-full object-cover object-center"
              alt=""
            />
          </div>
          <div className="bg-white col-span-7 sm:col-span-8 rounded-md shadow-xl px-3 py-2 h-auto">
            <h2 className="text-xl font-medium text-gray-800">John Doe</h2>
            <p className="text-gray-500">
              {`Destination Experience: Travelers often share their thoughts on
                the destinations they have visited. This can include feedback on
                the natural beauty, historical sites, cultural experiences,
                cleanliness, safety, hospitality of the locals, and overall
                atmosphere.`}
            </p>
          </div>

          <div className="bg-white col-span-7 sm:col-span-8 rounded-md shadow-xl px-3 py-2 h-auto">
            <h2 className="text-xl font-medium text-gray-800">Fazail Alam</h2>
            <p className="text-gray-500">
              {`Accommodations: Travelers often provide feedback on their
              accommodations, whether it's a hotel, hostel, vacation rental, or
              other types of lodging. They may comment on the cleanliness,
              comfort, amenities, location, and customer service they received.`}
            </p>
          </div>
          <div className="justify-self-end col-span-2 sm:col-span-1 w-12 h-12 overflow-hidden rounded-full">
            <img
              src="https://dl.dropboxusercontent.com/s/tutquuz3pfzlln2/avatar-2.png"
              className="w-full h-full object-cover object-center"
              alt=""
            />
          </div>
          <div className="justify-items-center col-span-2 sm:col-span-1 w-12 h-12 overflow-hidden rounded-full">
            <img
              src="https://dl.dropboxusercontent.com/s/22pwnk27t1p9s4o/avatar.png"
              className="w-full h-full object-cover object-center"
              alt=""
            />
          </div>
          <div className="bg-white col-span-7 sm:col-span-8 rounded-md shadow-xl px-3 py-2 h-auto">
            <h2 className="text-xl font-medium text-gray-800">Rose Bush</h2>
            <p className="text-gray-500">
              {`Transportation: Feedback on transportation options, such as
              airlines, trains, buses, or rental cars, is common. Travelers may
              discuss factors like punctuality, comfort, affordability,
              efficiency, and customer service.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
