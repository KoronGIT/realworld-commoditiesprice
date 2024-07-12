export const CommoditiesConfig = {
    apikey: '', // Create a free account at https://site.financialmodelingprep.com/
    
	timeBetweenUpdates: 60000 * 60 * 6,    // 60000 (milliseconds) * 60 * 6 = 6 Houre. 
                                            //Please note!!!: With the free plan, a maximum of 250 queries can be executed per day.
                                            //One call is required per commodity. 
                                            //So, for example, if the values ​​for oil, wheat and copper are to be retrieved, 
                                            //these are three calls which are deducted from the daily limit of 250.

    historicalPriceData: false, //If this value is set to true, an additional query per commodity is executed initially
                                //at server startup and then every 24 hours to retrieve the daily historical data.

    commoditiesToRetrieve: {
        //Soybean_Meal: 'ZMUSD',      //"Soybean Meal Futures"
        //Aluminum: 'ALIUSD',         //"Aluminum Futures"
        Gold: 'GCUSD',              //"Gold Futures"
        //Soybean_Oil: 'ZLUSX',       //"Soybean Oil Futures",
        //Wheat: 'KEUSX',             //"Wheat Futures"
        //Platinum: 'PLUSD',          //"Platinum"
        //Pig: 'HEUSX',               //"Lean Hogs Futures"
        //Corn: 'ZCUSX',              //"Corn Futures"
        //Oat: 'ZOUSX',               //"Oat Futures"
        //Sugar: 'SBUSX',             //"Sugar"
        //Cotton: 'CTUSX',            //"Cotton"
        //Silver: 'SIUSD',            //"Silver Futures"
        //Soybean: 'ZSUSX',           //"Soybean Futures"
        //Lumber: 'LBUSD',            //"Lumber Futures"
        //Cow: 'LEUSX',               //"Live Cattle Futures"
        //Natural_Gas: 'NGUSD',       //"Natural Gas"
        //Crude_Oil: 'CLUSD',         //"Crude Oil"
        //Orange_Juice: 'OJUSX',      //"Orange Juice"
        //Coffee: 'KCUSX',            //"Coffee"
        //Copper: 'HGUSD',            //"Copper"
        //Rice: 'ZRUSD',              //"Rough Rice Futures"
        //Palladium: 'PAUSD',         //"Palladium"
        //Cocoa: 'CCUSD',             //"Cocoa"
        //Gasoline: 'RBUSD',          //"Gasoline RBOB"
        //Heating_Oil: 'HOUSD'        //"Heating Oil"
    }

};