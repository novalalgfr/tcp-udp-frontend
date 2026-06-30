'use client';

import { useState } from 'react';
import { VideoList } from '@/components/stream/video-list';
import { VideoPlayer } from '@/components/stream/video-player';

export default function StreamPage() {
	const [selected, setSelected] = useState<string | null>(null);

	return (
		<div className="relative min-h-screen bg-[#f8f8f8] text-black font-sans">
			<div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

			<div className="relative z-10 flex flex-col items-center px-4 py-12 max-w-4xl mx-auto">
				<div className="mb-8 text-center">
					<h1 className="font-head text-4xl md:text-5xl uppercase tracking-tighter mb-2">
						Video <span className="bg-[#c4a1ff] px-2 border-2 border-black">Streaming</span>
					</h1>
					<p className="text-neutral-700 text-sm md:text-base">
						Video dikirim dari server lewat protokol UDP
					</p>
				</div>

				<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="md:col-span-1">
						<VideoList
							selected={selected}
							onSelect={setSelected}
						/>
					</div>
					<div className="md:col-span-2">
						<VideoPlayer filename={selected} />
					</div>
				</div>
			</div>
		</div>
	);
}
