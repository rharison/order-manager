import { Box, Button } from "@mui/material";
import { Product } from "../../types/Product"
import { Container, ContainerActions, ContainerText, InfoContainer, ProductDescription, ProductName, ProductPicture } from "./styles";
import { ProductPrice, ProductPriceContainer, TextQtyProduct } from "../CardProduct/styles";
import { useContext } from "react";
import { CartDispatchContext } from "../../context/CartContext";
import { formatMoneyCents } from "../../utils/money";

type CardProductCheckoutProps = {
    product: Product;
    qty: number;
    viewMode?: boolean;
};

const defaultStyleButon = {
    backgroundColor: '#1d1d1f',
    "&:hover": {
        backgroundColor: '#1d1d1f'
    }
};

export const CardProductCheckout = ({ product, qty, viewMode }: CardProductCheckoutProps) => {
    const { addProduct, productAlreadyExistsInCart, removeProduct } = useContext(CartDispatchContext);

    return (
        <Container>
            <ProductPicture
                src={product.imageUrl}
                alt={`Imagem do produto ${product.name}`}
            />
            <InfoContainer>
                <ContainerText>
                    <ProductName>
                        {product.name}
                    </ProductName>
                    <ProductDescription>
                        {product.description}
                    </ProductDescription>
                    <ProductPriceContainer>
                        <span>R$</span>
                        <ProductPrice>
                            {formatMoneyCents(product.price * qty)}
                        </ProductPrice>
                    </ProductPriceContainer>
                </ContainerText>
                {!viewMode &&
                    <ContainerActions>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                maxWidth: '10rem',
                            }}
                        >
                            <Button
                                sx={defaultStyleButon}
                                variant="contained"
                                fullWidth
                                onClick={() => addProduct(product)}
                            >
                                +
                            </Button>
                            <TextQtyProduct>
                                {productAlreadyExistsInCart(product)?.qty}
                            </TextQtyProduct>
                            <Button
                                sx={defaultStyleButon}
                                variant="contained"
                                fullWidth
                                onClick={() => removeProduct(product)}
                            >
                                -
                            </Button>
                        </Box>
                    </ContainerActions>
                }
            </InfoContainer>
        </Container>
    )
};