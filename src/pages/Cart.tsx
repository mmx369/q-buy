import { motion } from 'framer-motion'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as BottomLineSvg } from '../assets/bottomLine.svg'
import { ReactComponent as BuySvg } from '../assets/buy.svg'
import camSvg from '../assets/camera.svg'
import { ReactComponent as ExitSvg } from '../assets/exit.svg'
import { Button } from '../components/ui/Button'
import AppContext from '../store/app-context'

import classes from './Cart.module.css'

export default function Cart() {
  const cartCtx = useContext(AppContext)
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
      <div
        className={
          cartCtx.cart.length === 0 ? classes.container : classes.container_cart
        }
      >
        <div className={classes.header}>
          <div className={classes.header__buyicon}>
            <BuySvg /> &nbsp; Buy
          </div>
          <div className={classes.header__exiticon}>
            <Link to={'/'}>
              <ExitSvg />
            </Link>
          </div>
        </div>
        <hr style={{ margin: '5px 8px' }} />
        <div className={classes.title}>МОИ ТОВАРЫ</div>
        <div className={classes.flexGrowBlock} />
        {cartCtx.cart.length === 0 && (
          <>
            <div
              style={{
                height: '100%',
                backgroundColor: 'transparent',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div className={classes.slide_slow}>
                <div className={classes.inner}>
                  <div
                    style={{
                      width: '250px',
                      height: '250px',
                      backgroundColor: 'transparent',
                      position: 'relative',
                      margin: 'auto',
                    }}
                  >
                    <div className={classes.topLeft}></div>
                    <div className={classes.topRight}></div>
                    <div className={classes.bottomLeft}></div>
                    <div className={classes.bottomRight}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.upperFooter}>
              <div className={classes.upperFooter__text}>
                Пока что товаров нет в корзине. Скорее добавьте новые.
              </div>
            </div>
            <div className={classes.footer}>
              <div className={classes.footer__button}>
                <Button
                  icon={camSvg}
                  children='Сканировать'
                  typeButton='button'
                  className='btn__plus_scan'
                  onClick={() => navigate('/scanning')}
                />
              </div>
              <div className={classes.footer_img}>
                <BottomLineSvg />
              </div>
            </div>
          </>
        )}

        {/* <button onClick={() => setIsShowProduct(!isShowProduct)}>
        Show Detail Page
      </button>
      {isShowProduct && <ProductDetail setIsShowProduct={setIsShowProduct} />} */}
      </div>
    </motion.div>
  )
}
