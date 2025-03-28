// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();
    // Xử lý dữ liệu form liên hệ (ví dụ: gửi email hoặc lưu vào CSDL)
    console.log('Contact form data:', data);
    return NextResponse.json({ message: 'Contact information received.' });
}
