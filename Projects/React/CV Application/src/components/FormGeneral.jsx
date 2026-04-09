import handleSubmit from '../functions/handleSubmit.js'
import FormField from './FormField.jsx'

export default function FormGeneral({ data, updateSection, onNext }) {
    return (
        <form onSubmit={(e) => handleSubmit(e, onNext)}>
            <FormField 
                label="Name" name="name" value={data.name}
                onChange={(e) => updateSection("general", "name", e.target.value)} 
            />
            <FormField 
                label="Email" name="email" type="email" value={data.email}
                onChange={(e) => updateSection("general", "email", e.target.value)} 
            />
            <FormField 
                label="Phone Number" name="phone" type="number" value={data.phone}
                onChange={(e) => updateSection("general", "phone", e.target.value)} 
            />
            <button type="submit">Confirm</button>
        </form>
    );
}
