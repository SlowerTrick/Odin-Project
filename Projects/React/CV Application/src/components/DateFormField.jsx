export default function DateFormField({ label, name, type = "text", value, onChange, placeholder }) {
    const fieldStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-1rem",
        textAlign: "center",
        width: "100%",
        maxWidth: "300px",
    };

    return (
        <div className="input-field" style={fieldStyle}>
            <label htmlFor={name} style={{ marginBottom: "5px" }}>
                {label}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder || label}
                value={value}
                onChange={onChange}
                onFocus={(e) => {
                    if (type === "text") e.target.type = "date";
                }}
                onBlur={(e) => {
                    if (!e.target.value && type === "text") {
                        e.target.type = "text";
                    }
                }}
                style={{ width: "100%" }}
            />
        </div>
    );
}
