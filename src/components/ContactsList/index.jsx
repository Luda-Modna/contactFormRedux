import { connect } from 'react-redux'

function ContactsList ({ contacts }) {
  return (
    <ul>
      {contacts.map(c => (
        <li key={c.id}>{JSON.stringify(c)}</li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ contactsData }) => contactsData

export default connect(mapStateToProps)(ContactsList)
