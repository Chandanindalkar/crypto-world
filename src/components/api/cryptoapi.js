
export const CoinList = (currency) =>
`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
`https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = () =>
`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export const AllCoins = (currency) =>
`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&sparkline=false`;

export const TopSeven = () =>
`https://api.coingecko.com/api/v3/search/trending`

export const VolInc = () =>
`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=volume_asc&per_page=5&page=1&price_change_percentage=24h`

export const VolDec = () =>
`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=volume_desc&per_page=5&page=1&price_change_percentage=24h`
