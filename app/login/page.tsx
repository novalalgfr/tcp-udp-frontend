import { LoginForm } from '@/components/auth/login-form';

export default function LoginPage() {
	return (
		<div className="relative min-h-screen bg-[#f8f8f8] text-black font-sans">
			<div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

			<div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
				<div className="mb-8 text-center">
					<h1 className="font-head text-4xl md:text-5xl uppercase tracking-tighter mb-2">
						Masuk <span className="bg-[#ffc900] px-2 border-2 border-black">Akun</span>
					</h1>
					<p className="text-neutral-700 text-sm md:text-base">Login untuk akses upload & streaming</p>
				</div>

				<div className="w-full max-w-md">
					<LoginForm />
				</div>

				<a
					href="/register"
					className="mt-6 text-sm font-bold underline"
				>
					Belum punya akun? Daftar
				</a>
			</div>
		</div>
	);
}
