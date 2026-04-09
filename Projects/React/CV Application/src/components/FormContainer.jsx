import { useState } from 'react'
import FormGeneral from "./FormGeneral";
import FormExperience from "./FormExperience.jsx"
import FormSchool from "./FormSchool.jsx"
import FinalScreen from './FinalScreen.jsx';
import EditMode from './EditMode.jsx';

export default function FormContainer() {
    const [step, setStep] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [cvData, setCvData] = useState({
        general: {
            name: "",
            email: "",
            phone: "",
        },
        education: {
            school: "",
            title: "",
            date: "",
        },
        experience: {
            company: "",
            position: "",
            from: "",
            until: "",
        },
    });

    const stepsConfig = [
        {
            title: "Talk about Yourself",
            component: FormGeneral,
            key: "general",
        },
        {
            title: "Talk about your Education",
            component: FormSchool,
            key: "education",
        },
        {
            title: "Talk about your Practical Experience",
            component: FormExperience,
            key: "experience",
        },
    ];

    const MAX_STEPS = stepsConfig.length;
    const CurrentForm = step < MAX_STEPS ? stepsConfig[step].component : null;

    function nextStep() {
        setStep((prev) => Math.min(prev + 1, stepsConfig.length));
    }

    function prevStep() {
        setStep((prev) => Math.max(prev - 1, 0));
    }

    function setEditMode() {
        setIsEditing((prev) => !prev);
    }

    function updateSection(section, field, value) {
        setCvData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }));
    }

    function selectScreen() {
        if (isEditing) {
            return (
                <EditMode
                    data={cvData}
                    updateSection={updateSection}
                    setEditMode={setEditMode}
                />
            );
        }
        else if(step < MAX_STEPS) {
            return (
                <>
                    <h1>{stepsConfig[step].title}</h1>
                    <CurrentForm
                        data={cvData[stepsConfig[step].key]}
                        updateSection={updateSection}
                        onNext={nextStep}
                        onPrev={prevStep}
                    />
                </>
            )
        }
        return (
            <>
                <FinalScreen 
                    setEditMode={setEditMode}
                    onPrev={prevStep}
                />
                {/* <hr /> */}
                {/* <h2>Preview</h2> */}
                {/* <pre>{JSON.stringify(cvData, null, 2)}</pre> */}
            </>
        )
    }


    return (
        <div key={`${step}-${isEditing}`} className="screen-content">
            <div className='form-container'>
                {selectScreen()}
            </div>
        </div>
    )
}
