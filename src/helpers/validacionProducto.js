import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionProducto = [
    check("nombreProducto")
      .notEmpty()
      .withMessage("El nombre del producto es un dato obligatorio")
      .isLength({ min: 2, max: 50 })
      .withMessage(
        "El nombre del producto debe contener entre 2 y 50 caracteres"
      ),
    check("precio")
      .notEmpty()
      .withMessage("El precio es un dato obligatorio")
      .isNumeric()
      .withMessage('El precio debe ser un número')
      .custom((value)=>{
          if(value >= 50 && value <= 10000){
              return true;
          }else{
              throw new Error('El precio debe estar entre $50 y $10000')
          }
      }),
      check('imagen')
      .notEmpty()
      .withMessage('La imagen es un dato obligatorio')
      .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/)
      .withMessage('La imagen debe ser una url valida y terminar con alguna de las siguientes extensiones (jpg|jpeg|gif|png)')
      ,
      check('categoria')
      .notEmpty()
      .withMessage('La categoria es un dato obligatorio')
      .isIn(['Infusiones', 'Batidos','Dulce', 'Salado'])
      .withMessage("La categoria debe ser una de las siguientes opciones ('Infusiones', 'Batidos','Dulce', 'Salado')")
      ,
      check("descripcion_breve")
      .notEmpty()
      .withMessage("La descripcion breve es un dato obligatorio")
      .isLength({ min: 3, max: 30 })
      .withMessage(
        "La descripcion breve debe contener entre 3 y 30 caracteres"
      ),
      check("descripcion_amplia")
      .notEmpty()
      .withMessage("La descripcion amplia es un dato obligatorio")
      .isLength({ min: 50, max: 1000 })
      .withMessage(
        "La descripcion amplia debe contener entre 50 y 1000 caracteres"
      ),
    (req, res, next) => resultadoValidacion(req,res,next)
  ]

  export default validacionProducto