import React from 'react';
import PropTypes from 'prop-types';

// Reusable Component for all products listing
export const EachProduct = ({product}) => {
  return (
    <li>{product.product}</li>
  );
};

EachProduct.propTypes = {
  product: PropTypes.object.isRequired
};