import React from "react"
import "../styles/tailwind.css"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/use-sitemetadata"

const TitleAndDescription = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="mx-auto max-w-3xl p-12">
        {children}
        <h3>Footer</h3>
        {/*         <TitleAndDescription title={title} description={description} /> */}
      </div>
    </>
  )
}
