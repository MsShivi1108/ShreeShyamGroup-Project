import { PropertyType } from "../components/properties/PropertyCard";

interface ExtendedPropertyType extends PropertyType {
  gallery?: string[];
  videoId?: string;
}

export const mockProperties: ExtendedPropertyType[] = [
  {
    id: "prop1",
    title: "Lucknow Kursi Road Plot",
    location:
      "150m from Kursi Road, 5 km from Tedhi Puliya, 50m from Scorpio Club, Kursi Road, Lucknow",
    price: 2551,
    priceUnit: "sq. ft.",
    size: "--",
    description:
      "30 ft wide main road, with 24 ft & 22 ft branch roads,Electricity & street lights, Green area & gated society, Proper drainage & shaded trees, Close to Night Safari & Zoo, Connected to the main Scorpio Club road",
    imageUrl: "../../assets/ScorpioClub1.jpg",
    gallery: [
      "../../assets/ScorpioClub1.jpg",
      "../../assets/ScorpioClub2.png",
      "../../assets/ScorpioClub3.png",
    ],
    videoId: "https://youtu.be/jkXlA5fi__o?si=7PoT34A2tTlBjolF",
    featured: true,
  },
  {
    id: "prop2",
    title: "Sitapur Road Plot",
    location:
      "1 km from Bakshi Ka Talab Tehsil, 1 km from Outer Ring Road, Only 500 meters from Ram Sagar Mishra Government Hospital, Just 600 meters from RR College,Located behind Adhya Lawn, Sitapur Road, Lucknow",
    price: 1099,
    priceUnit: "sq ft",
    size: "5000 sq ft",
    description:
      "30-feet wide main road, with 24 and 22-feet wide branch roads,Electricity and street lights,Green area, gated society, proper drainage system, and shady trees",
    imageUrl: "../../assets/Sitapur1.jpg",
    gallery: [
      "../../assets/Sitapur1.jpg",
      "../../assets/sitapur2.jpg",
      "../../assets/sitapur3.jpg",
    ],
    videoId: "QaGF3xYsY9M",
    featured: true,
  },
  {
    id: "prop3",
    title: "Chandrika Devi Road Plot",
    location: "Chandrika Devi Road, Bakshi Ka Talab, Lucknow",
    price: 1299,
    priceUnit: "sq ft",
    size: "-- sq ft",
    description:
      "Strategic Location, Close to Outer Ring Road, only 1 km away, Ready-to-Move Plots, Peaceful Environment",
    imageUrl: "../../assets/ChandrikaDevi1.png",
    gallery: [
      "../../assets/ChandrikaDevi1.png",
      "../../assets/ChandrikaDevi2.png",
      "../../assets/ChandrikaDevi3.png",
    ],
    videoId: "5iYR7JL7Tdk",
    featured: true,
  },
  {
    id: "prop4",
    title: "Jankipuram Plot",
    location: "Shukla Chauraha, Jankipuram Vistar, Lucknow",
    price: 2600,
    priceUnit: "sq ft",
    size: "-- sq ft",
    description:
      "Prime Location : Situated just 300 meters from Shukla Chauraha in Jankipuram Extension, Secured and well-managed residential environment, Good Connectivity",
    imageUrl: "../../assets/Jankipuram1.png",
    gallery: [
      "../../assets/Jankipuram1.png",
      "../../assets/Jankipuram2.png",
      "../../assets/Jankipuram3.png",
    ],
    videoId: "YR5ApYxkU-U",
  }
];

export const galleryItems = [
  {
    id: "img1",
    type: "image" as const,
    url: "../../assets/ScorpioClub1.jpg",
    thumbnail:
      "../../assets/ScorpioClub2.png",
  },
  {
    id: "img2",
    type: "image" as const,
    url: "../../assets/ChandrikaDevi1.png",
    thumbnail:
      "../../assets/ChandrikaDevi2.png",
  },
  {
    id: "img3",
    type: "image" as const,
    url: "../../assets/Jankipuram1.png",
    thumbnail:
      "../../assets/Jankipuram2.png", 
  },
  {
    id: "video1",
    type: "video" as const,
    url: "https://youtu.be/jkXlA5fi__o?si=p0XCDhTlZPr4WVZF", // Example YouTube embed
    thumbnail:
      "../../assets/ScorpioClub1.jpg",
  },
];

export const propertyLocations = {
  office: {
    title: "Shree Shyam Group Office",
    latitude: 26.8467,
    longitude: 80.9462,
    address: "Engineering Chauraha, Lucknow, Uttar Pradesh, India"
  }
};
