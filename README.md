# Realworld Commodities Price for Rebar Framework

Retrieves and stores the current and historical market prices of various commodities.

# Features

- Current market information (price, volume, dayhigh, price etc.)
- Historical daily market information (high, low, volume, changePercent etc.)
- Setting which commodities are retrieved
- Set polling interval
- Set whether only current or also historical data should be retrieved

# API
```ts
import { useRebar } from '@Server/index.js';

const Rebar = useRebar();
const commoditieAPI = await Rebar.useApi().getAsync("realworld-commoditiesprice-api");

await getCommoditiesList() //List of commodities enabled in config.ts
await getCurrent(name: string) //Current market information of a specific commodity (price, volume, dayhigh, price etc.)
await getCurrentPrice(name: string) //Current price of a specific commodity
await getHistorical(name: string) //Historical daily market information of a specific commodity(high, low, volume, changePercent etc.)
```


# Installation

From the main directory of your `Rebar` framework.

```sh
git clone https://github.com/KoronGIT/realworld-commoditiesprice.git src/plugins/realworld-commoditiesprice
```
