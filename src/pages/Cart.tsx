import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import classes from './Cart.module.css'

export default function Cart() {
  const navigate = useNavigate()
  return (
    <motion.div
      className={classes.container}
      animate={{ x: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ x: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      Cart <button onClick={() => navigate('/')}>To Home</button>
    </motion.div>
  )
}
