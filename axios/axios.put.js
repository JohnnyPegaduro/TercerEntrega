import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:8080",
});

try {
    const put = await api.put("/api/productos/63d6e62e8577691764f94f06", {
        title: "Alfombra Kaliz",
        description: "Plumón peinado de alta calidad, 50 cm de ancho x 100 de largo.",
        code: "58012485",
        thumbnail: 	"https://firebasestorage.googleapis.com/v0/b/ecommercedb-backend-d9d0e.appspot.com/o/alfombra5.png?alt=media&token=9ef53bc2-2f64-4959-9d1f-75064a4f9c66",
        price: 5000,
        stock: 50
    });
    console.log(put.data);
} catch (error) {
    console.log(error);
}