// pages/detail.tsx
import React from 'react';
import Link from 'next/link';

const Detail: React.FC = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Detail Page</h1>
            <p>Đây là trang chi tiết.</p>
            <Link href="/">← Back to Home</Link>
        </div>
    );
};

export default Detail;
