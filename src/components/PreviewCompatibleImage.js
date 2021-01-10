import React from 'react';
import Img from 'gatsby-image';

const PreviewCompatibleImage = ({ image, ...props }) => {
  const { alt, ...otherProps } = props;

  if (!!image && typeof image === 'string') {
    return <img alt={alt} {...otherProps} src={image} />;
  } else if (!!image && !!image.childImageSharp) {
    return <Img {...props} fluid={image.childImageSharp.fluid} />;
  }

  return null;
};

export default PreviewCompatibleImage;
