export default function DateFormField({ label, name, value, onChange, placeholder }) {
    return (
        <div className="input-field date-field">
            <label htmlFor={name} className="field-label">
                {label}
            </label>
            <input
                id={name}
                type="date"
                name={name}
                placeholder={placeholder || label}
                value={value || ''}
                onChange={onChange}
            />
        </div>
    );
}
