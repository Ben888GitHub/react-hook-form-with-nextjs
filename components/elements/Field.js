import Error from '../Error';

const Field = ({ children, label, error }) => (
	<>
		<label>{label}</label>
		{children}
		{error && <Error message={error.message} />}
	</>
);

export default Field;
