export default function handleEdit(event, setEditMode) {
    event.preventDefault();

    console.log(setEditMode);
    if(setEditMode)
        setEditMode();
}
