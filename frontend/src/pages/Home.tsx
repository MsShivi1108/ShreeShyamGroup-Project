import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import PropertyCard from "../components/properties/PropertyCard";
import type {PropertyType} from "../components/properties/propertycardType";
import ContactForm from "../components/forms/ContactForm";
import { MapPin, Home, Check, Phone } from "lucide-react";
import { mockProperties } from "../data/mockData";

const HomePage = () => {
  const [featuredProperties, setFeaturedProperties] = useState<PropertyType[]>([]);

  useEffect(() => {
    const featured = mockProperties.filter(property => property.featured).slice(0, 3);
    setFeaturedProperties(featured);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative pt-30 pb-30 bg-cover bg-center" style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80')" 
      }}>
        <div className="container mx-auto my-10 px-4 relative z-10 h-full flex flex-col justify-center text-center text-white">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Find Your Dream Property with Shree Shyam Group
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover premium plots, lands, and properties across India with the most trusted real estate developer with over 3+ years of experience.
          </p>
          
          <div className="mt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/properties">
              <Button className="px-8 py-6 text-lg bg-red-800 hover:bg-white hover:text-black text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out cursor-pointer">
                Explore Our Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Properties Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Featured Properties
            </h2>
            <div className="w-20 h-1 bg-estate-primary mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our hand-picked selection of premium properties with excellent locations and promising investment potential.
            </p>
          </div>
          
          {featuredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} featured />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p>Loading featured properties...</p>
            </div>
          )}
          
          <div className="text-center mt-10">
            <Link to="/properties">
              <Button variant="outline" className="border-estate-primary text-estate-primary hover:bg-[#9F0712] hover:text-white transition-colors px-8 py-4">
                View All Properties
              </Button>
            </Link> 
          </div> 
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Why Choose Shree Shyam Group
            </h2>
            <div className="w-20 h-1 bg-estate-primary mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With over 3+ years of experience and a commitment to quality, we offer the finest real estate options for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-estate-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <Check className="h-7 w-7 text-estate-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Trusted Developer</h3>
              <p className="text-gray-600">
                With over 3+ years of experience, we have built a reputation for quality and reliability in the real estate industry.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-estate-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <MapPin className="h-7 w-7 text-estate-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Prime Locations</h3>
              <p className="text-gray-600">
                We carefully select properties in strategic locations that offer great connectivity, amenities, and investment potential.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-estate-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <Home className="h-7 w-7 text-estate-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Legal Assurance</h3>
              <p className="text-gray-600">
                All our properties come with complete legal documentation and clearances, ensuring a hassle-free investment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                Get in Touch With Us
              </h2>
              <div className="w-20 h-1 bg-estate-primary mb-6"></div>
              <p className="text-gray-600 mb-8">
                Have questions about our properties or services? Fill out the form and our team will get back to you as soon as possible.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-estate-primary/10 p-2 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-estate-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-gray-600">Engineering Chauraha, Lucknow, Uttar Pradesh, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-estate-primary/10 p-2 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-estate-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Contact Info</h4>
                    <p className="text-gray-600">+91 9277101677</p>
                    <p className="text-gray-600">info@shyamestate.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="font-playfair text-2xl font-semibold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
