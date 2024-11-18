import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: "🚚",
      title: "Free Shipping",
      description: "Order above $200",
    },
    {
      id: 2,
      icon: "💳",
      title: "Money-back",
      description: "30 days guarantee",
    },
    {
      id: 3,
      icon: "🔒",
      title: "Secure Payments",
      description: "Secured by Stripe",
    },
    {
      id: 4,
      icon: "📞",
      title: "24/7 Support",
      description: "Phone and Email support",
    },
  ];

  return (
    <div className=" w-full grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-50">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="   flex flex-col items-center text-center  bg-white p-6 rounded-lg shadow-md"
        >
          <span className="text-4xl mb-4">{feature.icon}</span>
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          <p className="text-sm text-gray-500">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
