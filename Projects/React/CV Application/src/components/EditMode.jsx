import FormField from './FormField.jsx';
import DateFormField from './DateFormField.jsx';

export default function EditMode({ data, updateSection, setEditMode }) {
    function handleEdit(event) {
        event.preventDefault();
        setEditMode();
    }

    return (
        <>
            <h1>Edit your CV</h1>
            <div className="edit-mode-container">
                <div className="edit-mode-item">
                    <h3>General Information</h3>
                    <FormField 
                        label="Name" 
                        name="name" 
                        value={data.general.name} 
                        onChange={(e) => updateSection("general", "name", e.target.value)} 
                    />
                    <FormField 
                        label="Title" 
                        name="title" 
                        value={data.general.title} 
                        onChange={(e) => updateSection("general", "title", e.target.value)} 
                    />
                    <FormField 
                        label="Email" 
                        name="email" 
                        type="email" 
                        value={data.general.email} 
                        onChange={(e) => updateSection("general", "email", e.target.value)} 
                    />
                    <FormField 
                        label="Phone" 
                        name="phone" 
                        type="tel" 
                        value={data.general.phone} 
                        onChange={(e) => updateSection("general", "phone", e.target.value)} 
                    />
                    <FormField 
                        label="Location" 
                        name="location" 
                        value={data.general.location} 
                        onChange={(e) => updateSection("general", "location", e.target.value)} 
                    />
                </div>
                <div className="edit-mode-item">
                    <h3>Education</h3>
                    <FormField 
                        label="School" 
                        name="school" 
                        value={data.education.school} 
                        onChange={(e) => updateSection("education", "school", e.target.value)} 
                    />
                    <FormField 
                        label="Title" 
                        name="title" 
                        value={data.education.title} 
                        onChange={(e) => updateSection("education", "title", e.target.value)} 
                    />
                    <FormField 
                        label="Location" 
                        name="location" 
                        value={data.education.location} 
                        onChange={(e) => updateSection("education", "location", e.target.value)} 
                    />
                    <DateFormField 
                        label="Date" 
                        name="date" 
                        value={data.education.date} 
                        onChange={(e) => updateSection("education", "date", e.target.value)} 
                    />
                </div>
                <div className="edit-mode-item">
                    <h3>Experience</h3>
                    <FormField 
                        label="Company" 
                        name="company" 
                        value={data.experience.company} 
                        onChange={(e) => updateSection("experience", "company", e.target.value)} 
                    />
                    <FormField 
                        label="Position" 
                        name="position" 
                        value={data.experience.position} 
                        onChange={(e) => updateSection("experience", "position", e.target.value)} 
                    />
                    <FormField 
                        label="Location" 
                        name="location" 
                        value={data.experience.location} 
                        onChange={(e) => updateSection("experience", "location", e.target.value)} 
                    />
                    <DateFormField 
                        label="From" 
                        name="from" 
                        value={data.experience.from} 
                        onChange={(e) => updateSection("experience", "from", e.target.value)} 
                    />
                    <DateFormField 
                        label="Until" 
                        name="until" 
                        value={data.experience.until} 
                        onChange={(e) => updateSection("experience", "until", e.target.value)} 
                    />
                    <FormField 
                        label="Responsibilities" 
                        name="description" 
                        type="textarea"
                        rows={3}
                        value={data.experience.description} 
                        onChange={(e) => updateSection("experience", "description", e.target.value)} 
                    />
                </div>
            </div>
            <div className="buttons">
                <button type="button" onClick={handleEdit}>Resubmit</button>
            </div>
        </>
    );
}
