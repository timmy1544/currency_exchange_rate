
import './CurrencyAppContainer.scss';
import { useState, useEffect } from 'react';

import Form from './Form';
import CurrencyCardList from './CurrencyCardList';

const DEFAULT_CLASSNAME = 'app-container';
const DEFAULT_FROM_CURRENCY = 'usd'

const CURRENCY_API = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies'

const CurrencyAppContainer = () => {

    const [amount, setAmount] = useState(100);
    const [fromCurrency, setFromCurrency] = useState(DEFAULT_FROM_CURRENCY);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [exchangeRate, setExchangeRate] = useState({});

    useEffect(() => {
        if (fromCurrency) {
            setIsLoading(true)
            fetch(`${CURRENCY_API}/${fromCurrency}.json`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {                
                setIsLoading(false)
                setExchangeRate(data[fromCurrency])
            })
            .catch((error) => {
                setIsLoading(false)
                setError(error)
            })
        }
    }, [fromCurrency])

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const handleCurrencySelect = (e) => {
        setFromCurrency(e.target.value)
    }

    if (error) {
        return (
            <div>{error}</div>
        )
    }

    return (
        <div className={DEFAULT_CLASSNAME}>
            <Form 
                amount={amount}
                fromCurrency={fromCurrency}
                handleAmountChange={handleAmountChange}
                handleCurrencySelect={handleCurrencySelect}
            />
            {isLoading ? <div>Loading...</div> : 
                <CurrencyCardList 
                    amount={amount}
                    exchangeRate={exchangeRate}
                />
            }
        </div>
    )
};

export default CurrencyAppContainer;