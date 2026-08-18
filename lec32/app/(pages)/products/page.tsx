import Link from "next/link";
import { products } from "@/app/product";

export default function ProductsPage() {
  return (
    <main className="text-3xl font-bold">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}