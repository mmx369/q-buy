import { useNavigate } from 'react-router-dom'
import classes from './PreviewProduct.module.css'

export default function PreviewProduct() {
  const navigate = useNavigate()
  const navigateHandler = () => {
    navigate('/cart')
  }

  return (
    <div className={classes.container}>
      PreviewProduct{' '}
      <div>
        <button onClick={navigateHandler}>To cart</button>
      </div>
    </div>
  )
}
