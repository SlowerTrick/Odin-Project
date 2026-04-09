import handleSubmit from '../functions/handleSubmit.js'
import FormField from './FormField.jsx'
import DateFormField from './DateFormField.jsx'

export default function FormExperience({ data, updateSection, onNext, onPrev }) {
    return (
        <form onSubmit={(e) => handleSubmit(e, onNext)}>
            <FormField 
                label="Company" name="company" value={data.company} 
                onChange={(e) => updateSection("experience", "company", e.target.value)} 
            />
            <FormField 
                label="Position" name="position" value={data.position} 
                onChange={(e) => updateSection("experience", "position", e.target.value)} 
            />
            <DateFormField
                label="Start date" name="from" type="date" value={data.from} 
                onChange={(e) => updateSection("experience", "from", e.target.value)} 
            />
            <DateFormField 
                label="Final date" name="until" type="date" value={data.until} 
                onChange={(e) => updateSection("experience", "until", e.target.value)} 
            />
            <div className='buttons'>
                <button type="button" onClick={onPrev}>Back</button>
                <button type="submit">Confirm</button>
            </div>
        </form>
    );
}
