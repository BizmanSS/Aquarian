import React, { useState } from "react";
import sitemapEmployers from "../../../sitemapEmployers";
import "../../../styles/SitemapDesktop.css";
function SitemapEmployersDesktop() {
  const [expanded, setExpanded] = useState([]);
  const arrowIcon = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 448 512"
      class="arrow-icon"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
    </svg>
  );
  const arrowIconRotate = (
    <svg
      stroke="#009889"
      fill="#009889"
      stroke-width="0"
      viewBox="0 0 448 512"
      class="arrow-icon"
      height="1em"
      width="1em"
      style={{ transform: "rotate(90deg)" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
    </svg>
  );

  const toggleExpand = (index) => {
    if (expanded.includes(index)) {
      setExpanded([]);
    } else {
      setExpanded([index]);
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
                {isExpanded ? arrowIconRotate : arrowIcon}
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
        {sitemapEmployers.map((section, index) => {
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
                    {isExpanded ? arrowIconRotate : arrowIcon}
                  </button>
                )}
              </div>
              {section.nestedLinks && isExpanded && (
                <ul>{renderNestedLinks(section.nestedLinks, index)}</ul>
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

export default SitemapEmployersDesktop;
