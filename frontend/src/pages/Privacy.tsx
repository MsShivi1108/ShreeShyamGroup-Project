// import React from 'react';
import { ShieldCheck, ShieldOff, Info } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: 'We collect personal information that you provide to us when you fill out inquiry forms, contact us, or interact with our website. This may include your name, email address, phone number, and property preferences.',
      icon: Info
    },
    {
      title: 'How We Use Your Information',
      content: 'We use the information collected to process your property inquiries, communicate with you about our services, and provide personalized property recommendations. We do not sell or rent your personal information to third parties.',
      icon: ShieldCheck
    },
    {
      title: 'Data Protection',
      content: 'We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Your data is stored securely and access is restricted to authorized personnel.',
      icon: ShieldOff
    }
  ];

  const contactInfo = {
    email: 'privacy@shyamestate.com',
    phone: '+91 9277101677'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-30">
      <div className="container mx-auto px-4">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-12 text-center text-estate-primary">
          Privacy Policy
        </h1>

        <section className="max-w-4xl mx-auto bg-white p-12 rounded-lg shadow-md">
          <p className="text-gray-700 mb-8">
            At Shree Shyam Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy outlines how we collect, use, and safeguard your data.
          </p>

          {sections.map((section) => (
            <div key={section.title} className="mb-8">
              <div className="flex items-center mb-4">
                <section.icon className="h-8 w-8 text-estate-primary mr-4" />
                <h2 className="text-2xl font-playfair font-bold text-estate-primary">{section.title}</h2>
              </div>
              <p className="text-gray-700">{section.content}</p>
            </div>
          ))}

          <div className="mt-12 bg-gray-100 p-6 rounded-lg">
            <h3 className="font-playfair text-xl font-bold mb-4 text-estate-primary">Contact Us</h3>
            <p className="text-gray-700 mb-2">
              If you have any questions or concerns about our Privacy Policy, please contact us:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Email: {contactInfo.email}</li>
              <li>Phone: {contactInfo.phone}</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
