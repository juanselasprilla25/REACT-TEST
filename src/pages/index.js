import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1
        style={{
          marginBottom: `45px`,
        }}
      >
        ToDo List & Map Changes Tracker
      </h1>
      <div className="buttonGroup">
        <Link to="/todo/" className="button" tabIndex="0">
          ToDo App
        </Link>
        <Link to="/map/" className="button" tabIndex="0">
          Map Tracker
        </Link>
      </div>
      <br />
    </Layout>
  )
}

// <!-- FontAwesome -->
//     <script
//       src="https://kit.fontawesome.com/e0e17162fa.js"
//       crossorigin="anonymous"
//     ></script>
//     <!-- FontAwesome -->
