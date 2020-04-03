import React from "react"

import {graphql, StaticQuery} from "gatsby";
import Review from './review';
import Grid from '@material-ui/core/Grid';

const Reviews = () => (<StaticQuery
  query={graphql`
      query ReviewsMarkdownQuery {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "review"}}}) {
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
    <Grid container spacing={3}>
      { data.allMarkdownRemark.edges.map( ({ node }) =>
        <Review key={node.id} entry={node} />
      )}
    </Grid>
  )}
/>);

export default Reviews;
