import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

export default function NavBar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          copyright
          description
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata;

  return (
    <div>
      <nav>
        <h1>{title}</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">PortFolio Projects</Link>
        </div>
      </nav>
    </div>
  )
}
