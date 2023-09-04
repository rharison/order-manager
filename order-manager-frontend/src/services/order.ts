import { OrderPayload, OrderResponse } from "../types/Order";
import { axiosInstance } from "./axios";
import { toast } from 'react-toastify';

export const createOrder = async (payload: OrderPayload): Promise<OrderResponse> => {
    try {
        const { data } = await axiosInstance.post('/purchase-orders', payload)
        toast.info('Pedido criado com sucesso!')
        return data
    } catch (error) {
        toast.error('Oops! Algo deu errado ao criar o pedido. Tente novamente.')
        throw error
    }
}