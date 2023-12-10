import React, { useEffect, useState } from "react";

const Server = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h3>All Category</h3>
      {categories.map((category) => (
        <li>{category.name}</li>
      ))}
    </div>
  );
};

export default Server;
