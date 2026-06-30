'use client';

import { useRef } from 'react';
import { UploadForm } from '@/components/file/upload-form';
import { FileList, FileListHandle } from '@/components/file/file-list';

export default function UploadPage() {
	const fileListRef = useRef<FileListHandle>(null);

	return (
		<div className="relative min-h-screen bg-[#f8f8f8] text-black font-sans">
			<div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

			<div className="relative z-10 flex flex-col items-center px-4 py-12 max-w-2xl mx-auto">
				<div className="mb-8 text-center">
					<h1 className="font-head text-4xl md:text-5xl uppercase tracking-tighter mb-2">
						Upload <span className="bg-[#ffc900] px-2 border-2 border-black">File</span>
					</h1>
					<p className="text-neutral-700 text-sm md:text-base">File dikirim ke server lewat protokol TCP</p>
				</div>

				<div className="w-full flex flex-col gap-6">
					<UploadForm onUploaded={() => fileListRef.current?.refresh()} />
					<FileList ref={fileListRef} />
				</div>
			</div>
		</div>
	);
}
