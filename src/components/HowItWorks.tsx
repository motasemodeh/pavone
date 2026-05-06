import React from 'react';
import { Wallet, ImagePlus, Tag } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  { 
    id: 1, 
    icon: <Wallet size={32} />, 
    title: 'Register Account', 
    desc: 'Create your vendor or customer account to start exploring our premium collections.' 
  },
  { 
    id: 2, 
    icon: <ImagePlus size={32} />, 
    title: "List your products", 
    desc: 'As a vendor, upload your high-quality cigarette and cigar products with ease.' 
  },
  { 
    id: 3, 
    icon: <Tag size={32} />, 
    title: "Start selling", 
    desc: 'Receive inquiries and close deals with interested customers globally.' 
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          {steps.map(step => (
            <div key={step.id} className="step-card">
              <div className="step-icon">
                {step.icon}
              </div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
