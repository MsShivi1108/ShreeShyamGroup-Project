export type PropertyType = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  priceUnit: string;
  size: string;
  featured?: boolean;
};

type PropertyCardProps = {
  property: PropertyType;
  featured?: boolean;
};
