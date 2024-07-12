import { useRebar } from '@Server/index.js';
import { CommoditiesConfig } from './config.js';
import { StockData } from './types/stockdata.js';
import { HistoricalData } from './types/historicaldata.js';

const Rebar = useRebar();

export function useCommoditiesAPI() {
    const getCommoditySymbol = (name: string): string | undefined => {
        const symbol = CommoditiesConfig.commoditiesToRetrieve[name];
        if (!symbol) {
            console.warn('\x1b[33m%s\x1b[0m', `[Realworld Commodities Price][Warning]: Commodity "${name}" not available. Check config.ts -> commoditiesToCall.`);
        }
        return symbol;
    };

    const getDocument = async <T>(name: string, type: 'current' | 'historical'): Promise<T | undefined> => {
        const symbol = getCommoditySymbol(name);
        if (!symbol) return undefined;

        const document = await Rebar.document.global.useGlobal<T>(`realworld-commoditiesprice-${type}-${symbol}`);
        return document.get();
    };

    async function getCommoditiesList() {
        return CommoditiesConfig.commoditiesToRetrieve;
    }

    async function getCurrent(name: string): Promise<StockData | undefined> {
        return getDocument<StockData>(name, 'current');
    }

    async function getCurrentPrice(name: string): Promise<number | undefined> {
        const data = await getDocument<StockData>(name, 'current');
        return data?.open;
    }

    async function getHistorical(name: string): Promise<HistoricalData | undefined> {
        return getDocument<HistoricalData>(name, 'historical');
    }

    return {
        getCommoditiesList,
        getCurrent,
        getCurrentPrice,
        getHistorical,
    };
}

declare global {
    export interface ServerPlugin {
        ['realworld-commoditiesprice-api']: ReturnType<typeof useCommoditiesAPI>;
    }
}


Rebar.useApi().register('realworld-commoditiesprice-api', useCommoditiesAPI());