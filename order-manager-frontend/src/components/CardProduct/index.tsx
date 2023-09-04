import { Box, Button } from "@mui/material";
import { Product } from "../../types/Product";
import { formatMoneyCents } from "../../utils/money";
import { Container, ContainerInfos, ProductPicture, ProductPrice, ProductPriceContainer, ProductTitle, TextQtyProduct } from "./styles";
import { useContext } from "react";
import { CartDispatchContext } from "../../context/CartContext";
import { useCart } from "../../hooks/useCart";

type CardProductProps = {
    product: Product;
};

const defaultStyleButon = {
    backgroundColor: '#1d1d1f',
    "&:hover": {
        backgroundColor: '#1d1d1f'
    }
}

export const CardProduct = ({ product }: CardProductProps) => {
    const { addProduct, productAlreadyExistsInCart, removeProduct } = useContext(CartDispatchContext);
    const cart = useCart();

    return (
        <Container>
            <ProductPicture
                src={product.imageUrl}
                alt={`Imagem do produto ${product.name}`}
            />
            <ContainerInfos>
                <ProductTitle>
                    {product.name}
                </ProductTitle>
                <ProductPriceContainer>
                    <span>R$</span>
                    <ProductPrice>
                        {formatMoneyCents(product.price)}
                    </ProductPrice>
                </ProductPriceContainer>
                {cart.length < 3 && !productAlreadyExistsInCart(product) &&
                    <Button
                        variant="contained"
                        fullWidth
                        sx={defaultStyleButon}
                        onClick={() => addProduct(product)}
                    >
                        Adicionar ao carrinho
                    </Button>
                }
                {productAlreadyExistsInCart(product) &&
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
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
                }
            </ContainerInfos>
        </Container>
    );
};