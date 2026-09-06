export default function FormField({ 
    label, 
    name, 
    type = "text", 
    value, 
    onChange, 
    placeholder,
    rows = 3
}) {
    return (
        <div className="input-field">
            {type === "textarea" ? (
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder || label}
                    value={value || ''}
                    onChange={onChange}
                    rows={rows}
                />
            ) : (
                <input
                    id={name}
                    type={type}
                    name={name}
                    placeholder={placeholder || label}
                    value={value || ''}
                    onChange={onChange}
                />
            )}
        </div>
    );
}
