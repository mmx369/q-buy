import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Camera from '../components/Camera'
import classes from './Scanning.module.css'

export default function Scanning() {
  const navigate = useNavigate()
  return (
    <motion.div
      className={classes.container}
      animate={{ x: '0%' }}
      exit={{ opacity: 1 }}
      initial={{ x: '100%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <Camera />
    </motion.div>
  )
}
