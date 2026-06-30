'use client';

import { useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import { listFiles } from '@/lib/api';

export interface FileListHandle {
	refresh: () => void;
}

export const FileList = forwardRef<FileListHandle>((_, ref) => {
	const [files, setFiles] = useState<string[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchFiles = async () => {
		setLoading(true);
		const res = await listFiles();
		if (res.ok) {
			setFiles(res.data.files || []);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchFiles();
	}, []);

	useImperativeHandle(ref, () => ({
		refresh: fetchFiles
	}));

	return (
		<div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] p-6">
			<h2 className="font-head text-sm uppercase mb-4 border-b-2 border-black pb-2">
				File Tersimpan ({files.length})
			</h2>

			{loading && <p className="text-sm text-neutral-500">Memuat...</p>}

			{!loading && files.length === 0 && <p className="text-sm text-neutral-500">Belum ada file yang diupload</p>}

			<ul className="flex flex-col gap-2">
				{files.map((filename) => (
					<li
						key={filename}
						className="px-3 py-2 bg-[#f4f4f0] border-2 border-black text-sm font-medium truncate"
					>
						{filename}
					</li>
				))}
			</ul>
		</div>
	);
});

FileList.displayName = 'FileList';
