'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/retroui/Button';
import { Input } from '@/components/retroui/Input';
import { Label } from '@/components/retroui/Label';
import { loginUser } from '@/lib/api';

export function LoginForm() {
	const router = useRouter();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		setLoading(true);

		const res = await loginUser(email, password);

		setLoading(false);

		if (!res.ok) {
			setError(res.data?.error || 'Login gagal');
			return;
		}

		// Simpan info login sederhana di localStorage (belum pakai JWT/session)
		localStorage.setItem('user_email', res.data.email);

		router.push('/upload');
	};

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
				{loading ? 'Memproses...' : 'Login'}
			</Button>
		</form>
	);
}
