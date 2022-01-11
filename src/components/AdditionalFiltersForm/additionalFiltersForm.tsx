import React from 'react';

interface IAdditionalFiltersForm {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AdditionalFiltersForm: React.FC<IAdditionalFiltersForm> = ({handleChange}) => {

    const currencies = ['USD', 'RUB', 'ALL']
    const colors = ['red', 'green', 'blue', 'ALL']

    return (
        <div>
            {currencies.map(currency => {
                return (
                    <div key={currency}>
                        <input onChange={handleChange} name={currency} id={currency} value={currency} type="checkbox"/>
                        <label htmlFor={currency}>{currency}</label>
                    </div>
                )
            })}
            {colors.map(color => {
                return (
                    <div key={color}>
                        <input onChange={handleChange} name={color} id={color} value={color} type="checkbox"/>
                        <label htmlFor={color}>{color}</label>
                    </div>
                )
            })}
        </div>
    );
};

export default AdditionalFiltersForm;
