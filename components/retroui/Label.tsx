import { cn } from '@/lib/utils';
import React, { LabelHTMLAttributes } from 'react';

export interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = React.forwardRef<HTMLLabelElement, ILabelProps>(
	({ className = '', children, ...props }: ILabelProps, forwardedRef) => {
		return (
			<label
				ref={forwardedRef}
				className={cn('block font-head text-sm uppercase tracking-wide mb-1.5', className)}
				{...props}
			>
				{children}
			</label>
		);
	}
);

Label.displayName = 'Label';
