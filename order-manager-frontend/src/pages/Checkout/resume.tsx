import { Button, CircularProgress } from "@mui/material";
import { ContainerActionsResume } from "../../components/CardProductCheckout/styles";
import { useCart } from "../../hooks/useCart"
import { formatMoneyCents } from "../../utils/money";
import { ContainerResume, TextHelper, TitleResume, TotalAmount, TotalAmountContainer } from "./styles"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../services/order";
import { CartDispatchContext } from "../../context/CartContext";

const defaultStyleButon = {
    backgroundColor: '#1d1d1f',
    "&:hover": {
        backgroundColor: '#1d1d1f'
    }
};

export const Resume = () => {
    const cart = useCart();
    const { clearCart } = useContext(CartDispatchContext);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const totalAmount = cart.reduce((acc, cartItem) => {
        return acc + (cartItem.qty * cartItem.product.price);
    }, 0);

    const handleSubmit = async () => {
        setLoading(true);

        const payload = {
            products: cart
        };

        await createOrder(payload);
        clearCart();
        navigate('/products');
    }

    return (
        <ContainerResume>
            <TitleResume>Total: </TitleResume>
            <TotalAmountContainer>
                <span>R$</span>
                <TotalAmount>
                    {formatMoneyCents(totalAmount)}
                </TotalAmount>
            </TotalAmountContainer>
            <TextHelper>
                * Após a confirmação do pedido poderá haver alteração no valor.
            </TextHelper>
            <ContainerActionsResume>
                <Button
                    variant="contained"
                    sx={defaultStyleButon}
                    onClick={() => navigate('/products')}
                >
                    Voltar aos Produtos
                </Button>
                <Button
                    color="success"
                    variant="contained"
                    sx={{
                        minWidth: '131px',
                        minHeight: '36px',
                    }}
                    disabled={loading}
                    onClick={handleSubmit}
                >
                    {loading
                        ? <CircularProgress color="info" size={14} />
                        : "Confirmar Pedido"
                    }
                </Button>
            </ContainerActionsResume>
        </ContainerResume>
    )
}