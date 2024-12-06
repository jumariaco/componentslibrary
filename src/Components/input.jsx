export default function Input({ type, placeholder, value, onChange, className, id }) {
    return <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={className} id={id} />
}

