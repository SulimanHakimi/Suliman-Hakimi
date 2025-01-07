import React, { useState } from "react";

const WebsitePriceEstimator = () => {
  const [formData, setFormData] = useState({
    projectType: "",
    pages: 1,
    features: [],
    complexity: "Basic",
    design: "Template",
    technology: "HTMLCSSJS", // New state for technology selection
  });
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      features: checked
        ? [...formData.features, name]
        : formData.features.filter((feature) => feature !== name),
    });
  };

  const calculatePrice = () => {
    let price = 0;
    
    // Add price based on complexity
    if (formData.complexity === "Advanced") price += 200;
    if (formData.projectType === "E-commerce") price += 150;
    
    price += formData.pages * 20;

    formData.features.forEach((feature) => {
      switch (feature) {
        case "SEO":
          price += 50;
          break;
        case "CustomDesign":
          price += 150;
          break;
        case "Analytics":
          price += 200;
          break;
        default:
          break;
      }
    });

    if (formData.technology === "ReactJS") price += 150;
    if (formData.technology === "WordPress") price += 100;
    if (formData.technology === "Other") price += 50;

    setEstimatedPrice(price);
  };

  return (
    <section id="WebsitePriceEstimator" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-brand mb-6">
        Estimate the Price for Your Website
      </h2>
      <form className="mt-8 max-w-xl mx-auto p-8">
        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="projectType"
          >
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Project Type</option>
            <option value="Business">Business</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Portfolio">Portfolio</option>
            <option value="Blog">Blog</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="pages"
          >
            Number of Pages
          </label>
          <input
            type="number"
            id="pages"
            name="pages"
            value={formData.pages}
            onChange={handleChange}
            min="1"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <fieldset className="mb-6">
          <legend className="block text-sm font-medium text-gray-600">
            Select Features
          </legend>
          <div className="space-y-3 mt-2 flex items-center justify-around gap-5">
            <label className="inline-flex items-center mt-2">
              <input
                type="checkbox"
                name="SEO"
                checked={formData.features.includes("SEO")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">SEO</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="CustomDesign"
                checked={formData.features.includes("CustomDesign")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">Custom Design</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="Analytics"
                checked={formData.features.includes("Analytics")}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">Analytics Integration</span>
            </label>
          </div>
        </fieldset>

        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="complexity"
          >
            Complexity
          </label>
          <select
            id="complexity"
            name="complexity"
            value={formData.complexity}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Basic">Basic</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="design"
          >
            Design Type
          </label>
          <select
            id="design"
            name="design"
            value={formData.design}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Template">Template</option>
            <option value="Custom">Custom</option>
          </select>
        </div>

        {/* New Technology Select Field */}
        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="technology"
          >
            Technology
          </label>
          <select
            id="technology"
            name="technology"
            value={formData.technology}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="HTMLCSSJS">HTML/CSS/JS</option>
            <option value="ReactJS">React.js</option>
            <option value="WordPress">WordPress</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={calculatePrice}
            className="px-6 py-3 mt-5 bg-brand text-white font-semibold rounded-md hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Get Price Estimate
          </button>
        </div>
      </form>

      {estimatedPrice !== null && (
        <p className="mt-6 text-center text-xl font-semibold text-gray-800">
          Estimated Price for Your Website:{" "}
          <span className="text-green-500">${estimatedPrice}</span>
        </p>
      )}
    </section>
  );
};

export default WebsitePriceEstimator;
