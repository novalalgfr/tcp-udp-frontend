'use client';

import { getStreamUrl } from '@/lib/api';

export function VideoPlayer({ filename }: { filename: string | null }) {
	if (!filename) {
		return (
			<div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] aspect-video flex items-center justify-center">
				<p className="text-sm text-neutral-500 font-medium">Pilih video dari daftar untuk mulai streaming</p>
			</div>
		);
	}

	return (
		<div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] overflow-hidden">
			<video
				key={filename}
				src={getStreamUrl(filename)}
				controls
				autoPlay
				className="w-full aspect-video bg-black"
			/>
			<div className="px-4 py-2 border-t-2 border-black bg-[#f4f4f0]">
				<p className="text-xs font-bold uppercase text-neutral-600">
					Streaming via UDP: <span className="text-black">{filename}</span>
				</p>
			</div>
		</div>
	);
}
