import React, { useState } from "react";

export default function StarRating({ 
    totalStars = 5,
    initialRating = 0,
    onRatingChange,
    readOnly = false
}) {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(0);

    const handleRating = (currentRating) => {
        if (readOnly) return;
        setRating(currentRating);
        if (onRatingChange) {
            onRatingChange(currentRating);
        }
    };

    const activeRating = readOnly ? initialRating : (hover || rating);

    return (
        <div 
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
            role={readOnly ? "img" : "radiogroup"}
            aria-label={readOnly ? `Avaliação de ${initialRating} de ${totalStars} estrelas` : "Star rating"}
        >
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                let fillPercent = 0;

                if (activeRating >= starValue) {
                    fillPercent = 100;
                } else if (activeRating > starValue - 1) {
                    fillPercent = (activeRating - (starValue - 1)) * 100;
                }

                const gradientId = `star-grad-${index}`;
                const isHovered = !readOnly && starValue <= hover;

                const Element = readOnly ? "div" : "button";
                const starPath = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

                return (
                    <Element
                        key={starValue}
                        type={readOnly ? undefined : "button"}
                        onClick={() => handleRating(starValue)}
                        onMouseEnter={() => !readOnly && setHover(starValue)}
                        onMouseLeave={() => !readOnly && setHover(0)}
                        role={readOnly ? undefined : "radio"}
                        aria-checked={readOnly ? undefined : rating === starValue}
                        aria-label={readOnly ? undefined : `Rate ${starValue} out of ${totalStars} stars`}
                        style={{
                            background: "transparent",
                            border: "none",
                            cursor: readOnly ? "default" : "pointer",
                            outline: "none",
                            padding: "0",
                            fontSize: "2rem",
                            display: "flex",
                            transition: "transform 0.1s ease",
                            transform: isHovered ? "scale(1.1)" : "scale(1)",
                        }}
                    >
                        <svg
                            width="0.8em"
                            height="0.8em"
                            viewBox="0 0 24 24"
                        >
                            <defs>
                                <linearGradient id={gradientId}>
                                    <stop offset={`${fillPercent}%`} stopColor="var(--color-accent-primary)" />
                                    <stop offset={`${fillPercent}%`} stopColor="transparent" />
                                </linearGradient>
                            </defs>
                            
                            <path d={starPath} fill={`url(#${gradientId})`} />
                            
                            <path 
                                d={starPath} 
                                fill="none" 
                                stroke={fillPercent === 100 ? "none" : "#b5b8c0"} 
                                strokeWidth="0.5" 
                                strokeLinejoin="round" 
                            />
                        </svg>
                    </Element>
                );
            })}
            <span style={{ marginLeft: "10px", fontSize: "0.8rem", color: "var(--color-text-primary)" }}>
                {readOnly ? initialRating : rating} / {totalStars}
            </span>
        </div>
    );
}
