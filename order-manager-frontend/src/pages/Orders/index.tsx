import { Box, Skeleton } from "@mui/material";
import { PageTitle } from "../../components/PageTitle";
import { OrderResponse } from "../../types/Order";
import { useCallback, useEffect, useState } from "react";
import { getOrders } from "../../services/order";
import { ContainerOrders } from "./styles";
import { CardOrder } from "../../components/CardOrder";
import { NotData } from "../Checkout/not-data";


export const Orders = () => {
    const [orders, setOrders] = useState<OrderResponse[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchOrders = useCallback(async () => {
        const orders = await getOrders();

        setOrders(orders);
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                minHeight: 'calc(100vh - 12rem)',
                alignItems: 'center',
                width: '100%'
            }}
        >
            <PageTitle title="Meus Pedidos" />
            <ContainerOrders>
                {loading &&
                    Array(6).fill(0).map((_, index) => (
                        <Skeleton
                            key={index}
                            variant="rectangular"
                            width="100%"
                            height="10rem"
                        />
                    ))
                }
                {!loading && !!orders.length &&
                    orders.map((order) => (
                        <CardOrder
                            key={order.id}
                            order={order}
                        />
                    ))
                }
            </ContainerOrders>
            {!orders.length && !loading &&
                <NotData message="Voce ainda não tem nenhum pedido." />
            }
        </Box>
    )
};