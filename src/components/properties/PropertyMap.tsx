// import 'leaflet/dist/leaflet.css';

interface PropertyLocation {
  title: string;
  latitude: number;
  longitude: number;
}

interface PropertyMapProps {
  location: PropertyLocation;
  zoom?: number;
  height?: string;
}

const PropertyMap = ({height = "400px" }: PropertyMapProps) => {
  // In a real application, we would implement the Leaflet map here
  // For now, let's create a simplified placeholder that displays location info

  return (
    <div
      style={{ height }}
      className="rounded-lg overflow-hidden shadow-md bg-gray-200 flex items-center justify-center"
    >
      <div className="text-center p-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3557.783490734438!2d80.94252577543939!3d26.910365576648616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU0JzM3LjMiTiA4MMKwNTYnNDIuNCJF!5e0!3m2!1sen!2sin!4v1745666184041!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ height }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default PropertyMap;
