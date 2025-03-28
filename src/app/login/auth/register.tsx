// app/auth/register/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verificationSent, setVerificationSent] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email && password) {
            // Giả lập gửi email xác thực Gmail
            alert(`Verification email sent to ${email}. Please check your Gmail.`);
            setVerificationSent(true);
            // Sau xác thực, chuyển hướng người dùng (ở đây chuyển về trang đăng nhập)
            router.push('/auth/login');
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <label>
                    Gmail:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
            {verificationSent && <p>Please check your Gmail for the verification link.</p>}
        </div>
    );
}
