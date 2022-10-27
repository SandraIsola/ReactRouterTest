import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
   return  (
   <>
   <div>Home Page</div>
   <button onClick={() => navigate('order-status')}>Check Status</button>
    </>
   )
}