import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen text-blue-950">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Making Travel Accessible for Everyone</h2>
          <p className="text-xl max-w-2xl mx-auto">
            VIAA empowers ordinary people to travel anywhere affordably — whether by public transport or private vehicle.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              To ensure safe, affordable, and convenient travel for everyone by offering complete journey assistance — from trip planning to emergency support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-950">
              <h3 className="text-2xl font-semibold mb-2">Budget-Friendly Travel</h3>
              <p>
                We connect you with public transport options and low-cost accommodations that match your needs and your budget.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-950">
              <h3 className="text-2xl font-semibold mb-2">Emergency Support</h3>
              <p>
                For private travelers, our app helps during emergencies like medical issues by providing quick ambulance access and location-based help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Smart Travel Planning</h3>
              <p>
                We map your journey using public transport and suggest places to stay within your budget.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Return Journey Plans</h3>
              <p>
                We help plan your return trip too — making sure your entire journey is seamless and affordable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">On-Road Emergency Help</h3>
              <p>
                Get instant emergency support like ambulance services through the app during unforeseen medical issues.
              </p>
            </div>
          </div>

          {/* New Inclusive Features Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Smart Assistance for Special Needs</h3>
              <p>
                Our app includes a special assistance mode for visually impaired, hearing impaired, and aged passengers — ensuring a safe and supported journey.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Audio Trip Guidance</h3>
              <p>
                Visually impaired users receive voice navigation throughout the journey until they reach their destination.
              </p>
            </div>

<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Vibration Alerts</h3>
              <p>
                For deaf and aged passengers, the app provides vibration-based alerts and notifications to ensure timely actions during the trip.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition col-span-full md:col-span-3">
              <h3 className="text-xl font-semibold mb-2">Priority Booking Access</h3>
              <p>
                Physically challenged passengers receive pre-booking preferences to ensure they get travel options tailored to their needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Viaa... Today</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Download our app and let us handle the hassle — from booking to arriving safely.
          </p>
          <button className="bg-blue-950 text-white px-6 py-3 font-semibold rounded-lg hover:bg-blue-900 transition">
            Download the App
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;