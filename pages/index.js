import Head from 'next/head';
import { Inter } from 'next/font/google';
import FormValidation from '@/components/FormValidation';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Form Validation</title>
				<meta name="description" content="Utilize Form Validations" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main
				className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
			>
				<p className="text-3xl mb-10">
					React Hook Form usages with Yup and Tailwind in Next.js
				</p>
				<FormValidation />
			</main>
		</>
	);
}
