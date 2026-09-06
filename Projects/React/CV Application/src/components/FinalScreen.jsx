function formatDate(dateStr) {
    if (!dateStr) return '';
    try {
        const parts = dateStr.split('-');
        if (parts.length >= 2) {
            const year = parseInt(parts[0], 10);
            const monthIndex = parseInt(parts[1], 10) - 1;
            const months = [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ];
            if (monthIndex >= 0 && monthIndex < 12 && !isNaN(year)) {
                return `${months[monthIndex]} ${year}`;
            }
        }
        return dateStr;
    } catch {
        return dateStr;
    }
}

export default function FinalScreen({ data, setEditMode, onPrev }) {
    const handlePrint = () => {
        window.print();
    };

    const general = data?.general || {};
    const education = data?.education || {};
    const experience = data?.experience || {};

    const startDate = formatDate(experience.from);
    const endDate = experience.until ? formatDate(experience.until) : 'Present';
    const experienceDateRange = startDate ? `${startDate} – ${endDate}` : (experience.until ? endDate : '');
    const educationDate = formatDate(education.date);

    return (
        <div className="final-screen-wrapper">
            <h1>Thank you, your data has been successfully saved.</h1>

            <div className="cv-summary-card">
                {/* General Information */}
                <div className="summary-section">
                    <h3>General Information</h3>
                    <div className="summary-details">
                        {general.name && <p><strong>Name:</strong> {general.name}</p>}
                        {general.title && <p><strong>Title:</strong> {general.title}</p>}
                        {general.email && <p><strong>Email:</strong> {general.email}</p>}
                        {general.phone && <p><strong>Phone:</strong> {general.phone}</p>}
                        {general.location && <p><strong>Location:</strong> {general.location}</p>}
                        {general.summary && <p><strong>Summary:</strong> {general.summary}</p>}
                    </div>
                </div>

                <hr />

                {/* Education */}
                <div className="summary-section">
                    <h3>Education</h3>
                    <div className="summary-details">
                        {education.school && <p><strong>School:</strong> {education.school}</p>}
                        {education.title && <p><strong>Degree / Major:</strong> {education.title}</p>}
                        {education.location && <p><strong>Location:</strong> {education.location}</p>}
                        {educationDate && <p><strong>Conclusion Date:</strong> {educationDate}</p>}
                    </div>
                </div>

                <hr />

                {/* Experience */}
                <div className="summary-section">
                    <h3>Practical Experience</h3>
                    <div className="summary-details">
                        {experience.company && <p><strong>Company:</strong> {experience.company}</p>}
                        {experience.position && <p><strong>Position:</strong> {experience.position}</p>}
                        {experience.location && <p><strong>Location:</strong> {experience.location}</p>}
                        {experienceDateRange && <p><strong>Period:</strong> {experienceDateRange}</p>}
                        {experience.description && <p><strong>Responsibilities:</strong> {experience.description}</p>}
                    </div>
                </div>
            </div>

            <div className="buttons no-print">
                <button type="button" onClick={onPrev}>Back</button>
                <button type="button" onClick={() => setEditMode()}>Edit</button>
                <button type="button" onClick={handlePrint}>Print</button>
            </div>
        </div>
    );
}
