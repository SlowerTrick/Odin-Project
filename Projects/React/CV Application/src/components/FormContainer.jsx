import { useState } from 'react';
import FormGeneral from "./FormGeneral";
import FormExperience from "./FormExperience.jsx";
import FormSchool from "./FormSchool.jsx";
import FinalScreen from './FinalScreen.jsx';
import EditMode from './EditMode.jsx';
import Stepper from './Stepper.jsx';

export default function FormContainer() {
    const [step, setStep] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [cvData, setCvData] = useState({
        general: {
            name: "",
            title: "",
            email: "",
            phone: "",
            location: "",
            summary: "",
        },
        education: {
            school: "",
            title: "",
            location: "",
            date: "",
        },
        experience: {
            company: "",
            position: "",
            location: "",
            from: "",
            until: "",
            description: "",
        },
    });

    const stepsConfig = [
        {
            id: 0,
            label: "Personal",
            title: "Talk about Yourself",
            component: FormGeneral,
            key: "general",
        },
        {
            id: 1,
            label: "Education",
            title: "Talk about your Education",
            component: FormSchool,
            key: "education",
        },
        {
            id: 2,
            label: "Experience",
            title: "Talk about your Practical Experience",
            component: FormExperience,
            key: "experience",
        },
        {
            id: 3,
            label: "Preview",
            title: "Summary",
            component: null,
            key: "preview",
        },
    ];

    const MAX_STEPS = 3;

    function nextStep() {
        setStep((prev) => Math.min(prev + 1, MAX_STEPS));
    }

    function prevStep() {
        setStep((prev) => Math.max(prev - 1, 0));
    }

    function goToStep(stepIndex) {
        setIsEditing(false);
        setStep(stepIndex);
    }

    function toggleEditMode() {
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

    const CurrentForm = step < MAX_STEPS ? stepsConfig[step].component : null;

    function renderScreen() {
        if (isEditing) {
            return (
                <EditMode
                    data={cvData}
                    updateSection={updateSection}
                    setEditMode={toggleEditMode}
                />
            );
        }

        if (step < MAX_STEPS) {
            return (
                <>
                    <h1>{stepsConfig[step].title}</h1>
                    {CurrentForm && (
                        <CurrentForm
                            data={cvData[stepsConfig[step].key]}
                            updateSection={updateSection}
                            onNext={nextStep}
                            onPrev={prevStep}
                        />
                    )}
                </>
            );
        }

        return (
            <FinalScreen 
                data={cvData}
                setEditMode={toggleEditMode}
                onPrev={prevStep}
            />
        );
    }

    return (
        <div className="screen-content">
            {!isEditing && (
                <div className="stepper-wrapper no-print">
                    <Stepper 
                        steps={stepsConfig} 
                        currentStep={step} 
                        onStepClick={goToStep} 
                    />
                </div>
            )}
            <div className="form-container">
                {renderScreen()}
            </div>
        </div>
    );
}
