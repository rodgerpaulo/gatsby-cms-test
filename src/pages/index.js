import React from "react"

export default ({ data }) =>  {
    const { edges } = data.allMarkdownRemark

    return (
        edges.map(({node}) => (
            <ul>
                <li>id: {node.id}</li>
                <li>path: <a href={node.frontmatter.path}>{node.frontmatter.path}</a></li>
                <li>title: {node.frontmatter.title}</li>
                <li>date: {node.frontmatter.date}</li>
            </ul>
        ))
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            date(formatString: "MM.DD.YYYY")
          }
        }
      }
    }
  }
`;