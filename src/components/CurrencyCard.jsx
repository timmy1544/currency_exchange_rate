import { currencyComboboxRenderer } from '../utils/utils';

const CurrencyCard = ({
    id,
    value,
    toCurrency,
    handleToCurrencySelect,
    handleDeleteButtonClick,
}) => {

    const onChange = (e) => {
        handleToCurrencySelect(e.target.value, id)
    }

    return (
        <div key={id}>
            {value}
            {currencyComboboxRenderer(toCurrency, onChange)}
            {id !== 0 && <button onClick={() => handleDeleteButtonClick(id)}>X</button>}
        </div>
    )
};

export default CurrencyCard;