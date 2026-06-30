'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/retroui/Button';
import { Input } from '@/components/retroui/Input';
import { Label } from '@/components/retroui/Label';
import { registerUser } from '@/lib/api';

export function RegisterForm() {
	const router = useRouter();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		setLoading(true);

		const res = await registerUser(email, password);

		setLoading(false);

		if (!res.ok) {
			setError(res.data?.error || 'Registrasi gagal');
			return;
		}

		setSuccess(true);
	};

	if (success) {
		return (
			<div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] p-6 text-center">
				<p className="font-head text-lg uppercase mb-2">Registrasi Berhasil</p>
				<p className="text-sm text-neutral-700 mb-4">
					Cek email kamu (<span className="font-bold">{email}</span>) untuk link verifikasi sebelum login.
				</p>
				<Button
					variant="outline"
					onClick={() => router.push('/login')}
				>
					Ke Halaman Login
				</Button>
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] p-6 flex flex-col gap-4"
		>
			<div>
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="kamu@email.com"
					required
				/>
			</div>

			<div>
				<Label htmlFor="password">Password</Label>
				<Input
					id="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="••••••••"
					required
					minLength={6}
				/>
			</div>

			{error && (
				<p className="text-sm font-bold text-red-600 bg-red-50 border-2 border-red-600 px-3 py-2">{error}</p>
			)}

			<Button
				type="submit"
				disabled={loading}
				className="mt-2"
			>
				{loading ? 'Mendaftarkan...' : 'Daftar'}
			</Button>
		</form>
	);
}
