import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      color: '#85BF4B',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `2.45rem 1.0875rem 0`,
      }}
    >
      <h1 style={{
        margin: 0,
        color: '#222F40',
      }}>
          {siteTitle}
      </h1>

      <h3>Галич Андрей Радиевич</h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
