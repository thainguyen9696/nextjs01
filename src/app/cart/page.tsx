// app/cart/page.tsx
'use client';

export default function CartPage() {
    // Dữ liệu giỏ hàng giả lập
    const cartItems = [
        { id: 1, name: '3D Printer Model X', quantity: 1, price: 2999 },
    ];

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} x {item.quantity} - ${item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

