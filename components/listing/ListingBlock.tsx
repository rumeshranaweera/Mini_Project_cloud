"use client";

type Props = {};

function ListingBlock({}: Props) {
  return (
    <div className="accordion-panel accordion-start">
      <div className="accordion-trigger">
        <span>Day 1:</span> Istanbul
      </div>
      <div className="accordion-content">
        <p>
          {`Istanbul, formerly known as Constantinople, is the largest city in
          Turkey, serving as the country's economic, cultural and historic hub.
          The city straddles the Bosporus strait, lying in both Europe and Asia,
          and has a population of over 15 million residents, comprising 19% of
          the population of Turkey. Istanbul is the most populous European city,
          and the world's 15th-largest city.`}
        </p>
        <p>
          {`The city was founded as Byzantium (Byzantion) in the 7th century BC by
          Greek settlers from Megara. In 330 CE, the Roman emperor Constantine
          the Great made it his imperial capital, renaming it first as New Rome
          (Nova Roma)and then as Constantinople (Constantinopolis) after
          himself. The city grew in size and influence, eventually becoming a
          beacon of the Silk Road and one of the most important cities in
          history.`}
        </p>
      </div>
    </div>
  );
}

export default ListingBlock;
