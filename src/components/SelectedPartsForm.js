// SelectedPartsForm.js
import React from 'react';
import './SelectedPartsForm.css';

import cpuFanPng from '../icons/cpu-fan.png';
import cpuPng from '../icons/cpu.png';
import motherboardPng from '../icons/motherboard.png';
import memoryPng from '../icons/ram.png';
import gpuPng from '../icons/gpu.png';
import casePng from '../icons/case.png';
import psuPng from '../icons/psu.png';
import hddPng from '../icons/hdd.png';



const SelectedPartsForm = ({ selectedParts }) => {
  return (
    <div className="selected-parts-form">
      <h2>My part list</h2>
      <div className='cardDesc'>
        <h3>Component</h3>
        <h3>Selected Part</h3>
      </div>
      <div className='partCard'>
        <img src={cpuPng}/>
        <button>+Select</button>
      </div>
      <div className='partCard'>
        <img src={motherboardPng}/>
        <button>+Select</button>
      </div>
      <div className='partCard'>
        <img src={memoryPng}/>
        <button>+Select</button>
      </div>
      <div className='partCard'>
        <img src={gpuPng}/>
        <button>+Select</button>
      </div>
      <div className='partCard'>
        <img src={casePng}/>
        <button>+Select</button>
      </div>
      <div className='partCard'>
        <img src={psuPng}/>
        <button>+Select</button>
      </div>
      <div className='partCard'>
        <img src={hddPng}/>
        <button>+Select</button>
      </div>
      <div className='partCard'>
        <img src={cpuFanPng}/>
        <button>+Select</button>
      </div>
    </div>
  );
};

export default SelectedPartsForm;
