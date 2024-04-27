import React, {useState} from "react";
import PartSelector from "./PartSelector.js";
import SelectedPartsForm from "./SelectedPartsForm.js";
import './PCBuilder.css'
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const defaultPartSelections = {
    cpu: null,
    motherboard: null,
    memory: null,
    gpu: null,
    case: null,
    psu: null,
    storage: null,

  };

const PCBuilder = () => {
    const [selectedCategory, setSelectedCategory] = useState('cpu');
  const [selectedParts, setSelectedParts] = useState(defaultPartSelections);

    const handleSelectPart = (part) => {
        setSelectedParts(prev => ({
               ...prev,
                [part.category]: part
        }))
    }

    const handleChangeCategory = (category) => {
        setSelectedCategory(category);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
   
        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(selectedParts)
            });

            if(response.ok) {
                
            } else {

            }
        }catch(err) {
            console.log(err);
        }
    }

    return (
        <>
        <Navbar/>
        <div className="builder-container">
            <div className="pc-builder">
                <h1>Build Your Custom PC</h1>
                <div className="categories">
                    {Object.keys(defaultPartSelections).map(category => (
                        <button key={category} onClick={() => handleChangeCategory(category)}>
                        {category.toUpperCase()}
                    </button>
                    ))}
                </div>
                <PartSelector category={selectedCategory} onSelectPart={handleSelectPart}/>
            </div>
            <SelectedPartsForm selectedParts={selectedParts} />
        </div>
            <Footer/>
        </>
      );
    };


export default PCBuilder;