import React, { useState } from "react";
import sitemap from "../../../sitemap";
import "../../../styles/SitemapDesktop.css";
function SitemapDesktop() {
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
      stroke="currentColor"
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
      setExpanded(expanded.filter((i) => !i.startsWith(index)));
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
                {isExpanded ? arrowIconRotate : arrowIcon}
              </button>
            )}
          </div>

          {link.nestedLinks && (
            <>
              <ul style={{ display: isExpanded ? "block" : "none" }}>
                {renderNestedLinks(link.nestedLinks, parentIndex + "-" + index)}
              </ul>
            </>
          )}
        </li>
      );
    });
  };

  return (
    <div className="sidebar-main-div-global">
      <>
        <ul>
          {sitemap.map((section, index) => {
            return (
              <li key={index}>
                {section.nestedLinks && (
                  <>
                    <ul>{renderNestedLinks(section.nestedLinks, index)}</ul>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </>
    </div>
  );
}

export default SitemapDesktop;
