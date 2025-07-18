import { connect } from 'react-redux'
import { deleteContact, updateContact } from '../../store/slices/contactsSlice'

function ContactsList ({ contacts, deleteContactById, updateContactById }) {
  const isChangeFavorite = (id, checked) => {
    updateContactById(id, { isFavorite: checked })
  }

  return (
    <ul>
      {contacts.map(c => (
        <li key={c.id}>
          <label>
            <input
              type='checkbox'
              checked={c.isFavorite}
              onChange={({ target: { checked } }) => {
                isChangeFavorite(c.id, checked)
              }}
            />
            {JSON.stringify(c)}
          </label>
          <button onClick={() => deleteContactById(c.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ contactsData }) => contactsData

const mapDispatchToProps = dispatch => ({
  deleteContactById: id => dispatch(deleteContact(id)),
  updateContactById: (id, data) => dispatch(updateContact({ id, data }))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList)
