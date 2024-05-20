import React, { useState } from "react";
import sitemapWork from "../../../sitemapWork";
import "../../../styles/SitemapDesktop.css";
import { FiMinus, FiPlus } from 'react-icons/fi';
function SitemapWorkDesktop() {
  const [expanded, setExpanded] = useState([]);
  const toggleExpand = (index) => {
    if (expanded.includes(index)) {
      setExpanded(expanded.filter((item) => item !== index));
    } else {
      setExpanded([...expanded, index]);
    }
  };

  const renderNestedLinks = (links, parentIndex) => {
    return links.map((link, index) => {
      const isExpanded = expanded.includes(parentIndex + "-" + index);

      return (
        <li key={index}>
          <div className="flex-div">
            <span className={isExpanded ? "extended-title" : ""}>
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
          </div>

          {link.nestedLinks && isExpanded && (
            <ul>
             {renderNestedLinks(link.nestedLinks, parentIndex + "-" + index)}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <div className="sidebar-main-div-global">
      <ul>
        {sitemapWork.map((section, index) => {
          const isExpanded = expanded.includes(index);

          return (
            <li key={index}>
              <div className="flex-div">
                <span className={isExpanded ? "extended-title" : ""}>
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
              </div>
              {section.nestedLinks && isExpanded && (
                <ul> {renderNestedLinks(section.nestedLinks, index)}</ul>
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

export default SitemapWorkDesktop;
