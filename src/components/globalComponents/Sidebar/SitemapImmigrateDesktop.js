import React, { useState } from "react";
import sitemapImmigrate from "../../../sitemapImmigrate";
import { FiMinus, FiPlus } from 'react-icons/fi';
import "../../../styles/SitemapDesktop.css";
function SitemapImmigrateDesktop() {
  const [expanded, setExpanded] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState([]);
  const toggleExpand = (index) => {
    if (expanded === index) {
      setExpanded(null);
      setExpandedIndex(null); // Close both nestedLinks and nested
    } else {
      setExpanded(index);
      setExpandedIndex(null); // Close nested when nestedLinks is opened
    }
  };
  
  const toggleExpandIndex = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const renderNestedLinks = (links, parentIndex) => {
    return links.map((link, index) => {
      const isExpanded = expanded === parentIndex + "-" + index;
      const isExpandedIndex = expandedIndex === parentIndex + "-" + index;

      return (
        <li key={index}>
          <div className="flex-div">
            <span className={isExpanded || isExpandedIndex ? "extended-title" : ""}>
             {link.title}
            </span>
            {link.nestedLinks && (
              <button onClick={() => toggleExpand(parentIndex + "-" + index)}>
              {isExpanded ? 
                <FiMinus className='text-lg text-[#01997E] hover:scale-115 hover:text-[#01997E]' /> 
                :
                <FiPlus className='text-lg hover:scale-115 hover:text-[#01997E]' />
              }
              </button>
            )}
            {link.nested && (
              <button onClick={() => toggleExpandIndex(parentIndex + "-" + index)}>
              {isExpandedIndex ? 
                <FiMinus className='text-lg text-[#01997E] hover:scale-115 hover:text-[#01997E]' /> 
                :
                <FiPlus className='text-lg hover:scale-115 hover:text-[#01997E]' />
              }
              </button>
            )}
          </div>

          {link.nestedLinks && isExpanded && (
            <ul>
             {renderNestedLinks(link.nestedLinks, parentIndex + "-" + index)}
            </ul>
          )}
          {link.nested && isExpandedIndex && (
            <ul>
             {renderNestedLinks(link.nested, parentIndex + "-" + index)}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <div className="sidebar-main-div-global">
      <ul>
        {sitemapImmigrate.map((section, index) => {
          const isExpanded = expanded === index;
          const isExpandedIndex = expandedIndex === index;

          return (
            <li key={index}>
              <div className="flex-div">
                <span className={isExpanded || isExpandedIndex ? "extended-title" : ""}>
                  <div className="side"></div>
                  {section.title}
                </span>
                {section.nestedLinks && (
                  <button onClick={() => toggleExpand(index)}>
                  {isExpanded ? 
                    <FiMinus className='text-lg text-[#01997E] hover:scale-115 hover:text-[#01997E]' /> 
                    :
                    <FiPlus className='text-lg hover:scale-115 hover:text-[#01997E]' />
                  }
                  </button>
                )}
                {section.nested && (
                  <button onClick={() => toggleExpandIndex(index)}>
                  {isExpandedIndex ? 
                    <FiMinus className='text-lg text-[#01997E] hover:scale-115 hover:text-[#01997E]' /> 
                    :
                    <FiPlus className='text-lg hover:scale-115 hover:text-[#01997E]' />
                  }
                  </button>
                )}
              </div>
              {section.nestedLinks && isExpanded && (
                <ul> {renderNestedLinks(section.nestedLinks, index)}</ul>
              )}
              {section.nested && isExpandedIndex && (
                <ul> {renderNestedLinks(section.nested, index)}</ul>
              )}
              <div className="line">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="214"
                  height="2"
                  viewBox="0 0 214 2"
                  fill="none"
                >
                  <path d="M0 1H213.5" stroke="#009889" stroke-width="0.6" />
                </svg>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SitemapImmigrateDesktop;
