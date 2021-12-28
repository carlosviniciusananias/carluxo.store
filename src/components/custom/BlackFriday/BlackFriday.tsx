import React from 'react'
import { Button, Carousel } from '@faststore/ui'

function BlackFriday() {
    return (
        <>
            <Carousel
                controls="complete"
                transition={{
                    duration: 400,
                    property: 'transform'
                }}
            >
                <img
                    alt=""
                    height={614}
                    src="https://storecomponents.vtex.app/assets/fit-in/1280x613/center/middle/https%3A%2F%2Fstorecomponents.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F331632a0-fa52-4f08-8e45-df762d97a289___167e4c8385c3129b1a2ddab9156510ba.jpg"
                    width="100%"
                />
                <img
                    alt=""
                    height={614}
                    src="https://storecomponents.vtex.app/assets/fit-in/1280x613/center/middle/https%3A%2F%2Fstorecomponents.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2Fedce348c-068c-4fb9-91f2-7d235d596e0f___b2822f893b14f87337d08f07f0e520ab.jpg"
                    width="100%"
                />
            </Carousel>

            <Button>Button</Button>
        </>
    )
}

export default BlackFriday