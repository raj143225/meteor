import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import {withTracker} from 'meteor/react-meteor-data';
import {Products} from '../../../api/products';


class ProductsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };

    this.removeProduct = this.removeProduct.bind(this);
  }

  removeProduct = (productId) => {
    this.setState({
      loading: !this.state.loading
    });
    setTimeout(() => Meteor.call('products.remove', productId, (error, result) => {
      if (result) {
        toastr.success('Successfully deleted');
      } else {
        toastr.error('Some thing went wrong please try again');
      }
      this.setState((prevState) => ({
        loading: !prevState.loading
      }));
    }), 1000);
    return true;
  };

  renderProducts = () => (
    this.props.allProducts.map((product) => (
      <tr key={product._id}>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
        <td>{product.price}</td>
        <td><span className="glyphicon glyphicon-remove" onClick={() => this.removeProduct(product._id)}
                  aria-hidden="true"/></td>
      </tr>
    ))
  );

  render = () => {
    const {loading} = this.state;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-6">
            <h3>Products</h3>
          </div>
          <div className="col-sm-6 list-loader">
            {loading && <ReactLoading type="spin" color="#444" height={30} width={30}/>}
          </div>
        </div>
        <table className="table table-responsive table-striped">
          <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {this.renderProducts()}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}


export default withTracker(() => {
  return {
    allProducts: Products.find({}, {sort: {createdAt: -1}}).fetch(),
  };
})(ProductsList);