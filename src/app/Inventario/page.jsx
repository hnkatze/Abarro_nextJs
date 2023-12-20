"use client";
import { useInventory } from "@/api/indexdb";

export default function Inventory() {
  const productos = useInventory();
  console.log(productos);
  return (
    <div>
      {productos.map((pro) => (
        <p key={pro.id}>{pro.nombre}</p>
      ))}
    </div>
  );
}
