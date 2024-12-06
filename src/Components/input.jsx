import PropTypes from 'prop-types'

export default function Input({ type, placeholder, value, onChange, className, id }) {
    return <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={className} id={id} />
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    id: PropTypes.string
}

