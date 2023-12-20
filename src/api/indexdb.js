import Dexie from "dexie";
import { collection, getDocs } from "firebase/firestore";
import {datab} from "@/api/firebase"
import { useLiveQuery } from "dexie-react-hooks";

const collectionInventory = collection(datab , "inventory");
const collectionUser = collection(datab, "users");
const collectionInvoice = collection(datab, "invoice");

export const db = new Dexie('logDB');
db.version(1).stores({
  productos: '++id, nombre, cantidad, precio, precioCosto, descripcion',
  facturas: '++id, FacturaNo, Fecha, Ganancia, Nombre, Total, ProducInvoice'
});

export  function useInventory(){
    try{
        const product = useLiveQuery(async () => {
    if (db.productos.toArray().length === 0) {
      const docis = await Promise.resolve(getDocs(collectionInventory));
      const productos = docis.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      productos.forEach((producto) => {
        db.productos.put(producto);
      });
      return productos;
    } else {
      return db.productos.toArray();
    }
  });
  return product;
    }catch(e){
        console.error("Error al obtener los datos: " + e)
    }  
}

export function useInvoices() {
    try {
        const invoices = useLiveQuery(async () => {
            let storedInvoices = await db.facturas.toArray();
            if (storedInvoices.length === 0) {
                const docs = await Promise.resolve(getDocs(collectionInvoice));
                storedInvoices = docs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                storedInvoices.forEach((invoice) => {
                    db.facturas.put(invoice);
                });
            }
            return storedInvoices;
        });
        return invoices;
    } catch (error) {
        console.error("Error al obtener los datos: " + error);
        throw error;
    }
}

