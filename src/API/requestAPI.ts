import axios from "axios";

class requestAPI {
    static async getLimitProducts(limit: number) {
        const result = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);

        return result.data;
    }

    static async getAllCategories() {
        const categories = await axios.get("https://fakestoreapi.com/products/categories");

        return categories.data;
    }
}


export default requestAPI;