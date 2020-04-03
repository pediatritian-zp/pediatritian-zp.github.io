import React from "react"

const SectionContent = ({entry}) => (
  <div dangerouslySetInnerHTML={{ __html: entry.html }} />
);

export default SectionContent;
