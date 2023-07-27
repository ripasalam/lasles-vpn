import React from 'react'
import { motion } from 'framer-motion'

const ScrolledAnimation = ({children, className,...props}) => {
  return (
    <div>
      <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className={className}
              {...props}
          >
              {children}
    </motion.div>
    </div>
  )
}

export default ScrolledAnimation

