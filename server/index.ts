import * as alt from 'alt-server';
import { useRebar } from '@Server/index.js';
import { CommoditiesConfig } from './config.js';
import './api.js'

const Rebar = useRebar();

const fetchData = async function (url: string): Promise<any> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
 
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}


async function updateDataDocument(name: string, data: any) : Promise<void> {
    const document = await Rebar.document.global.useGlobal(name);
    document.setBulk(data);
}


const updateData = async (type: 'current' | 'historical'): Promise<void> => {
    const promises = Object.entries(CommoditiesConfig.commoditiesToRetrieve).map(async ([commodity, symbol]) => {
        const url = type === 'current'
            ? `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${CommoditiesConfig.apikey}`
            : `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=${CommoditiesConfig.apikey}`;

        try {
            const data = await fetchData(url);
            console.log('\x1b[34m%s\x1b[0m',`[Realworld Commodities Price]: Received ${type === 'current' ? 'Current' : 'Historical'}:`,commodity);
            await updateDataDocument(`realworld-commoditiesprice-${type}-${type === 'current' ? data[0].symbol : data.symbol}`, type === 'current' ? data[0] : data);
        } catch (error) {
            console.error('Fehler:', error);
        }
    });

    await Promise.all(promises);
};


const updateStockData = () => updateData('current');
const updateHistoricalData = () => updateData('historical');

//updateStockData()
//updateHistoricalData()

//alt.setInterval(updateStockData, CommoditiesConfig.timeBetweenUpdates);
//alt.setInterval(updateHistoricalData, 60000 * 60 * 24);