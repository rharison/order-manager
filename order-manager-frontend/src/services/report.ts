import { axiosInstance } from "./axios";

export const generateReport = async () => {
    return axiosInstance.get<BlobPart>('/purchase-orders/report', {
        headers: {
            'accept': 'text/csv'
        }
    }).then((res) => {
        const blob = new Blob([res.data], { type: 'text/csv' })
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = `report.csv`
        link.click()
    })
    .catch((err) => {
        console.log(err);
    })
}