/* eslint-disable react/prop-types */
import { Helmet } from 'react-helmet'

function Title({ title }) {
    if (!title) {
        return null
    }
    return (
        <Helmet>
            <title>GadgetVista | {title}</title>
        </Helmet>
    )
}

export default Title