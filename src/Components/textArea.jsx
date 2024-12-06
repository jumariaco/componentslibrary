import PropTypes from 'prop-types'

export default function TextArea({children, className, id, name, rows, cols}) {
    return (
    <textarea className={className} id={id} name={name} rows={rows} cols={cols}>
    {children}
    </textarea>)
}

TextArea.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    rows: PropTypes.number,
    cols: PropTypes.number
}