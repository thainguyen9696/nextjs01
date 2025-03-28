// app/products/[id]/page.tsx
interface ProductDetailProps {
    params: { id: string };
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
    // Dữ liệu giả lập, bạn có thể thay thế bằng API thực tế
    const product = {
        id: params.id,
        name: `3D Printer Model ${params.id}`,
        description: 'High quality 3D printer with advanced features.',
        price: 2999,
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
        </div>
    );
}
