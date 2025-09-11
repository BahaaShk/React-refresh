import { useState } from "react";
import './App.css'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="border-b border-gray-600">
      <div
        className="flex justify-between items-center py-4 cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <h2 className="text-lg font-medium">{title}</h2>
        <span className="text-xl font-bold select-none">
          {isActive ? "-" : "+"}
        </span>
      </div>

      {isActive && (
        <p className="pb-4 text-gray-300 leading-snug">{content}</p>
      )}
    </section>
  );
};

export default Accordion;
