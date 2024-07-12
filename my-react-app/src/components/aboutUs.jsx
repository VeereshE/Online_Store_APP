import React from "react";

const AboutElemets = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Online Show</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        </p>
        <p className="text-gray-700">
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our E-commerce Store</h2>
        <p className="text-gray-700 mb-4">
          Nulla et lectus vestibulum urna fringilla ultrices. Phasellus eu
          tellus sit amet tortor gravida placerat. Integer sapien est, iaculis
          in, pretium quis, viverra ac, nunc. Praesent eget sem vel leo ultrices
          bibendum.
        </p>
        <p className="text-gray-700">
          Cras hendrerit vehicula dolor. Aliquam lobortis. Curabitur at ipsum ac
          tellus semper interdum. Mauris mattis ullamcorper velit.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          For inquiries or more information, feel free to reach out to us:
        </p>
        <ul className="text-gray-700">
          <li>Email: info@example.com</li>
          <li>Phone: +1234567890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutElemets;
