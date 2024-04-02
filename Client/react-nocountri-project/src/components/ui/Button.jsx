import PropTypes from 'prop-types'

export const Button = ({ onClick, children, className }) => {
    return (
      <button
        onClick={onClick}
        className={`${className}`}
      >
        {children}
      </button>
    )
  }

  Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,    
    className: PropTypes.string    
  };