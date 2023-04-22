import Error from '../Error';

const Field = ({ children, label, error }) => {
	return (
		<>
			<label>{label}</label>
			{children}
			{error && <Error message={error.message} />}
		</>
	);
};

export default Field;
