import axios from "axios";

const user = JSON.parse(localStorage.getItem('user'));

const API = axios.create({ 
    baseURL: 'https://tiny-fox-nightgown.cyclic.cloud',
    headers: {
        'Authorization': user ? `Bearer ${user.token}` : ''
    }
});

export const Login = (userData) => API.post('/auth/login', userData);
export const Register = (userData) => API.post('/auth/register', userData);

export const FetchRestaurant = (id) => API.get(`/restaurant/fetch/${id}`);
export const FetchRestaurantsByLocation = (area) => API.get(`/restaurant/${area}/fetch`);
export const FetchAllRestaurants = () => API.get('/restaurant/fetch');

export const FetchFood = (restId, id) => API.get(`/food/fetch/${restId}/${id}`);
export const FetchFoodByRestaurant = (restId) => API.get(`/food/fetch/${restId}`);

export const FetchEntityBySearch = (searchQuery) => API.get(`/food/search?search=${searchQuery.search || 'none'}&option=${searchQuery.option || 'none'}&location=${searchQuery.area}`);

export const AddToCart = (restId, id) => API.get(`/food/fetch/${restId}/${id}`);

export const PlaceOrder = (order) => API.post('/order/add', order);
export const FetchOrderById = (id) => API.get(`/order/fetch/${id}`);
export const FetchMyOrders = () => API.get('/order/fetch/myorders');

export default API;