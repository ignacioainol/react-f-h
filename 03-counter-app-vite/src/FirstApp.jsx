import PropTypes from 'prop-types'

const sendMessage = () => {
  return 'Sending Message Function'
}

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

FirstApp.defaultProps = {
  name: 'Ignacio Ainol',
  subTitle: 'No hay title',
  title: 'No hay title',
}