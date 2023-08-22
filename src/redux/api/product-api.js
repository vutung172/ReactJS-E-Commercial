import { http } from '../api/index'

export const productApi = {
    getAll: async () => {
        let response = await http.get('products');
        return response.data;
    },
    post: async (data) => {
        await http.post('products', data);
    },
    put: async (data) => {
        await http.put('products/'+ data.id, data)
    },
    delete: async (data) => {
        await http.delete("products/"+ data.id, data)
    }
    
}