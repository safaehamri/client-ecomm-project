const CategoryFilter = ({ onChange }) => {
  const categories = ["Furniture", "Decor", "Lighting"]; // Static or fetch dynamically
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border rounded-md"
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
