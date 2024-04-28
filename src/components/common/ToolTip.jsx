/* eslint-disable react/prop-types */
import Tooltip from 'rc-tooltip'

function ToolTip({ content, tooltipMessage }) {
    return (
        <Tooltip placement="bottom" overlay={<span>{tooltipMessage}</span>}>
            <span>{content}</span>
        </Tooltip>
    )
}

export default ToolTip