import { AiOutlineCar, AiOutlineWifi } from "react-icons/ai";
import { BiCctv } from "react-icons/bi";
import { BsFire, BsSnow } from "react-icons/bs";
import { FaFireExtinguisher, FaSkiing } from "react-icons/fa";
import {
  GiBarn,
  GiBoatFishing,
  GiButterflyFlower,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr";
import { IoDiamond } from "react-icons/io5";
import {
  MdOutlineBathtub,
  MdOutlineCoffeeMaker,
  MdOutlineVilla,
} from "react-icons/md";
import { RiSafeLine } from "react-icons/ri";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

export const offersRowOne = [
  {
    label: "Garden view",
    icon: GiButterflyFlower,
  },
  {
    label: "Hot water",
    icon: BsFire,
  },

  {
    label: "Wifi",
    icon: AiOutlineWifi,
  },
  {
    label: "Coffee",
    icon: MdOutlineCoffeeMaker,
  },
  {
    label: "Security cameras on property",
    icon: BiCctv,
  },
];

export const offersRowTwo = [
  {
    label: "Bathtub",
    icon: MdOutlineBathtub,
  },
  {
    label: "Dedicated workspace",
    icon: GrWorkshop,
  },
  {
    label: "Safe",
    icon: RiSafeLine,
  },
  {
    label: "Free parking on premises",
    icon: AiOutlineCar,
  },
  {
    label: "Fire extinguisher",
    icon: FaFireExtinguisher,
  },
];
