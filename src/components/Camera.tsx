import { useState } from 'react'
import Loader from './Loader'
import PreviewProduct from './PreviewProduct'

export default function Camera() {
  const [isLoading, setIsLoading] = useState(false)
  const [isShowPreviewProduct, setIsShowPreviewProduct] = useState(false)

  const previewHandler = () => {
    setIsLoading(false)
    setIsShowPreviewProduct(!isShowPreviewProduct)
  }

  return (
    <div>
      Camera{' '}
      <p style={{ color: 'red' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        commodi, inventore expedita ullam laudantium nihil consequatur non
        doloribus culpa sint quod rem voluptates architecto pariatur fuga
        dolorum ipsum! Dicta, officia. Scanning
      </p>
      {isLoading && <Loader />}
      {isShowPreviewProduct && !isLoading && <PreviewProduct />}
      <button onClick={() => setIsLoading(!isLoading)}>Open Loader</button>
      <button onClick={previewHandler}>Open Preview</button>
    </div>
  )
}
