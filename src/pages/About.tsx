import { Building, Star, Shield, Handshake, Users } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'We believe in honest, transparent dealings and always put our clients\' interests first.',
      icon: Shield
    },
    {
      title: 'Client Focus',
      description: 'We\'re dedicated to understanding your unique needs and finding solutions that work for you.',
      icon: Users
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from customer service to property selection.',
      icon: Star
    },
    {
      title: 'Ownership',
      description: 'We have direct ownership of our land properties, ensuring clear titles and hassle-free transactions.',
      icon: Handshake
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-30">
      <div className="container mx-auto px-4">
        <section className="mb-16 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-estate-primary">
            Shree Shyam Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A trusted partner in your land property journey, helping clients find their perfect properties based on their specific requirements.
          </p>
        </section>

        <section className="mb-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-3xl font-bold mb-6 text-estate-primary">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Shree Shyam Group was established with a clear mission: to help people find land properties that meet their specific needs and preferences. 
              Under the leadership of Rahul Mishra, who heads our branch at Engineering Chauraha, and senior staff member Rubi Sharma, we have built a reputation for excellence and trustworthy service.
            </p>
            <p className="text-gray-700">
              We own all the land properties we sell, giving you confidence in clear title and transparent dealings. 
              If we don't have land in your preferred area, our team will assist you in finding options that meet your requirements.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Building className="h-12 w-12 text-estate-primary mr-4" />
              <h3 className="text-2xl font-bold text-estate-primary">3+ Years of Service</h3>
            </div>
            <p className="text-gray-600">
              Our approach combines market expertise with a deep understanding of our clients' needs. 
              We focus on building relationships based on trust and delivering value through every interaction.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-playfair text-3xl font-bold mb-12 text-center text-estate-primary">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div 
                key={value.title} 
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="rounded-full bg-estate-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-estate-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-4 text-estate-primary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
