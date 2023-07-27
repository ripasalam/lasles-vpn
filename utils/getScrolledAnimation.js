import React from 'react'

const getScrolledAnimation = () => {
    return (
        {
            offscreen: {
                y: 300,
                opacity: 0,
            },
            onscreen: ({ duration = 2 } = {}) => ({
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration

                }
            })
        }
    )
}

export default getScrolledAnimation