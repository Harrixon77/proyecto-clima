import { ClimaRepository } from "./clima.repository.js";
import axios from "axios";
import{env}from "../../config/env.js";

export class climaService {

    private repository = new ClimaRepository();

    async addClima(data:{  ciudad: string, UserId: String}){
const apiKey = env.weatherApiKey;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${data.ciudad}&appid=${apiKey}&units=metric&lang=es`;
    

try{
const response = await axios.get(url);
            const weatherData = response.data;
const climaParaGuardar = {
                UserId: data.UserId,
                ciudad: weatherData.name,
                pais: weatherData.sys.country,
                temperatura: weatherData.main.temp,
                descripcion: weatherData.weather[0].description,
                humedad: weatherData.main.humidity,
                fecha: new Date()
            };
        return await this.repository.create(climaParaGuardar);
    }catch (error: any) {


            console.error("Error llamando a OpenWeather:", error.response?.data || error.message);
            throw new Error("No se pudo obtener el clima de esa ciudad");
    }
    }
async findallUserId(){


    return this.repository.findall();
}
}
    


