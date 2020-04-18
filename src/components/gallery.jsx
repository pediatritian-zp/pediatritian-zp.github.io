import React from "react"
import {StaticQuery} from "gatsby";
import GridGallery from 'react-grid-gallery';

function formatGalleryImages(fileNodes) {
  return fileNodes.map(({node}) => ({
    src: node.publicURL,
    thumbnail: node.childImageSharp.resize.src,
    thumbnailWidth: node.childImageSharp.resize.width,
    thumbnailHeight: node.childImageSharp.resize.height,
  }))
}

const Gallery = () => (
  <StaticQuery
    query={graphql`
      query GalleryQuery {
        allFile(filter:{
          relativeDirectory: {
            eq: "photos/gallery"
          }
        }) {
          edges {
            node {
              id
              name
              publicURL
              relativePath
              prettySize
              extension
              birthTime(fromNow: true)
              childImageSharp {
                original {
                  width
                  height
                }
                resize(height: 240) {
                  width
                  height
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div style={{
        display: "block",
        minHeight: "1px",
        width: "100%",
        overflow: "auto"}}
        className="hero-unit">
        {/*<h3 className='md-cell md-cell--12'>Participants</h3>*/}
        <GridGallery
          images={formatGalleryImages(data.allFile.edges)}
          rowHeight={240}
          backdropClosesModal={true} />
      </div>
    )}
  />
);


export default Gallery;
