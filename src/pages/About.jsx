import React, { useEffect } from 'react'
import Progress from '../components/nprogress/Progress'

const About = () => {
    const [loading, setLoading] = React.useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            <Progress isAnimating={loading} key={0} />
            <h4 className="mt-5 fw-bold">About</h4>
            <p className="lead">
                <div
                    style={{ fontSize: '16px' }}
                    dangerouslySetInnerHTML={{
                        __html: `<h5>Welcome to our About page!</h5>
                  <p>We're delighted to have you here and to share more about who we are and what we do.</p>
                  <p>Our company was founded on the belief that everyone deserves access to high-quality products and services. We believe that innovation and technology can help level the playing field and provide greater opportunities for individuals and businesses alike.</p>
                  <p>At our core, we are a team of passionate individuals who are dedicated to delivering exceptional value to our customers. We are committed to staying at the forefront of our industry and continuously improving our products and services.</p>
                  <p>Whether you're a long-time customer or you're just getting to know us, we want to assure you that you can count on us to provide you with the best possible experience. Our goal is to exceed your expectations and to build a lasting relationship with you based on trust, respect, and transparency.</p>
                  <p>Thank you for taking the time to learn more about us. We hope that you will explore our website further and see all that we have to offer. If you have any questions or comments, please don't hesitate to get in touch with us. We'd love to hear from you!</p>
                `,
                    }}
                ></div>
            </p>
        </>
    )
}

export default About
