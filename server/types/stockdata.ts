export type StockData = {
    symbol: string;
    name: string;
    price: number;
    changesPercentage: number;
    change: number;
    dayLow: number;
    dayHigh: number;
    yearHigh: number;
    yearLow: number;
    marketCap: number | null;
    priceAvg50: number;
    priceAvg200: number;
    exchange: string;
    volume: number;
    avgVolume: number;
    open: number;
    previousClose: number;
    eps: number | null;
    pe: number | null;
    earningsAnnouncement: string | null;
    sharesOutstanding: number | null;
    timestamp: number;
}