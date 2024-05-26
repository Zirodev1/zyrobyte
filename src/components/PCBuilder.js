// PCBuilder.js
import React, { useState } from "react";
import PartSelector from "./PartSelector.js";
import SelectedPartsForm from "./SelectedPartsForm.js";
import "./PCBuilder.css";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const defaultPartSelections = {
  cpu: null,
  cpuCooler: null,
  motherboard: null,
  memory: null,
  gpu: null,
  case: null,
  psu: null,
  storage: null,
};

const PCBuilder = () => {
  const [selectedCategory, setSelectedCategory] = useState("cpu");
  const [selectedParts, setSelectedParts] = useState(defaultPartSelections);

  const handleSelectPart = (category, part) => {
    setSelectedParts((prev) => ({ ...prev, [category]: part }));
  };

  const handleDeletePart = (category) => {
    setSelectedParts((prev) => ({ ...prev, [category]: null }));
  };

  const handleChangeCategory = (category) => {
    setSelectedCategory(category);
  };



  return (
    <>
      <Navbar />
      <div className="container-xxl">
        <div className="pc-builder">
          <h1>Build Your Custom PC</h1>
          <div className="categories">
            {Object.keys(defaultPartSelections).map((category) => (
              <button 
              className={`category-button ${selectedCategory === category ? "category-button-active" : ""}`}
              key={category}
              onClick={() => handleChangeCategory(category)}
              >
                {category.toUpperCase()}
              </button>
            ))}
          <PartSelector
            category={selectedCategory}
            onSelectPart={handleSelectPart} selectedParts={selectedParts}
            />
            </div>
      </div> 
          <SelectedPartsForm
            selectedParts={selectedParts}
            onDeletePart={handleDeletePart}
            defaultPartSelections={defaultPartSelections}
          />
      </div>
      <Footer />
    </>
  );
};

export default PCBuilder;
