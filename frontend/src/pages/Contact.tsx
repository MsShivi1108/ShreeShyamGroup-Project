import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from '../components/forms/ContactForm';
import PropertyMap from '../components/properties/PropertyMap';

const ContactPage = () => {
  const officeLocation = {
    title: 'Shree Shyam Group Office',
    latitude: 26.8467,
    longitude: 80.9462
  };

  const contactInfo = {
    address: 'Engineering Chauraha, Lucknow, Uttar Pradesh, India',
    phone: '+91 9277101677',
    email: 'contact@shyamestate.com'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-30">
      <div className="container mx-auto px-4">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-12 text-center text-estate-primary">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="font-playfair text-2xl font-bold mb-6 text-estate-primary">
                Get in Touch
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 text-estate-primary" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 mt-1 text-estate-primary" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 mt-1 text-estate-primary" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-playfair text-2xl font-bold mb-6 text-estate-primary">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>

          <div>
            <div className="sticky top-6">
              <h2 className="font-playfair text-2xl font-bold mb-6 text-estate-primary">
                Our Location
              </h2>
              <PropertyMap location={officeLocation} height="600px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
