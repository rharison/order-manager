import { Fade } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Content } from "./styles";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect } from "react";

export const LayoutApplication = () => {
    const path = window.location.pathname;
    const navigate = useNavigate();

    useEffect(() => {
        if (path === "/") navigate("/products");
    }, [navigate, path]);

    return (
        <Fade in={true} timeout={750}>
            <Container>
                <Header />
                <Content>
                    <Outlet />
                </Content>
                <Footer />
            </Container>
        </Fade>
    )
};