import { useState } from 'react'
import classes from './ProductDetail.module.css'

export default function ProductDetail({ setIsShowProduct }: any) {
  const [isVisible, setIsVisible] = useState(true)

  const deleteHandler = () => {
    setIsVisible(false)
    setTimeout(() => {
      setIsShowProduct(false)
    }, 300)
  }

  return (
    <div
      className={
        isVisible
          ? `${classes.container}`
          : `${classes.container} ${classes.down}`
      }
    >
      ProductDetail{' '}
      <div>
        <button onClick={deleteHandler}>delete</button>
      </div>
    </div>
  )
}
