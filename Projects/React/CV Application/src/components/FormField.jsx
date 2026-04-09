export default function FormField({ label, name, type = "text", value, onChange, placeholder }) {
    return (
        <div className="input-field">
            {/* <label htmlFor={name}>{label}</label> */}
            <input
                id={name}
                type={type}
                name={name}
                placeholder={label}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
