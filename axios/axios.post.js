import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:8080",
});

try {
    const post = await api.post("/api/productos", {
        title: "Mountains Duo",
        description: "Cuadros de 45x30 cm. vinilo pegado sobre madera.",
        code: "18012481",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/ecommercedb-backend-d9d0e.appspot.com/o/cuadro1.png?alt=media&token=d1877e7f-c9dd-45cf-9d2f-2751918494f7",
        price: 1000,
        stock: 10
    });
    console.log(post.data);
} catch (error) {
    console.log(error);
}