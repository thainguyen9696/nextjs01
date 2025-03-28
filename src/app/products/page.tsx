// app/products/page.tsx
import Link from 'next/link';

const products = [
    { id: 1, name: '3D Printer Model X', price: 2999 },
    { id: 2, name: '3D Printer Model Y', price: 3999 },
    // Thêm các sản phẩm khác nếu cần
];

export default function ProductsPage() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>
                            {product.name} - ${product.price}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
