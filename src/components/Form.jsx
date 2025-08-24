import { currencyComboboxRenderer } from '../utils/utils';

const Form = ({
    amount,
    fromCurrency,
    handleAmountChange,
    handleCurrencySelect,
}) => {
    return (
        <div>
            <input 
                type="number"
                onChange={handleAmountChange} 
                value={amount}
            >
            </input>
            {currencyComboboxRenderer(fromCurrency, handleCurrencySelect)}
        </div>
    )
};

export default Form;