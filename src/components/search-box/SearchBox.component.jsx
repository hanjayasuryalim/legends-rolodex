import React from "react";

import './SearchBox.style.css'
import PropTypes from "prop-types";

export const SearchBox = ({placeholder,handleChange}) => {
    return <input   type="search"
                    className="search"
                    placeholder={placeholder}
                    onChange={handleChange}
    />
}

SearchBox.propTypes = {
    placeholder: PropTypes.string,
    handleChange: PropTypes.func
}
