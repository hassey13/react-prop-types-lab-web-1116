const React = require('react');

class Product extends React.Component {

  render() {
    return (
      <div>
        <ul>
         <li>{this.props.name}</li>
         <li>{this.props.producer}</li>
         <li>{this.props.hasWatermark}</li>
         <li>{this.props.color}</li>
         <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }

}

  Product.defaultProps = {
    hasWatermark: false,
  };

Product.propTypes = {
   name: React.PropTypes.string.isRequired,
   producer: React.PropTypes.string,
   hasWatermark: React.PropTypes.bool,
   color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
   weight: function(props, propKey) {
    if (props[propKey] === undefined) {
      return new Error ('You must enter a weight')
    }
    else if (isNaN(props[propKey])) {
      return new Error ('Weight must be a Number')
    }
    else if (props[propKey] < 80 || props[propKey] > 300) {
      return new Error ("Weight must be between 80 and 300")
    }
  }
};

module.exports = Product;
