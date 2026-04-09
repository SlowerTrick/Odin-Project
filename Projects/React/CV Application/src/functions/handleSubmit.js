export default function handleSubmit(event, onNext) {
    event.preventDefault();

    if(onNext)
        onNext();
}
