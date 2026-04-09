import handleEdit from "../functions/handleEdit.js"

export default function FinalScreen({setEditMode, onPrev={prevStep}}) {
    return(
        <>
            <h1>Thank you, your data has been successfully saved.</h1>
            <div className='buttons'>
                <button type="button" onClick={onPrev}>Back</button>
                <button type="button" onClick={(e) => handleEdit(e, setEditMode)}>Edit</button>
            </div>
        </>
    );
}
