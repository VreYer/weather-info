import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import './cities.css';

const { Option } = Select;

/**
 * Component list of cities for managing cities.
 * It has a default value like `Yerevan,AM`
 */
const CitiesList = ({ data, defaultValue, onChangeCities }) => {
    return (
        <Select defaultValue={defaultValue} className="cities-list" onSelect={onChangeCities}>
            {data && data.map((item, index) => (
                <Option 
                    key={index}
                    value={item}
                >
                    {item}
                </Option>
            ))}
        </Select>
    )
}

CitiesList.propTypes = {
    /** Cities data for the select element */
    data: PropTypes.array,
    /** Default city */
    defaultValue: PropTypes.string,
    /** Function called when the user changes the select option */
    onChangeCities: PropTypes.func
};

export default CitiesList;
