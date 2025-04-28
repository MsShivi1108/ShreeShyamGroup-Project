import { useParams } from "react-router-dom";
import { Youtube } from "lucide-react";
import { mockProperties } from "../data/mockData";
import PropertyGallery from "../components/properties/PropertyGallery";
import { Button } from "../components/ui/button";
import ContactForm from "../components/forms/ContactForm";

// Removed unused ExtendedPropertyType interface

const PropertyDetails = () => {
  const { id } = useParams();
  const property = mockProperties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
          <p className="text-gray-600">
            The property you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const galleryItems =
    property.gallery?.map((url, index) => ({
      id: `${index + 1}`,
      type: "image" as const,
      url: url,
    })) || [];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PropertyGallery items={galleryItems} />

            <div className="mt-8">
              <h1 className="font-playfair text-3xl font-bold text-estate-primary mb-2">
                {property.title}
              </h1>
              <p className="text-gray-500 mb-6">{property.location}</p>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Property Details</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Price</p>
                    <p className="font-semibold">
                      ₹{property.price.toLocaleString()}/{property.priceUnit}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Size</p>
                    <p className="font-semibold">{property.size}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-gray-600">{property.description}</p>
              </div>

              {property.videoId && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Virtual Tour</h2>
                  <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                    <iframe
                      src={`https://www.youtube.com/embed/${property.videoId}`}
                      title="Virtual Tour"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <Button
                    className="mt-4 w-full"
                    onClick={() =>
                      window.open(
                        `https://www.youtube.com/watch?v=${property.videoId}`,
                        "_blank"
                      )
                    }
                  >
                    <Youtube className="w-5 h-5 mr-2" />
                    Watch on YouTube
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Inquire About This Property
              </h2>
              <ContactForm
                propertyId={property.id}
                propertyTitle={property.title}
              />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Agent</h2>
              <a href="tel:+919277101677">
                <Button className="w-full" variant="outline">
                  +91 9277101677
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
