const CheckOutCard = ({imageUrl, title, price}) => {

    return (
        <div >
        <div className="divider m-0"></div>
        <div className="card-body">
            <img src={imageUrl}/>
            <h2>{title}</h2>
            <h5>{price}</h5>
       
        </div>
        <div className="card-actions">
          remove and incdrement button goes here
        </div>
      </div>
    )
}

export default CheckOutCard;