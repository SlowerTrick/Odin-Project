export default function Card({name, image, onClick}) {
    return(
        <div className="card" onClick={() => onClick(name)}>
            <img src={image} alt={name} className="card-image" />
            <p className="card-name">{name}</p>
        </div>
    )
}
