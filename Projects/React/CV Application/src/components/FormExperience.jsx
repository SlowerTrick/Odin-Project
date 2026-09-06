import handleSubmit from '../functions/handleSubmit.js';
import FormField from './FormField.jsx';
import DateFormField from './DateFormField.jsx';

export default function FormExperience({ data, updateSection, onNext, onPrev }) {
    return (
        <form onSubmit={(e) => handleSubmit(e, onNext)}>
            <FormField 
                label="Company" 
                name="company" 
                value={data.company} 
                onChange={(e) => updateSection("experience", "company", e.target.value)} 
            />
            <FormField 
                label="Position" 
                name="position" 
                value={data.position} 
                onChange={(e) => updateSection("experience", "position", e.target.value)} 
            />
            <FormField 
                label="Location" 
                name="location" 
                value={data.location} 
                onChange={(e) => updateSection("experience", "location", e.target.value)} 
            />
            <DateFormField
                label="Start date" 
                name="from" 
                value={data.from} 
                onChange={(e) => updateSection("experience", "from", e.target.value)} 
            />
            <DateFormField 
                label="Final date" 
                name="until" 
                value={data.until} 
                onChange={(e) => updateSection("experience", "until", e.target.value)} 
            />
            <FormField 
                label="Responsibilities & Achievements" 
                name="description" 
                type="textarea"
                rows={3}
                value={data.description} 
                onChange={(e) => updateSection("experience", "description", e.target.value)} 
            />
            <div className="buttons">
                <button type="button" onClick={onPrev}>Back</button>
                <button type="submit">Confirm</button>
            </div>
        </form>
    );
}
