import { Box, Grid, Skeleton } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { CardProduct } from "../../components/CardProduct";
import { PageTitle } from "../../components/PageTitle";
import { getProducts } from "../../services/product";
import { Product } from "../../types/Product";

export const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = useCallback(async () => {
        const products = await getProducts();

        setProducts(products);
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem'
                }}
            >
                <PageTitle title="Produtos" />
                <Grid container spacing={6}>
                    {loading &&
                        Array(7).fill(0).map((_, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Skeleton
                                    variant="rectangular"
                                    width="100%"
                                    height={465}
                                    sx={{
                                        borderRadius: '1rem'
                                    }}
                                />
                            </Grid>
                        ))
                    }
                    {!loading && !!products.length && products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <CardProduct product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};