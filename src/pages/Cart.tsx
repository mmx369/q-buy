import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail'
import classes from './Cart.module.css'

export default function Cart() {
  const navigate = useNavigate()
  const [isShowProduct, setIsShowProduct] = useState(false)
  return (
    <motion.div
      className={classes.container}
      animate={{ x: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ x: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      Cart <button onClick={() => navigate('/')}>To Home</button>
      <button onClick={() => setIsShowProduct(!isShowProduct)}>
        Show Detail Page
      </button>
      {isShowProduct && <ProductDetail setIsShowProduct={setIsShowProduct} />}
    </motion.div>
  )
}
