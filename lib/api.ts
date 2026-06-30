// frontend/lib/api.ts

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

type ApiResponse<T = any> = {
	ok: boolean;
	status: number;
	data: T;
};

async function request<T = any>(path: string, options?: RequestInit): Promise<ApiResponse<T>> {
	const res = await fetch(`${API_URL}${path}`, {
		...options,
		headers: {
			...(options?.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
			...options?.headers
		}
	});

	const data = await res.json().catch(() => null);

	return {
		ok: res.ok,
		status: res.status,
		data
	};
}

// ---- Auth ----

export function registerUser(email: string, password: string) {
	return request('/api/auth/register', {
		method: 'POST',
		body: JSON.stringify({ email, password })
	});
}

export function loginUser(email: string, password: string) {
	return request('/api/auth/login', {
		method: 'POST',
		body: JSON.stringify({ email, password })
	});
}

export function verifyAccount(token: string) {
	return request(`/api/auth/verify?token=${encodeURIComponent(token)}`, {
		method: 'GET'
	});
}

// ---- File (TCP upload) ----

export function uploadFile(file: File) {
	const formData = new FormData();
	formData.append('file', file);

	return request('/api/file/upload', {
		method: 'POST',
		body: formData
	});
}

export function listFiles() {
	return request('/api/file/list', {
		method: 'GET'
	});
}

// ---- Stream (UDP) ----

export function getStreamUrl(filename: string) {
	return `${API_URL}/api/file/stream/${encodeURIComponent(filename)}`;
}

export function listVideos() {
	return request('/api/file/videos', {
		method: 'GET'
	});
}
