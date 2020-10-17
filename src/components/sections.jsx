import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import Section from './section';
import SectionContent from './sectionContent';

const Sections = () => (<StaticQuery
  query={graphql`
      query SectionsMarkdownQuery {
        allMarkdownRemark(
          filter: {frontmatter: {type: {eq: "section"}}}, 
          sort: {order: ASC, fields: frontmatter___order}
          ) {
          edges {
            node {
              id
              html
              excerpt(format: HTML)
              frontmatter {
                type
                order
              }
            }
          }
        }
      }
    `}
  render={data => (
    <div>
      { data.allMarkdownRemark.edges.map( ({ node }) =>
        <Section key={node.id}>
          <SectionContent key={node.order} entry={node} />
        </Section>
      )}
    </div>
  )}
/>);

export default Sections;
