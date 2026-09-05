import Title from "./Title";

export default function Status({loading, error}) {
    return (
        <div>
            {loading === true && <Title text={"Loading..."}/>}
            {error !== null && <Title text={error}/>}
        </div>
    )
}

