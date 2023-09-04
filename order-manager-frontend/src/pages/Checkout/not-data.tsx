import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

const defaultStyleButon = {
    backgroundColor: '#1d1d1f',
    "&:hover": {
        backgroundColor: '#1d1d1f'
    }
};

export const NotData = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                mt: '5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                maxWidth: '35rem',
                '& > span': {
                    fontSize: '1.7rem',
                    fontWeight: '500',
                    color: '#1d1d1f',
                    textAlign: 'center'
                },
                '& > img': {
                    width: '100%',
                    maxWidth: '35rem',
                    margin: '0 auto'
                }
            }}
        >
            <span>Oops! Voce não tem nenhum item no carrinho.</span>
            <img
                src="/not-data.svg"
            />

            <Button
                sx={defaultStyleButon}
                variant="contained"
                fullWidth
                onClick={() => navigate('/products')}
            >
                Voltar as Compras
            </Button>
        </Box>
    )
}