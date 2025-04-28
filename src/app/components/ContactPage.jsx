import ContactForm from "./ContactForm"; // Import the client-side component

export default function ContactPage() {
  return (
    <div>
      {/* Static Layout */}
      <section className="relative py-20 px-6 bg-black text-white">
        <h1 className="text-6xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-lg text-center mb-10">We would love to hear from you! Please fill in the form below.</p>
        
        {/* Call the Client Component */}
        <ContactForm />
      </section>
    </div>
  );
}
