import { useForm } from 'react-hook-form';
import Error from './Error';
import { schema } from '@/utils/form-validation';
import { yupResolver } from '@hookform/resolvers/yup';
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

	const handleSubmitForm = (formValues) => console.log(formValues);

	const resetForm = () => reset();

	const {
		username,
		email,
		card_number,
		expire_date,
		cvv,
		dob,
		occupation,
		dev,
		file_upload,
		password,
		confirm_password,
		terms_and_conditions
	} = errors;

	return (
		<form
			onSubmit={handleSubmit(handleSubmitForm)}
			className="flex flex-col gap-2 rounded-lg bg-neutral-50 p-8 text-neutral-900 shadow"
		>
			<Field label="Username" error={username}>
				<input
					className="rounded border border-neutral-300 bg-neutral-50 p-1"
					type="text"
					{...register('username')}
				/>
			</Field>
			<Field label="Email" error={email}>
				<input
					className="rounded border border-neutral-300 bg-neutral-50 p-1"
					{...register('email')}
				/>
			</Field>

			<CardField label="Card number" error={card_number}>
				<input
					className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
					type="text"
					name="card_number"
					placeholder="0000 0000 0000"
					{...register('card_number')}
				/>
			</CardField>

			<CardField label="Expire date" error={expire_date}>
				<input
					className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
					type="text"
					name="expire_date"
					placeholder="MM/YY"
					{...register('expire_date')}
				/>
			</CardField>

			<CardField label="CVV" error={cvv}>
				<input
					className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
					type="text"
					name="cvv"
					placeholder="&bull;&bull;&bull;"
					{...register('cvv')}
				/>
			</CardField>

			<Field label="Date of Birth" error={dob}>
				<input
					className="rounded border border-neutral-300 bg-neutral-50 p-1"
					type="date"
					{...register('dob')}
				/>
			</Field>

			<Field label="Occupation" error={occupation}>
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
			</Field>

			<Field label="Developer" error={dev}>
				<div>
					<div className="flex">
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
			</Field>

			<Field label="Upload file" error={file_upload}>
				<input
					className="block w-full text-sm  border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
					type="file"
					{...register('file_upload')}
				/>
			</Field>

			<Field label="Password" error={password}>
				<input
					{...register('password')}
					className="rounded border border-neutral-300 bg-neutral-50 p-1"
					type="password"
				/>
			</Field>

			<Field label="Confirm Password" error={confirm_password}>
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
			{terms_and_conditions && <Error message={terms_and_conditions.message} />}

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
