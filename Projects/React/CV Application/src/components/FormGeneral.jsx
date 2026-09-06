import handleSubmit from '../functions/handleSubmit.js';
import FormField from './FormField.jsx';

export default function FormGeneral({ data, updateSection, onNext }) {
    return (
        <form onSubmit={(e) => handleSubmit(e, onNext)}>
            <FormField 
                label="Full Name" 
                name="name" 
                value={data.name}
                onChange={(e) => updateSection("general", "name", e.target.value)} 
            />
            <FormField 
                label="Professional Title" 
                name="title" 
                value={data.title}
                onChange={(e) => updateSection("general", "title", e.target.value)} 
            />
            <FormField 
                label="Email Address" 
                name="email" 
                type="email" 
                value={data.email}
                onChange={(e) => updateSection("general", "email", e.target.value)} 
            />
            <FormField 
                label="Phone Number" 
                name="phone" 
                type="tel" 
                value={data.phone}
                onChange={(e) => updateSection("general", "phone", e.target.value)} 
            />
            <FormField 
                label="Location" 
                name="location" 
                value={data.location}
                onChange={(e) => updateSection("general", "location", e.target.value)} 
            />
            <button type="submit">Confirm</button>
        </form>
    );
}
