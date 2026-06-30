import { cn } from '@/lib/utils';
import React, { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
	({ className = '', ...props }: IInputProps, forwardedRef) => {
		return (
			<input
				ref={forwardedRef}
				className={cn(
					'w-full px-3 py-2 bg-white border-2 border-black font-sans text-base placeholder:text-neutral-400 outline-hidden transition-all focus:translate-y-1 focus:shadow-none shadow-[4px_4px_0px_0px_#000] disabled:opacity-60 disabled:cursor-not-allowed',
					className
				)}
				{...props}
			/>
		);
	}
);

Input.displayName = 'Input';
