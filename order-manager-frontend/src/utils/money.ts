export const formatMoneyCents = (value: number)  => {
    return (value/100).toFixed(2).replace('.', ',')
    return (value / 100).toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}