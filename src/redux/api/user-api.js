import { http } from '.'

export const userApi = {
    get: async () => {
        let response = await http.get('users');
        return response.data;
    },
    getPaginations: async (page = 1, limit = 5) => {
        let response = await http.get(`users?_page=${page}&_limit=${limit}`);
        return response.data;
    },
    getLoginByUserID: async (userId) => {
        let response = await http.get(`users?userID=${userId}`);
        return response.data
    }
}