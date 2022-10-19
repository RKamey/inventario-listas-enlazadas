class Producto {
    constructor(codigo, nombre, cantidad, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.next = null;
    }

    getCodigo() {
        return this.codigo;
    }

    getInfo() {
        return `Codigo: ${this.codigo}, Nombre: ${this.nombre}, Cantidad: ${this.cantidad}, Precio: $${this.precio} | `;
    }
}