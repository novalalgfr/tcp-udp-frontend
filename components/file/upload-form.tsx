'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/retroui/Button';
import { uploadFile } from '@/lib/api';

export function UploadForm({ onUploaded }: { onUploaded?: () => void }) {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedFile(e.target.files?.[0] || null);
		setError('');
		setSuccess('');
	};

	const handleUpload = async () => {
		if (!selectedFile) {
			setError('Pilih file dulu sebelum upload');
			return;
		}

		setLoading(true);
		setError('');
		setSuccess('');

		const res = await uploadFile(selectedFile);

		setLoading(false);

		if (!res.ok) {
			setError(res.data?.error || 'Upload gagal');
			return;
		}

		setSuccess(`File "${res.data.filename}" berhasil diupload`);
		setSelectedFile(null);
		if (fileInputRef.current) fileInputRef.current.value = '';

		onUploaded?.();
	};

	return (
		<div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] p-6 flex flex-col gap-4">
			<div>
				<label
					htmlFor="file-input"
					className="block border-2 border-dashed border-black px-4 py-8 text-center cursor-pointer hover:bg-neutral-50 transition"
				>
					<span className="font-head text-sm uppercase block mb-1">
						{selectedFile ? selectedFile.name : 'Klik untuk pilih file'}
					</span>
					{selectedFile && (
						<span className="text-xs text-neutral-500">{(selectedFile.size / 1024).toFixed(1)} KB</span>
					)}
				</label>
				<input
					id="file-input"
					ref={fileInputRef}
					type="file"
					onChange={handleFileChange}
					className="hidden"
				/>
			</div>

			{error && (
				<p className="text-sm font-bold text-red-600 bg-red-50 border-2 border-red-600 px-3 py-2">{error}</p>
			)}
			{success && (
				<p className="text-sm font-bold text-[#23a094] bg-green-50 border-2 border-[#23a094] px-3 py-2">
					{success}
				</p>
			)}

			<Button
				onClick={handleUpload}
				disabled={loading || !selectedFile}
			>
				{loading ? 'Mengupload (TCP)...' : 'Upload via TCP'}
			</Button>
		</div>
	);
}
