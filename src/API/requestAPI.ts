import axios from "axios";

class requestAPI {
    static async getLimitProducts(limit: number) {
        const result = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);

        return result.data;
    }
}


export default requestAPI;