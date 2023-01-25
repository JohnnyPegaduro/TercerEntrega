import { Router } from "express";
import { CarritosDao } from "../daos/index.js";
import logger from "../config/configLoggers.js";

const router = Router();

const carsArte = CarritosDao;


// Ruta Agregar Carrito p/ Usuario
router.post("/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;
    const timestamp = new Date();
    const id_user = idUser;
    const products = [];
    const newId = await carsArte.save({ timestamp, id_user, products });
    res.send("El Id del nuevo carrito es:" + " " + newId);
  } catch (err) {
    logger.error(`Error- MainCarrito - Ruta Post Carrito: ${err}`);
  }
});

// Ruta Borrar Carrito
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const found = await carsArte.deleteById(id);
    res.send("Carrito Eliminado");
  } catch (err) {
    logger.error(`Error- MainCarrito - Ruta Delete Carrito: ${err}`);
  }
});

// Ruta Buscar Productos de un Carrito determinado
router.get("/:id/productos", async (req, res) => {
  try {
    const { id } = req.params;
    let found = await carsArte.getById(id);
    if (found) {
      const { products } = found;
      res.send(products);
    } else {
      logger.error(
        `Error- MainCarrito - Ruta Buscar Productos Carrito - Carrito no encontrado: ${err}`
      );
    }
  } catch (err) {
    logger.error(`Error- MainCarrito - Ruta Buscar Productos Carrito: ${err}`);
  }
});

// Ruta Agregar un Producto a un Carrito determinado
router.post("/:id/productos", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      id_prod,
      timestamp,
      title,
      description,
      code,
      thumbnail,
      price,
      stock,
    } = req.body;
    await carsArte.saveProducts(
      id,
      id_prod,
      timestamp,
      title,
      description,
      code,
      thumbnail,
      price,
      stock
    );
    return res.send("Producto Cargado");
  } catch (err) {
    logger.error(`Error- MainCarrito - Ruta Agregar Producto Carrito: ${err}`);
  }
});

// Borrar un producto de un carrito determinado
router.delete("/:id/productos/:id_prod", async (req, res) => {
  try {
    const { id, id_prod } = req.params;
    const found = await carsArte.deleteProdById(id, id_prod);
    res.send("Producto Eliminado");
  } catch (err) {
    logger.error(`Error- MainCarrito - Ruta Eliminar Producto Carrito: ${err}`);
  }
});

// Buscar el carrito de un usuario con una compra no finalizada
router.get("/idCarrito/:id_user", async (req, res) => {
  try {
    const { id_user } = req.params;
    let found = await carsArte.getCarritoByUsuario(id_user);
    if (found) {
      res.send(found);
    } else {
      res.send({ _id: null });
    }
  } catch (err) {
    logger.error(
      `Error- MainCarrito - Ruta Buscar Carrito de un Usuario: ${err}`
    );
  }
});


router.put("/finalizar/:id_user", async (req, res) => {
  try {
    const { id_user } = req.params;
    await carsArte.updateFinalizarCarritoBy(id_user);
    res.send("Carrito Finalizado");
  } catch (err) {
    logger.error(
      `Error- MainCarrito - Ruta Actualizar Carrito Finalizar true: ${err}`
    );
  }
});



export default router;
