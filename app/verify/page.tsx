'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/retroui/Button';
import { verifyAccount } from '@/lib/api';

// 1. Pisahkan logika utama ke komponen terpisah
function VerifyContent() {
	const searchParams = useSearchParams();
	const token = searchParams.get('token');

	const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
	const [message, setMessage] = useState('');

	useEffect(() => {
		if (!token) {
			setStatus('error');
			setMessage('Token tidak ditemukan di URL');
			return;
		}

		verifyAccount(token).then((res) => {
			if (res.ok) {
				setStatus('success');
				setMessage(res.data?.message || 'Akun berhasil diverifikasi');
			} else {
				setStatus('error');
				setMessage(res.data?.error || 'Verifikasi gagal');
			}
		});
	}, [token]);

	return (
		<div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] p-8 max-w-md w-full">
			{status === 'loading' && <p className="font-head text-lg uppercase">Memverifikasi...</p>}

			{status === 'success' && (
				<>
					<div className="w-12 h-12 bg-[#23a094] border-2 border-black mx-auto mb-4 flex items-center justify-center text-white font-head text-2xl">
						✓
					</div>
					<p className="font-head text-lg uppercase mb-2">Verifikasi Berhasil</p>
					<p className="text-sm text-neutral-700 mb-6">{message}</p>
					<Button onClick={() => (window.location.href = '/login')}>Ke Halaman Login</Button>
				</>
			)}

			{status === 'error' && (
				<>
					<div className="w-12 h-12 bg-red-600 border-2 border-black mx-auto mb-4 flex items-center justify-center text-white font-head text-2xl">
						✕
					</div>
					<p className="font-head text-lg uppercase mb-2">Verifikasi Gagal</p>
					<p className="text-sm text-neutral-700 mb-6">{message}</p>
					<Button
						variant="outline"
						onClick={() => (window.location.href = '/register')}
					>
						Kembali ke Registrasi
					</Button>
				</>
			)}
		</div>
	);
}

// 2. Gunakan Suspense di komponen Page (Export Default)
export default function VerifyPage() {
	return (
		<div className="relative min-h-screen bg-[#f8f8f8] text-black font-sans">
			<div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

			<div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center">
				{/* Bungkus komponen yang membaca URL dengan Suspense */}
				<Suspense fallback={<p className="font-head text-lg uppercase">Memuat...</p>}>
					<VerifyContent />
				</Suspense>
			</div>
		</div>
	);
}
