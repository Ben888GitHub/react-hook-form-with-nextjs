import { useForm } from 'react-hook-form';
import Error from './Error';
import { schema } from '@/utils/form-validation';
import { yupResolver } from '@hookform/resolvers/yup';

const FormValidation = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		resolver: yupResolver(schema)
	});

	const handleSubmitForm = (formValues) => {
		console.log(formValues);
	};

	const resetForm = () => reset();

	return (
		<form
			onSubmit={handleSubmit(handleSubmitForm)}
			className="flex flex-col gap-2 rounded-lg bg-neutral-50 p-8 text-neutral-900 shadow"
		>
			<label>Username</label>
			<input
				className="rounded border border-neutral-300 bg-neutral-50 p-1"
				type="text"
				{...register('username')}
			/>
			{errors.username && <Error message={errors.username.message} />}

			<label>Email</label>
			<input
				className="rounded border border-neutral-300 bg-neutral-50 p-1"
				{...register('email')}
			/>
			{errors.email && <Error message={errors.email.message} />}

			<label className="relative w-full flex flex-col">
				<span className="mb-1">Card number</span>
				<input
					className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
					type="text"
					name="card_number"
					placeholder="0000 0000 0000"
					{...register('card_number')}
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
					/>
				</svg>
			</label>
			{errors.card_number && <Error message={errors.card_number.message} />}

			<label className="relative flex-1 flex flex-col">
				<span className="mb-1">Expire date</span>
				<input
					className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
					type="text"
					name="expire_date"
					placeholder="MM/YY"
					{...register('expire_date')}
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
			</label>
			{errors.expire_date && <Error message={errors.expire_date.message} />}

			<label className="relative flex-1 flex flex-col">
				<span className=" flex items-center gap-3 mb-1">
					CVV
					<span className="relative group"></span>
				</span>
				<input
					className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
					type="text"
					name="cvv"
					placeholder="&bull;&bull;&bull;"
					{...register('cvv')}
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
					/>
				</svg>
			</label>
			{errors.cvv && <Error message={errors.cvv.message} />}

			<label>Date of Birth</label>
			<input
				className="rounded border border-neutral-300 bg-neutral-50 p-1"
				type="date"
				{...register('dob')}
			/>
			{errors.dob && <Error message={errors.dob.message} />}

			<label>Occupation</label>
			<select
				className="rounded border border-neutral-300 p-1"
				name="occupation"
				{...register('occupation')}
			>
				<option value="">Select</option>
				<option value="Frontend Developer">Frontend Developer</option>
				<option value="Freelancer">Freelancer</option>
				<option value="Accountant">Accountant</option>
				<option value="UI Engineer">UI Engineer</option>
			</select>
			{errors.occupation && <Error message={errors.occupation.message} />}

			<label className="mt-3">Developer</label>
			<div className="flex">
				<div className="flex mr-5">
					<input
						type="radio"
						{...register('dev')}
						name="dev"
						value="Yes"
						className="mr-1"
					/>
					<p>Yes</p>
				</div>
				<div className="flex">
					<input
						type="radio"
						{...register('dev')}
						name="dev"
						value="No"
						className="mr-1"
					/>
					<p>No</p>
				</div>
			</div>
			{errors.dev && <Error message={errors.dev.message} />}

			<label>Password</label>
			<input
				{...register('password')}
				className="rounded border border-neutral-300 bg-neutral-50 p-1"
				type="password"
			/>
			{errors.password && <Error message={errors.password.message} />}

			<label>Confirm Password</label>
			<input
				{...register('confirm_password')}
				className="rounded border border-neutral-300 bg-neutral-50 p-1"
				type="password"
			/>
			{errors.confirm_password && (
				<Error message={errors.confirm_password.message} />
			)}

			<div className="mt-5">
				<input
					{...register('terms_and_conditions')}
					type="checkbox"
					className="w-4 h-4 mr-1"
				/>
				<label>Accept Terms & Conditions</label>
			</div>
			{errors.terms_and_conditions && (
				<Error message={errors.terms_and_conditions.message} />
			)}

			<button
				type="submit"
				className="mt-5 rounded bg-green-500 p-2 text-neutral-50"
			>
				Submit
			</button>

			<button
				type="button"
				className="mt-5 rounded bg-[#6c757d] p-2 text-neutral-50"
				onClick={resetForm}
			>
				Reset
			</button>
		</form>
	);
};

export default FormValidation;
