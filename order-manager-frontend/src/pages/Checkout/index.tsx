import { Box, Divider } from "@mui/material";
import { CardProductCheckout } from "../../components/CardProductCheckout";
import { PageTitle } from "../../components/PageTitle";
import { useCart } from "../../hooks/useCart";
import { NotData } from "./not-data";
import { Resume } from "./resume";



export const Checkout = () => {
    const cart = useCart();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                minHeight: 'calc(100vh - 12rem)',
                alignItems: 'center',
            }}
        >
            {!!cart.length && <PageTitle title="Confirmar Pedido" />}
            {!!cart.length &&
                <>
                    {cart.map((cartItem) => (
                        <CardProductCheckout
                            qty={cartItem.qty}
                            product={cartItem.product}
                        />
                    ))}
                    <Divider sx={{ width: '100%' }} />
                    <Resume />
                </>
            }
            {!cart.length && <NotData />}
        </Box >
    )
}