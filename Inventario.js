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
        return null;
    }

    listar() {
        let aux = this.primero;

        while (aux != null) {
            console.log(aux.getInfo());
            aux = aux.next;
        }
    }
}