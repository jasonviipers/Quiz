import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface LogoProps {
	className?: string;
	image?: string;
	width?: number;
	height?: number;
}

export const Logo: React.FC<LogoProps> = ({
	className,
	image,
	width,
	height
}: LogoProps) => {
	return (
		<Link href="/">
			<a className={className}>
				<Image src={image || ''} width={width} height={height} alt={'logo'}/>
			</a>
		</Link>
	);
};
