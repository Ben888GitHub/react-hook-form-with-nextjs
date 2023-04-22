import { useForm } from 'react-hook-form';
import Error from './Error';
import { schema } from '@/utils/form-validation';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	CreditCardIcon,
	CalendarDaysIcon,
	LockClosedIcon
} from '@heroicons/react/24/outline';
import Field from './elements/Field';
import CardField from './elements/CardField';

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
			<Field label="Username" error={errors.username}>
				<input
					className="rounded border border-neutral-300 bg-neutral-50 p-1"
					type="text"
					{...register('username')}
				/>
			</Field>
			<Field label="Email" error={errors.email}>
				<input
					className="rounded border border-neutral-300 bg-neutral-50 p-1"
					{...register('email')}
				/>
			</Field>

			<CardField label="Card number" error={errors.card_number}>
				<input
					className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
					type="text"
					name="card_number"
					placeholder="0000 0000 0000"
					{...register('card_number')}
				/>
			</CardField>

			<label className="relative flex-1 flex flex-col">
				<span className="mb-1">Expire date</span>
				<input
					className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
					type="text"
					name="expire_date"
					placeholder="MM/YY"
					{...register('expire_date')}
				/>
				<CalendarDaysIcon className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" />
			</label>
			{errors.expire_date && <Error message={errors.expire_date.message} />}

			<label className="relative flex-1 flex flex-col">
				<span className="mb-1">CVV</span>

				<input
					className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
					type="text"
					name="cvv"
					placeholder="&bull;&bull;&bull;"
					{...register('cvv')}
				/>
				<LockClosedIcon className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" />
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

			<label className="block  mt-2 text-sm font-medium text-gray-900 ">
				Upload file
			</label>
			<input
				className="block w-full text-sm  border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
				type="file"
				{...register('file_upload')}
			/>
			{errors.file_upload && <Error message={errors.file_upload.message} />}
			<Field label="Password" error={errors.password}>
				<input
					{...register('password')}
					className="rounded border border-neutral-300 bg-neutral-50 p-1"
					type="password"
				/>
			</Field>

			<Field label="Confirm Password" error={errors.confirm_password}>
				<input
					{...register('confirm_password')}
					className="rounded border border-neutral-300 bg-neutral-50 p-1"
					type="password"
				/>
			</Field>

			<div className="mt-5">
				<input
					{...register('terms_and_conditions')}
					type="checkbox"
					className="w-4 h-4 mr-1 rounded"
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
