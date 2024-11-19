import React from "react";

export default function Articles() {
  const articles = [
    {
      id: 1,
      img: "../../public/article2.jpeg",
      title: "7 Ways to Decor Your Home",
      btn: "Read More",
    },
    {
      id: 2,
      img: "../../public/article2.jpeg",
      title: "Kitchen Organization",
      btn: "Read More",
    },
    {
      id: 3,
      img: "../../public/article2.jpeg",
      title: "Decor Your Bedroom",
      btn: "Read More",
    },
  ];

  return (
    <section className="px-4 py-8">
      {/* Header Section */}
      <div className="flex justify-between  items-center mb-8">
        <h1 className="text-2xl font-bold">Articles</h1>
        <button className="text-sm font-bold text-blue-600 hover:underline">
          More Articles →
        </button>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="flex flex-col  text-start  p-4 ">
            <img
              src={article.img}
              alt={article.title}
              className="w-full h-auto object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold  mb-2">{article.title}</h3>
            <button className="text-sm font-bold text-blue-600 hover:underline flex items-center">
              {article.btn} <span className="ml-1">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
