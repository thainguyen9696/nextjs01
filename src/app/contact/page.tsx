// app/contact/page.tsx
'use client';

export default function ContactPage() {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Thu thập dữ liệu form và gửi đến API /api/contact
        const formData = {
            name: (e.currentTarget as any).name.value,
            email: (e.currentTarget as any).email.value,
            message: (e.currentTarget as any).message.value,
        };
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        alert(data.message);
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Contact Us</h1>
            <p>We are here to help you with your 3D printing needs.</p>
            <div>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |{' '}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |{' '}
                <a href="https://zalo.me" target="_blank" rel="noopener noreferrer">Zalo</a>
            </div>
            <h2>Leave Your Contact Information</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input name="name" type="text" required />
                </label>
                <br />
                <label>
                    Email:
                    <input name="email" type="email" required />
                </label>
                <br />
                <label>
                    Message:
                    <textarea name="message" required />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            <h2>Our Location</h2>
            <div id="google-map">
                {/* Tích hợp Google Map (hoặc hiển thị dữ liệu từ API /api/google-map) */}
                <p>Google Maps integration goes here.</p>
            </div>
        </div>
    );
}
