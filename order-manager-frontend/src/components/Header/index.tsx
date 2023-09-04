import { Container, HeaderTitle } from "./styles";
import appleLogo from "../../assets/apple-logo.svg"
import { useNavigate } from "react-router-dom";
import { MenuIconHeader } from "../MenuIcon";
import { Box } from "@mui/material";
import { Cart } from "../Cart";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <img
                src={appleLogo}
                alt="Apple logo"
                onClick={() => navigate("/products")}
            />
            <HeaderTitle>Apple Store</HeaderTitle>
            <Box>
                <Cart />
                <MenuIconHeader />
            </Box>
        </Container>
    )
};