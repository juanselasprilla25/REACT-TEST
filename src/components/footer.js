import React from "react"
import PropTypes from "prop-types"

const Footer = ({ siteAuthor }) => (
  <footer
    style={{
      background: `#179eff`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        color: "white",
      }}
    >
      <h4>
        Create by {siteAuthor} © {new Date().getFullYear()} & Built with{" "}
        {/* <Link to="https://www.gatsbyjs.com">Gatsby</Link> */}
        <a
          href="https://www.gatsbyjs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </h4>
    </div>
  </footer>
)

Footer.propTypes = {
  siteAuthor: PropTypes.string,
}

Footer.defaultProps = {
  siteAuthor: ``,
}

export default Footer
