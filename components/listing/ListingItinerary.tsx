"use client";

import useCountries from "@/hook/useCountries";
import { safeDestinations, SafeUser } from "@/types";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";

type Props = {
  destinations: safeDestinations & {
    user: SafeUser;
  };
};

function ListingItinerary({ destinations }: Props) {
  const { getByValue } = useCountries();
  const location = getByValue(destinations.locationValue);
  const [isActive, setIsActive] = useState({
    one: "active",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
  });

  const handleActive = useCallback(
    (label: string) => {
      if (!label) return;

      // @ts-ignore
      if (isActive[label] === "active") {
        setIsActive((prev) => ({
          ...prev,
          [label]: "",
        }));
      } else {
        setIsActive((prev) => ({
          ...prev,
          [label]: "active",
        }));
      }
    },
    [isActive]
  );

  return (
    <div className="mt-10 first:mt-0 pb-10 border-b border-solid border-gray-200 last:border-0 last:p-0">
      <div className="text-lg lg:text-2xl text-slate-600 font-semibold mb-8">
        Itinerary
      </div>
      <div className="tour-itinerary">
        <div className="accordion">
          <div
            className={`accordion-panel accordion-introduction ${isActive.one}`}
            onClick={() => handleActive("one")}
          >
            <div className="accordion-trigger">Introduction</div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="accordion-content"
            >
              <p>
                {`Start and end in ${location?.region}, ${location?.label}! With the Explorer tour Best of Turkey
                by Land, you have a 9 days tour package taking you through
                Istanbul, Turkey and 11 other destinations in Turkey. Best of
                Turkey by Land includes accommodation in a hotel as well as an
                expert guide, meals, transport and more.`}
              </p>
            </motion.div>
          </div>
          <div
            className={`accordion-panel accordion-start ${isActive.two}`}
            onClick={() => handleActive("two")}
          >
            <div className="accordion-trigger">
              <span>Day 1:</span> {location?.region}, {location?.label}
            </div>
            <div className="accordion-content ">
              <p>
                {`$${location?.region}, formerly known as Constantinople, is the
                largest city in Turkey, serving as the country's economic,
                cultural and historic hub. The city straddles the Bosporus
                strait, lying in both Europe and Asia, and has a population of
                over 15 million residents, comprising 19% of the population of
                Turkey. Istanbul is the most populous European city, and the
                world's 15th-largest city.`}
              </p>
              <p>
                {`The city was founded as Byzantium (Byzantion) in the 7th century
                BC by Greek settlers from Megara. In 330 CE, the Roman emperor
                Constantine the Great made it his imperial capital, renaming it
                first as New Rome (Nova Roma)and then as Constantinople
                (Constantinopolis) after himself. The city grew in size and
                influence, eventually becoming a beacon of the Silk Road and one
                of the most important cities in history.`}
              </p>
            </div>
          </div>
          {/* new  */}
          <div
            className={`accordion-panel ${isActive.three}`}
            onClick={() => handleActive("three")}
          >
            <div className="accordion-trigger">
              <span>Day 2:</span> Gallipoli
            </div>
            <div className="accordion-content">
              <p>
                {`The Gallipoli peninsula is located in the southern part of East
                Thrace, the European part of Turkey, with the Aegean Sea to the
                west and the Dardanelles strait to the east.`}
              </p>

              <p>
                {` Gallipoli is the Italian form of the Greek name Καλλίπολις
                (Kallípolis), meaning 'beautiful city', the original name of the
                modern town of Gelibolu. In antiquity, the peninsula was known
                as the Thracian Chersonese.`}
              </p>
            </div>
          </div>
          {/* new  */}
          <div
            className={`accordion-panel ${isActive.four}`}
            onClick={() => handleActive("four")}
          >
            <div className="accordion-trigger">
              <span>Day 3:</span> Troy
            </div>
            <div className="accordion-content">
              <p>
                {` Troy or Ilium was an ancient city located at Hisarlik in
                present-day Turkey, 30 kilometres (19 mi) south-west of
                Çanakkale. It is known as the setting for the Greek myth of the
                Trojan War.`}
              </p>
              <p>
                {`In Ancient Greek literature, Troy is portrayed as a powerful
                kingdom of the Heroic Age, a mythic era when monsters roamed the
                earth and gods interacted directly with humans. The city was
                said to have ruled the Troad until the Trojan War led to its
                complete destruction at the hands of the Greeks. The story of
                its destruction was one of the cornerstones of Greek mythology
                and literature, featuring prominently in the Iliad and the
                Odyssey, as well as numerous other poems and plays. Its legacy
                played a large role in Greek society, with many prominent
                families claiming descent from those who had fought there. In
                the Archaic era, a new city was built at the site where
                legendary Troy was believed to have stood. In the ClassNameical
                era, this city became a tourist destination, where visitors
                would leave offerings to the legendary heroes.`}
              </p>
            </div>
          </div>
          {/* new  */}
          <div
            className={`accordion-panel ${isActive.five}`}
            onClick={() => handleActive("five")}
          >
            <div className="accordion-trigger">
              <span>Day 4:</span> Kusadasi
            </div>
            <div className="accordion-content">
              <p>
                {`Kuşadası is a large resort town on Turkey's Aegean coast, and
                the center of the seaside district of the same name within Aydın
                Province. Kuşadası is 95 km (59 mi) south of İzmir, and about 60
                km (37 mi) from Aydın. The municipality's primary industry is
                tourism. The mayor of the district is Oğuzhan Turan.`}
              </p>
            </div>
          </div>

          <div
            className={`accordion-panel ${isActive.six}`}
            onClick={() => handleActive("six")}
          >
            <div className="accordion-trigger">
              <span>Day 5:</span> Fethiye
            </div>
            <div className="accordion-content">
              <p>
                {`Fethiye, formerly Makri (Greek: Μάκρη), is a city and district
                of Muğla Province in the Aegean Region of Turkey. It is one of
                the prominent tourist destinations in the Turkish Riviera. In
                2019 its population was 162,686.`}
              </p>
            </div>
          </div>

          <div
            className={`accordion-panel ${isActive.seven}`}
            onClick={() => handleActive("seven")}
          >
            <div className="accordion-trigger">
              <span>Day 6:</span> Oludeniz
            </div>
            <div className="accordion-content">
              <p>
                {`Ölüdeniz is a small neighbourhood and beach resort in the
                Fethiye district of Muğla Province, on the Turquoise Coast of
                southwestern Turkey, at the conjunction point of the Aegean and
                Mediterranean sea. It is located 14 km (9 mi) to the south of
                Fethiye, near Mount Babadağ.`}
              </p>
            </div>
          </div>

          <div
            className={`accordion-panel ${isActive.eight}`}
            onClick={() => handleActive("eight")}
          >
            <div className="accordion-trigger">
              <span>Day 7:</span> Dalyan
            </div>
            <div className="accordion-content">
              <p>
                {`Dalyan is a town in Muğla Province located between the districts
                of Marmaris and Fethiye on the south-west coast of Turkey. The
                town is an independent municipality, within the administrative
                district of Ortaca.`}
              </p>
              <p>
                {`Dalyan achieved international fame in 1987 when developers
                wanted to build a luxury hotel on the nearby İztuzu Beach, a
                breeding ground for the endangered loggerhead sea turtle
                species. The incident created major international storm when
                David Bellamy championed the cause of conservationists such as
                June Haimoff, Peter Günther, Nergis Yazgan, Lily Venizelos and
                Keith Corbett. The development project was temporarily stopped
                after Prince Philip called for a moratorium and in 1988 the
                beach and its hinterland were declared a protected area, viz.
                Köyceğiz-Dalyan Special Environmental Protection Area.`}
              </p>
              <p>
                {`Life in Dalyan revolves around the Dalyan Çayı River which flows
                past the town. The boats that ply up and down the river,
                navigating the maze of reeds, are the preferred means of
                transport to local sites.`}
              </p>
            </div>
          </div>

          <div
            className={`accordion-panel ${isActive.nine}`}
            onClick={() => handleActive("nine")}
          >
            <div className="accordion-trigger">
              <span>Day 8:</span> Cappadocia
            </div>
            <div className="accordion-content">
              <p>
                {`Cappadocia is a historical region in Central Anatolia, largely
                in the Nevşehir, Kayseri, Aksaray, Kırşehir, Sivas and Niğde
                provinces in Turkey.`}
              </p>
              <p>
                {` Since the late 300s BC the name Cappadocia came to be restricted
                to the inland province (sometimes called Great Cappadocia),
                Upper Cappadocia, which alone will be the focus of this article.
                Lower Cappadocia is focused to elsewhere.`}
              </p>
              <p>
                {`According to Herodotus, in the time of the Ionian Revolt (499
                BC), the Cappadocians were reported as occupying a region from
                Mount Taurus to the vicinity of the Euxine (Black Sea).
                Cappadocia, in this sense, was bounded in the south by the chain
                of the Taurus Mountains that separate it from Cilicia, to the
                east by the upper Euphrates, to the north by Pontus, and to the
                west by Lycaonia and eastern Galatia.`}
              </p>
            </div>
          </div>

          <div
            className={`accordion-panel ${isActive.ten}`}
            onClick={() => handleActive("ten")}
          >
            <div className="accordion-trigger">
              <span>Day 9:</span> {location?.region}
            </div>
            <div className="accordion-content">
              <p>
                {`Our trip will end after we say goodbye to our new friends over
                breakfast, bid you safe travels, and check-out of the hotel.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingItinerary;
