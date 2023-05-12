import React from "react";
import PropTypes from "prop-types";

function ImagePadding({ src, padding }) {
  return (
    <div style={{ padding }}>
      <img src={src} alt="Banner" />
    </div>
  );
}

ImagePadding.propTypes = {
  src: PropTypes.string.isRequired,
  padding: PropTypes.string,
};

export default ImagePadding;
