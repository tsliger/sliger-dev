import { useState, useRef, useEffect, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type ParallaxProps = {
  children: ReactNode
  offset?: number
}

const Parallax = ({ children, offset = 50 }: ParallaxProps): JSX.Element => {
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = useRef(null)

  const { scrollY } = useScroll()

  // start animating our element when we've scrolled it into view
  const initial = elementTop - clientHeight
  // end our animation when we've scrolled the offset specified
  const final = elementTop + offset

  const y = useTransform(scrollY, [initial, final], [offset, -offset])

  useEffect(() => {
    const element = ref.current
    // save our layout measurements in a function in order to trigger
    // it both on mount and on resize
    const onResize = () => {
      // use getBoundingClientRect instead of offsetTop in order to
      // get the offset relative to the viewport
      setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset)
      setClientHeight(window.innerHeight)
    }
    onResize()
  }, [ref])

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}

export default Parallax
