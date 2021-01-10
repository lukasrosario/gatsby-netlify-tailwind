import React from 'react';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        logos={data.logos}
        me={data.me}
        inspiration={data.inspiration}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
