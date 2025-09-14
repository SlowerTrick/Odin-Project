class weatherData {
    constructor(url) {
        this.url = url;
    }

    async initWeaterData() {
        try {
            await this.#fetchData();
            return this.#parseData();
        }
        catch(error) {
            return {
                error: true,
                message: "Data not available",
                details: error.message
            };
        }
    }

    async #fetchData() {
        const response = await fetch(this.url);
        this.raw_data = await response.json();
    }

    #parseData() {
        console.log(this.raw_data);
        const wd = {
            error: false,
            address: this.raw_data.address,
            temperature: parseFloat(((this.raw_data.currentConditions.temp - 32) / 1.8).toFixed(2)), // Conversao para °C
            humidity: this.raw_data.currentConditions.humidity,
            wind: this.raw_data.currentConditions.windspeed,
            fellslike: this.raw_data.currentConditions.feelslike
        }
        return wd;
    }
}

export async function createWeatherData(url) {
    const wd = new weatherData(url);
    return await wd.initWeaterData();
}