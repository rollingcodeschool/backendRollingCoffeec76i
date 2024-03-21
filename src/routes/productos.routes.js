import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers.js";
import { check } from "express-validator";
import validacionProducto from "../helpers/validacionProducto.js";

const router = Router();

//como creo las rutas
router
  .route("/productos")
  .get(listarProductos)
  .post( [validacionProducto],crearProducto );
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put([validacionProducto],editarProducto)
  .delete(borrarProducto);
export default router;
