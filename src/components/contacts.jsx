import React from "react"
import {graphql, StaticQuery} from 'gatsby';
import Grid from '@material-ui/core/Grid';
import {Hidden} from '@material-ui/core';

const Contacts = () =>(<StaticQuery
  query={graphql`
      query ContactsQuery {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "contacts"}}}) {
          edges {
            node {
              id
              html
              excerpt(format: HTML)
              frontmatter {
                name,
                phone,
                description
              }
            }
          }
        }
      }
    `}
  render={data => {
    const style = {
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: '#025930',
      height: '2.5em',
      color: 'white',

      display: 'flex',
      justifyContent: 'space-evenly'
    };

    const info = data.allMarkdownRemark.edges[0].node.frontmatter;

    return (
    <Grid container spacing={3} style={style}>
      <Grid item>
        {info.description}: {info.phone}
      </Grid>
      <Hidden smDown>
        <Grid item>
          {info.name}
        </Grid>
      </Hidden>
    </Grid>
  )}}
/>);

export default Contacts;
