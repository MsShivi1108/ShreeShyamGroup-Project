
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { ChevronLeft, ChevronRight, Image } from "lucide-react";

const PropertyGallery = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (items[currentIndex]?.type === "image") {
      const img = new window.Image();
      img.src = items[currentIndex].url;
      img.onload = () => setLoading(false);
    } else {
      setLoading(false);
    }
  }, [currentIndex, items]);

  if (!items || items.length === 0) {
    return (
      <div className="bg-gray-100 rounded-lg flex items-center justify-center p-10">
        <p className="text-gray-500 flex items-center">
          <Image className="w-5 h-5 mr-2" />
          No images available
        </p>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-lg aspect-video bg-gray-100">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-estate-primary"></div>
          </div>
        )}

        <img
          src={currentItem.url}
          alt={`Property image ${currentIndex + 1}`}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />

        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full flex items-center text-sm">
          <Image className="w-4 h-4 mr-1" /> Image {currentIndex + 1} of {items.length}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-none shadow-md"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-none shadow-md"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => goToSlide(index)}
            className={`relative flex-shrink-0 w-20 h-20 rounded-md overflow-hidden transition-all ${
              currentIndex === index
                ? "ring-2 ring-estate-primary"
                : "opacity-70"
            }`}
          >
            <img
              src={item.url}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;
