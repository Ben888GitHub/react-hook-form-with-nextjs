import Image from 'next/image';
import { Inter } from 'next/font/google';
import FormValidation from '@/components/FormValidation';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main
			className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<p className="text-3xl mb-10">
				React Hook Form usages with Yup and Tailwind in Next.js
			</p>
			<FormValidation />
		</main>
	);
}
