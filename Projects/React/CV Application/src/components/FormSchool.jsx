import handleSubmit from '../functions/handleSubmit.js'
import FormField from './FormField.jsx'
import DateFormField from './DateFormField.jsx'

export default function FormSchool({ data, updateSection, onNext, onPrev }) {
    return (
        <form onSubmit={(e) => handleSubmit(e, onNext)}>
            <FormField 
                label="School" name="school" value={data.school} 
                onChange={(e) => updateSection("education", "school", e.target.value)} 
            />
            <FormField 
                label="Title" name="title" value={data.title} 
                onChange={(e) => updateSection("education", "title", e.target.value)} 
            />
            <DateFormField
                label="Conclusion Date" name="date" type="date" value={data.date} 
                onChange={(e) => updateSection("education", "date", e.target.value)} 
            />
            <div className='buttons'>
                <button type="button" onClick={onPrev}>Back</button>
                <button type="submit">Confirm</button>
            </div>
        </form>
    );
}
