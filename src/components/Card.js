const Card = ({ item }) => {
    return (
        <div className="card">
            <img src={require(`../images/${item.coverImg}`)} alt="mount fuji" className="location-image" />
            <div className="information">
                <div className="location">
                    <img src={require("../images/location-icon.png")} alt="" className="location-icon" />
                    <p className="location-name">{item.location}</p>
                    <a href={item.googleMapsLink} className="location-link">View on Google Maps</a>
                </div>
                <h2 className="name">{item.name}</h2>
                <p className="journey-duration">{item.startDate} - {item.endDate}</p>
                <p className="description">{item.description}</p>
            </div>
        </div>
    )
}

export default Card