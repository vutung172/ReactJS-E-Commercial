import { http } from '.'

export const orderApi = {
    get: async () => {
        let response = await http.get('orders?_expand=order_details');
        return response.data;
    },
    getDetails: async (orderId) => {
        let response = await http.get('order_details?orderId=' + orderId + '&_expand=product');
        return response.data;
    },
    put: async (order) => {
        await http.put("orders/" + order.id, order);
    }
    
}