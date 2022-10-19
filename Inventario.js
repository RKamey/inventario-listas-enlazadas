class Inventario {
    constructor() {
        this.primero = null;
    }

    agregar(producto) {
        let aux = this.primero;

        if (aux == null) {
            this.primero = producto;
        } else {
            while (aux.next != null) {
                aux = aux.next;
            }
            aux.next = producto;
            return true;
        }
    }

    buscar(codigo) {
        let aux = this.primero;

        while (aux != null) {
            if (aux.codigo == codigo) {
                return aux;
            } else {
                aux = aux.next;
            }
        }
        return false;
    }

    listar() {
        let aux = this.primero;
        let lista = '';

        while (aux != null) {
            lista += aux.getInfo() + ' ';
            aux = aux.next;
        }
        return lista;
    }

    listarInverso() {
        let aux = this.primero;
        let lista = '';

        while (aux != null) {
            lista = aux.getInfo() + ' ' + lista;
            aux = aux.next;
        }
        return lista;
    }

    eliminar(codigo) {
        let aux = this.primero;

        if (aux == null) {
            return false;
        } else {
            if (aux.codigo == codigo) {
                this.primero = aux.next;
                return true;
            } else {
                while (aux.next != null) {
                    if (aux.next.codigo == codigo) {
                        aux.next = aux.next.next;
                        return true;
                    } else {
                        aux = aux.next;
                    }
                }
            }
        }
        return false;
    }

    insertar(posicion, producto) {
        let aux = this.primero;

        if (aux == null) {
            return false;
        } else {
            if (posicion == 0) {
                producto.next = aux;
                this.primero = producto;
                return true;
            } else {
                let i = 0;
                while (aux.next != null) {
                    if (i == posicion - 1) {
                        producto.next = aux.next;
                        aux.next = producto;
                        return true;
                    } else {
                        aux = aux.next;
                        i++;
                    }
                }
            }
        }
        return false;
    }
}