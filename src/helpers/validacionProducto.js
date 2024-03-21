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
    (req, res, next) => resultadoValidacion(req,res,next)
  ]

  export default validacionProducto