import { CheckIcon } from './Icons.jsx';

export default function Stepper({ steps, currentStep, onStepClick }) {
    return (
        <nav className="stepper-nav no-print" aria-label="Progress">
            <ol className="stepper-list">
                {steps.map((step, index) => {
                    const isCompleted = currentStep > index;
                    const isCurrent = currentStep === index;
                    const isClickable = index <= currentStep || isCompleted;

                    return (
                        <li key={step.id ?? index} className="stepper-item">
                            <button
                                type="button"
                                className={`stepper-btn ${isCurrent ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                                onClick={() => isClickable && onStepClick && onStepClick(index)}
                                disabled={!isClickable}
                                aria-current={isCurrent ? 'step' : undefined}
                            >
                                <span className="stepper-indicator">
                                    {isCompleted ? (
                                        <CheckIcon size={12} />
                                    ) : (
                                        index + 1
                                    )}
                                </span>
                                <span className="stepper-label">{step.label}</span>
                            </button>
                            {index < steps.length - 1 && (
                                <div
                                    className={`stepper-connector ${isCompleted ? 'filled' : ''}`}
                                    aria-hidden="true"
                                />
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
