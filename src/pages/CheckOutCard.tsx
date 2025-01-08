import { useNavigate } from "react-router-dom";

const CheckOutCard = ({imageUrl, title, price, itemCount, itemId}) => {
    const navigate = useNavigate()

    const navigateHandler = () => {
        navigate(`/products/${itemId}`)
    } 

    return (
        <div  onClick={navigateHandler}>
        <div className="divider m-0"></div>
        <div className="card-body">
            <img src={imageUrl}/>
            <h2>{title}</h2>
            <h5>{price}</h5>
            <h5>{itemCount}</h5>
       
        </div>
        <div className="card-actions">
          remove and incdrement button goes here
        </div>
      </div>
    )
}

export default CheckOutCard;