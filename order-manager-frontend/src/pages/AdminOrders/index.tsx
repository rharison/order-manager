import { Box, Button, CircularProgress } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { BulletStatus } from "../../components/CardOrder/styles";
import { useCallback, useEffect, useState } from "react";
import { OrderResponse } from "../../types/Order";
import { getOrders } from "../../services/order";
import { PageTitle } from "../../components/PageTitle";
import { generateReport } from "../../services/report";

const formatMoney = (value: number) => {
    return (value / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
};

const defaultStyleButon = {
    backgroundColor: '#1d1d1f',
    "&:hover": {
        backgroundColor: '#1d1d1f'
    },
    minWidth: '172px',
    minHeight: '37px',
}

const GridToolbar = () => {
    const [loading, setLoading] = useState(false)

    const handleExport = () => {
        setLoading(true)
        generateReport().finally(() => setLoading(false))
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: '1rem',
            }}
        >
            <Button
                variant="contained"
                sx={defaultStyleButon}
                disabled={loading}
                onClick={handleExport}
            >
                {loading ? <CircularProgress size={14} /> : "Gerar Relatório"}
            </Button>
        </Box>
    )
};

export const AdminOrders = () => {
    const [rows, setRows] = useState<OrderResponse[]>([])

    const fetchOrders = useCallback(async () => {
        const orders = await getOrders();

        setRows(orders);
    }, []);

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders])

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "productsAmount",
            headerName: "Total Produtos",
            flex: 1,
            valueFormatter(params) {
                return formatMoney(params.value as number)
            },
        },
        {
            field: "surchargeAmount",
            headerName: "Total Taxas",
            flex: 1,
            valueFormatter(params) {
                return formatMoney(params.value as number)
            },
        },
        {
            field: "totalAmount",
            headerName: "Total Geral",
            flex: 1,
            valueFormatter(params) {
                return formatMoney(params.value as number)
            },
        },
        {
            field: "shipped",
            headerName: "Status",
            width: 150,
            renderCell(params) {
                return (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        {params.value ? "Enviado" : "Pendente"}<BulletStatus shipeed={params.value} />
                    </Box>
                )
            }
        },
    ];

    return (
        <Box
            sx={{
                minHeight: "calc(100vh - 13rem)",
                width: "100%",
            }}
        >
            <PageTitle title="Pedidos" />
            <DataGrid
                sx={{
                    mt: '2rem',
                }}
                autoHeight
                columns={columns}
                rows={rows}
                slots={{
                    toolbar: GridToolbar
                }}
            />
        </Box>
    );
};