import { currencyNameObj } from "../constants/currencyNameObj";

export const getValidCurrencyList = () => {
    const obj = {};
    Object.keys(currencyNameObj).forEach(currency => {
        if (currencyNameObj[currency] && currencyNameObj[currency].length) {
            obj[currency]  = currencyNameObj[currency]
        }
    })

    const currencyArr = Object.keys(obj).map(key => (
        {
            value: key,
            label: obj[key],
        }
    )).sort((a, b) => {
        if (a.label < b.label) {
            return -1; // a comes first
        }
        if (a.label > b.label) {
            return 1; // b comes first
        }
        return 0; // names are equal
    })

    return currencyArr
}

export const currencyComboboxRenderer = (value, handleCurrencySelect) => {
        const optionsList = getValidCurrencyList();
        return (
            <select type='combobox' value={value} onChange={handleCurrencySelect}>
                {optionsList.map(option => (
                    <option value={option.value} key={option.value}>{option.label}</option>
                ))}
            </select>
        )
}
