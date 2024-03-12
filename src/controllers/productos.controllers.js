import Producto from "../database/models/producto.js"

export const listarProductos =(req, res)=>{
    console.log('aqui preparo la lista de productos')
    res.send('Enviando la lista de productos')
}

export const crearProducto = async(req, res)=>{
    try {
        //extraer los datos del body
        // console.log(req);
        // console.log(req.body);
        //todo: validar los datos del body
        //pedir a la BD crear el producto
        const productoNuevo = new Producto(req.body);
        await productoNuevo.save();
        //responder al frontend
        res.status(201).json({
            mensaje: 'El producto fue creado exitosamente'
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: 'El producto no pudo ser creado'
        })
    }
}