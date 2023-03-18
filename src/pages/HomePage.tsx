import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import classes from './HomePage.module.css'

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <>
      <motion.div
        className={classes.container}
        animate={{ x: '0%' }}
        exit={{ opacity: 1 }}
        initial={{ x: '100%' }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        HomePage Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem accusamus magni tenetur maiores distinctio, cum eveniet
        asperiores, sequi quibusdam error nesciunt omnis saepe soluta optio
        perspiciatis? Sint iusto enim delectus.
        <button onClick={() => navigate('/scanning')}>To scanning</button>
      </motion.div>
    </>
  )
}
