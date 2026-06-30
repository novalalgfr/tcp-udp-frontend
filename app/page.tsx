import { Button } from '@/components/retroui/Button';

export default function LandingPage() {
	return (
		<div className="relative min-h-screen bg-[#f8f8f8] text-black font-sans">
			<div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

			<div className="relative z-10 flex flex-col min-h-screen">
				<nav className="sticky top-0 w-full bg-white border-b-4 border-black px-4 md:px-6 py-3 md:py-4 flex items-center justify-between z-[999]">
					<div className="flex items-center gap-2 sm:gap-3">
						<div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#ffc900] border-2 border-black shadow-[2px_2px_0px_0px_#000]"></div>
						<span className="font-head text-lg sm:text-xl md:text-2xl uppercase tracking-tighter truncate">
							Socket App
						</span>
					</div>
					<div className="flex items-center gap-2 sm:gap-3">
						<Button
							variant="outline"
							size="sm"
						>
							<a href="/login">Login</a>
						</Button>
						<Button
							size="sm"
							className="bg-black text-white"
						>
							<a href="/register">Daftar</a>
						</Button>
					</div>
				</nav>

				{/* Hero Section */}
				<main className="flex-1 flex flex-col items-center px-4 pt-16 md:pt-24 pb-8 md:pb-12 text-center w-full max-w-6xl mx-auto">
					<div className="mb-6 md:mb-8 inline-flex items-center gap-2 bg-[#ff90e8] border-2 border-black px-3 py-1 md:px-4 md:py-1.5 shadow-[4px_4px_0px_0px_#000] rotate-[-2deg]">
						<span className="font-bold text-xs md:text-sm uppercase tracking-wide">
							TCP Upload & UDP Streaming
						</span>
					</div>

					<h1 className="font-head text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[1] md:leading-[0.9] mb-6 md:mb-8">
						Network <br className="hidden sm:block" />
						<span className="bg-[#c4a1ff] px-2 border-4 border-black inline-block mt-2 shadow-[6px_6px_0px_0px_#000] md:shadow-[8px_8px_0px_0px_#000]">
							File & Stream
						</span>
					</h1>

					<p className="font-medium text-base sm:text-lg md:text-xl max-w-2xl text-neutral-800 mb-10 md:mb-12 px-2">
						Upload file lewat TCP socket dan streaming video lewat UDP socket. Daftar akun, verifikasi
						email, lalu mulai pakai fiturnya.
					</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
						<a
							href="/upload"
							className="group bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] p-6 text-left transition hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#000]"
						>
							<div className="w-10 h-10 bg-[#ffc900] border-2 border-black mb-4 flex items-center justify-center font-head text-lg">
								↑
							</div>
							<h3 className="font-head text-lg uppercase mb-1">Upload File</h3>
							<p className="text-sm text-neutral-600">Kirim file ke server lewat protokol TCP</p>
						</a>

						<a
							href="/stream"
							className="group bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] p-6 text-left transition hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#000]"
						>
							<div className="w-10 h-10 bg-[#23a094] border-2 border-black mb-4 flex items-center justify-center font-head text-lg text-white">
								▶
							</div>
							<h3 className="font-head text-lg uppercase mb-1">Streaming Video</h3>
							<p className="text-sm text-neutral-600">Tonton video lewat protokol UDP</p>
						</a>
					</div>
				</main>

				<footer className="bg-white border-t-4 border-black px-4 md:px-6 py-8 md:py-12 mt-12 md:mt-20">
					<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
						<div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0 text-center sm:text-left">
							<span className="font-head text-lg md:text-xl uppercase italic sm:pr-3">Socket App</span>
							<span className="font-medium text-sm md:text-base text-neutral-500 sm:border-l-2 sm:border-black sm:pl-3">
								Pemrograman Jaringan Project
							</span>
						</div>
						<div className="font-bold text-xs md:text-sm uppercase text-neutral-400 text-center">
							TCP & UDP Protocol
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}
