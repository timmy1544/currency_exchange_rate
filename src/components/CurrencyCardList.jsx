import { useState, useCallback } from 'react';
import CurrencyCard from './CurrencyCard';

const DEFAULT_TO_CURRENCY = 'eur'

const CurrencyCardList = ({
    amount,
    exchangeRate,
}) => {
    const [toCurrencyArr, setToCurrencyArr] = useState([DEFAULT_TO_CURRENCY]);

    const handleToCurrencySelect = (value, index) => {
        const newArr = toCurrencyArr.slice();
        newArr[index] = value;
        setToCurrencyArr(newArr);
    }

    const handleAddButtonClick = () => {
        const newArr = toCurrencyArr.slice();
        newArr.push(['eur'])
        setToCurrencyArr(newArr);
    }

    const handleDeleteButtonClick = (index) => {
        const newArr = toCurrencyArr.slice();
        newArr.splice(index, 1)
        setToCurrencyArr(newArr);
    }

    const getExchangedAmount = useCallback((currency) => 
        (amount * exchangeRate[currency]).toFixed(2)
    ,[amount, exchangeRate, toCurrencyArr]);

    return (
        <div>
            {toCurrencyArr.map((currency, index) => (
                <CurrencyCard
                    id={index}
                    key={index}
                    toCurrency={currency}
                    value={getExchangedAmount(currency)}
                    handleToCurrencySelect={handleToCurrencySelect}
                    handleDeleteButtonClick={handleDeleteButtonClick}
                />
            ))}
            <button onClick={handleAddButtonClick}>+</button>
        </div>
    )
};

export default CurrencyCardList;