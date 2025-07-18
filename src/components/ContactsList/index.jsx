import { connect } from 'react-redux'
import { deleteContact } from '../../store/slices/contactsSlice'

function ContactsList ({ contacts, deleteContactById }) {
  return (
    <ul>
      {contacts.map(c => (
        <li key={c.id}>
          {JSON.stringify(c)}
          <button onClick={() => deleteContactById(c.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ contactsData }) => contactsData

const mapDispatchToProps = dispatch => ({
  deleteContactById: id => dispatch(deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList)
