import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <div className="Layout-container">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="Layout-container__Main">
        <main>{children}</main>
      </div>
      <Footer siteAuthor={data.site.siteMetadata?.author || `Author`} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
