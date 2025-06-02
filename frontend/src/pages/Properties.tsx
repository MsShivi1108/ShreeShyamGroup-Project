
import { useState, useEffect } from "react";
import { mockProperties } from "../data/mockData";
import { PropertyType } from "../components/properties/PropertyCard";
import PropertyCard from "../components/properties/PropertyCard";

const Properties = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    setProperties(mockProperties);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen pt-30 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Explore Our Properties
          </h1>
          <div className="w-20 h-1 bg-estate-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our comprehensive collection of premium properties with over 3+ years of expertise in the real estate market.
          </p>
        </div>

        {/* Properties grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-estate-primary mx-auto"></div>
            <p className="mt-4">Loading properties...</p>
          </div>
        ) : properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-600">No properties available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
