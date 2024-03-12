import { Router } from "express";
import { crearProducto, listarProductos } from "../controllers/productos.controllers.js";

const router = Router();

//como creo las rutas
router.route('/productos').get(listarProductos).post(crearProducto)
export default router
