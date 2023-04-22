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
                Pin a footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed
                navbar has been added with <code className="small">padding-top: 60px;</code> on the{' '}
                <code className="small">main &gt; .container</code>.
            </p>
        </>
    )
}

export default About
