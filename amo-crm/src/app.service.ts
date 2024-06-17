import { Injectable } from "@nestjs/common";
import axios, { AxiosRequestConfig } from "axios";

@Injectable()
export class AppService {
    async getLeads(query: string) {
        const config: AxiosRequestConfig = {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${process.env.TOKEN}`
            },
            params: {
                query: query && query.length >=3 ? query : null
            }
        };
        try {
            const response = await axios.get('https://sininto.amocrm.ru/api/v4/leads', config);
            let leads = response.data._embedded.leads;
            return leads;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}