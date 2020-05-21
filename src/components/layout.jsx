/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./theme.css"
import MuiLink from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2em`,
          }}
        >
          <Typography variant="body2" color="textSecondary" align="center">
            <MuiLink color="inherit" href="https://github.com/lifecoderua">
              Site developed with
              <FavoriteIcon
                style={{
                  fontSize: '0.7em',
                  marginLeft: '5px',
                  color: 'rgb(220, 0, 78)',
                }}
              />
            </MuiLink>
          </Typography>
        </footer>
      </div>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
