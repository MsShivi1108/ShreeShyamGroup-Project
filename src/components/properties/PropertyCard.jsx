
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { MapPin } from "lucide-react";

const PropertyCard = ({ property, featured = false }) => {
  return (
    <Card className={`overflow-hidden group transition-all duration-300 hover:shadow-lg ${
      featured ? 'border-estate-secondary border-2' : ''
    }`}>
      <Link to={`/properties/${property.id}`}>
        <div className="relative aspect-video overflow-hidden">
          {featured && (
            <Badge className="absolute top-2 left-2 z-10 bg-estate-secondary text-white">
              Featured
            </Badge>
          )}
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-playfair text-xl font-semibold line-clamp-1 mb-1">
            {property.title}
          </h3>
          {/* <div className="flex items-center text-gray-500 mb-3">
            <MapPin className="h-4 w-4 mr-1 text-estate-primary" />
            <span className="text-sm line-clamp-2">{property.location}</span>
          </div> */}
          <div className="flex items-center justify-between mt-2">
            <div>
              <span className="text-lg font-semibold text-estate-primary">
                ₹{property.price.toLocaleString()}
              </span>
              <span className="text-gray-500 text-xs">/{property.priceUnit}</span>
            </div>
            <div className="text-sm text-gray-500">{property.size}</div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default PropertyCard;
