import Input from '@/components/elements/Input';
import StackedField from '@/components/elements/StackedFormField';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { stacked_schema } from '@/utils/form-validation';

const StackedForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		resolver: yupResolver(stacked_schema)
	});

	const handleSubmitForm = (formValues) => console.log(formValues);

	const resetForm = () => reset();

	return (
		<>
			<Head>
				<title>Stacked Form Validation</title>
				<meta name="description" content="Utilize Form Validations" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="container items-center justify-between mx-auto">
				<form
					onSubmit={handleSubmit(handleSubmitForm)}
					className="lg:w-[60%] md:w-full w-full mx-auto bg-neutral-50"
				>
					<div className="space-y-12 p-14">
						<div className="border-b border-gray-900/10 pb-12">
							<h2 className="text-base font-semibold leading-7 text-gray-900">
								Personal Information
							</h2>
							<p className="mt-1 text-sm leading-6 text-gray-600">
								Use a permanent address where you can receive mail.
							</p>

							<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
								<StackedField
									label="First name"
									error={errors.firstName}
									columnSize="sm:col-span-3"
								>
									<Input
										{...register('firstName')}
										type="text"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</StackedField>

								<StackedField label="Last name" columnSize="sm:col-span-3">
									<Input
										{...register('lastName')}
										type="text"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</StackedField>

								<StackedField
									label="Email address"
									error={errors.email}
									columnSize="sm:col-span-4"
								>
									<Input
										{...register('email')}
										type="text"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</StackedField>

								<StackedField label="Country" columnSize="sm:col-span-3">
									<select
										{...register('country')}
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
									>
										<option>United States</option>
										<option>Canada</option>
										<option>Mexico</option>
									</select>
								</StackedField>

								<StackedField label="Street address" columnSize="col-span-full">
									<Input
										{...register('street_address')}
										type="text"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</StackedField>

								<StackedField
									label="City"
									error={errors.city}
									columnSize="sm:col-span-2 sm:col-start-1"
								>
									<Input
										{...register('city')}
										type="text"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</StackedField>

								<StackedField
									label="State / Province"
									error={errors.region}
									columnSize="sm:col-span-2"
								>
									<Input
										{...register('region')}
										type="text"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</StackedField>

								<StackedField
									label="ZIP / Postal code"
									error={errors.postalCode}
									columnSize="sm:col-span-2"
								>
									<Input
										{...register('postalCode')}
										type="text"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</StackedField>
							</div>
						</div>
					</div>

					<div className="pb-10 flex items-center justify-end gap-x-6 mr-14">
						<button
							type="button"
							className="text-sm font-semibold leading-6 text-gray-900"
							onClick={resetForm}
						>
							Reset
						</button>
						<button
							type="submit"
							className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Save
						</button>
					</div>
				</form>
			</main>
		</>
	);
};

export default StackedForm;
