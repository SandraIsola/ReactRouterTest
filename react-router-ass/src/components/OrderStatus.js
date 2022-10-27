import { useNavigate } from 'react-router-dom'

export const OrderStatus =() => {
    const navigate = useNavigate()

    return (
        <>
        <div>Order Confirmed!</div>
        <button onClick={() => navigate(-1)}>Go back</button>
        </>
    )

}