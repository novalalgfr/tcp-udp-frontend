'use client';

import { useEffect, useState } from 'react';
import { listVideos } from '@/lib/api';

export function VideoList({ selected, onSelect }: { selected: string | null; onSelect: (filename: string) => void }) {
	const [videos, setVideos] = useState<string[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		listVideos().then((res) => {
			if (res.ok) setVideos(res.data.videos || []);
			setLoading(false);
		});
	}, []);

	return (
		<div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] p-6">
			<h2 className="font-head text-sm uppercase mb-4 border-b-2 border-black pb-2">Daftar Video</h2>

			{loading && <p className="text-sm text-neutral-500">Memuat...</p>}

			{!loading && videos.length === 0 && <p className="text-sm text-neutral-500">Belum ada video di server</p>}

			<ul className="flex flex-col gap-2">
				{videos.map((filename) => (
					<li key={filename}>
						<button
							onClick={() => onSelect(filename)}
							className={`w-full text-left px-3 py-2 border-2 border-black text-sm font-medium truncate transition ${
								selected === filename ? 'bg-[#c4a1ff]' : 'bg-[#f4f4f0] hover:bg-neutral-200'
							}`}
						>
							{filename}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
