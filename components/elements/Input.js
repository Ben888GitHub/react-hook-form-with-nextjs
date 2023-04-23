import { forwardRef } from 'react';

const Input = (props, ref) => {
	return <input ref={ref} {...props} />;
};

// export const Input = forwardRef((props, ref) => {
//     return <input {...props} ref={ref} />
// })

export default forwardRef(Input);
