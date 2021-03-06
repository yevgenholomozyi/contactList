import mutations from '../mutations';

const {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  ADD_CONTACT_FIELD,
  RUN_ROLLBACK,
  ROLLBACK_DELETE_ITEM,
  ROLLBACK_RETURN_ITEM,
  REMOVE_CONTACT_FIELD,
  ROLLBACK_UPDATE,
  ROLLBACK_FIELD,
  ROLLBACK_DELETED_FIELD,
} = mutations;

const contactStore = {
  namespaced: true,
  state: {
    contacts: [],
    rollbackStack: [],
  },
  getters: {
    contactList: ({ contacts }) => contacts,
    contactById: ({ contacts }) => (id) => contacts.find((c) => c.id === id),
  },
  mutations: {
    [ADD_CONTACT](state, value) {
      const { contacts, rollbackStack } = state;
      const newContacts = contacts.slice();
      const rollbackStackAdded = rollbackStack.slice();

      newContacts.push(value);
      newContacts.reverse();

      rollbackStackAdded.push({
        type: ROLLBACK_DELETE_ITEM,
        id: value.id,
      });
      state.contacts = newContacts;
      state.rollbackStack = rollbackStackAdded;
    },

    [DELETE_CONTACT](state, value) {
      const { contacts, rollbackStack } = state;
      const deletedItem = contacts.find((c) => c.id === value);
      const deletedIndex = contacts.findIndex((c) => c === deletedItem);
      const withRemovedContact = contacts.filter((c) => c.id !== value);
      const rollbackStackDeleted = rollbackStack.slice();

      rollbackStackDeleted.push({
        type: ROLLBACK_RETURN_ITEM,
        deletedItem,
        deletedIndex,
      });

      state.contacts = withRemovedContact;
      state.rollbackStack = rollbackStackDeleted;
    },

    [UPDATE_CONTACT](state, value) {
      const rollbackStackUpdated = state.rollbackStack.slice();
      const previusContact = state.contacts.find((c) => c.id === value.id);
      const withUpdatedContact = state.contacts.map((c) => {
        if (c.id === value.id) {
          c = value;
        }
        return c;
      });

      rollbackStackUpdated.push({
        type: ROLLBACK_UPDATE,
        previusContact,
      });

      state.rollbackStack = rollbackStackUpdated;
      state.contacts = withUpdatedContact;
    },

    [ADD_CONTACT_FIELD](state, value) {
      const rollbackStackUpdated = state.rollbackStack.slice();
      const [fieldName, fieldValue, id] = value;

      rollbackStackUpdated.push({
        type: ROLLBACK_FIELD,
        fieldName,
        id,
      });

      const withAddedField = state.contacts.map((c) => {
        if (c.id === id) {
          c[fieldName] = fieldValue;
        }
        return c;
      });

      state.contacts = withAddedField;
      state.rollbackStack = rollbackStackUpdated;
    },

    [REMOVE_CONTACT_FIELD](state, value) {
      const { contacts } = state;
      const rollbackStackUpdated = state.rollbackStack.slice();
      const { fieldName, id } = value;
      rollbackStackUpdated.push({
        type: ROLLBACK_DELETED_FIELD,
        deletedFieldName: fieldName,
        deletedFieldValue: contacts.find((c) => c.id === id)[fieldName],
        id,
      });
      const withDeletedInput = contacts.map((c) => {
        if (c.id === id) {
          delete c[fieldName];
        }
        return c;
      });
      state.contacts = withDeletedInput;
      state.rollbackStack = rollbackStackUpdated;
    },

    [RUN_ROLLBACK](state) {
      const { contacts, rollbackStack } = state;
      const newContacts = contacts.slice();
      const newRollbackStack = rollbackStack.slice();
      const rollbackData = newRollbackStack.pop();

      switch (rollbackData.type) {
        case ROLLBACK_DELETE_ITEM:
          state.contacts = contacts.filter((c) => c.id !== rollbackData.id);
          state.rollbackStack = newRollbackStack;
          break;

        case ROLLBACK_RETURN_ITEM:
          const { deletedItem, deletedIndex } = rollbackData;
          newContacts.splice(deletedIndex, 0, deletedItem);
          state.contacts = newContacts;
          state.rollbackStack = newRollbackStack;
          break;

        case ROLLBACK_UPDATE:
          state.contacts = contacts.map((c) => {
            if (c.id === rollbackData.previusContact.id) {
              c = rollbackData.previusContact;
            }
            return c;
          });
          state.rollbackStack = newRollbackStack;
          break;

        case ROLLBACK_FIELD:
          const { fieldName, id } = rollbackData;
          state.contacts = state.contacts.map((c) => {
            if (c.id === id) {
              delete c[fieldName];
            }
            return c;
          });
          state.rollbackStack = newRollbackStack;
          break;

        case ROLLBACK_DELETED_FIELD:
          const { deletedFieldName, deletedFieldValue } = rollbackData;
          state.contacts = state.contacts.map((c) => {
            if (c.id === rollbackData.id) {
              c[deletedFieldName] = deletedFieldValue;
            }
            return c;
          });
          state.rollbackStack = newRollbackStack;
          break;
        default:
          break;
      }
    },
  },
  actions: {
    addNewContact({ commit }, contact) {
      commit('ADD_CONTACT', contact);
    },
    deleteContact({ commit }, contactId) {
      commit('DELETE_CONTACT', contactId);
    },
    updateContact({ commit }, contact) {
      commit('UPDATE_CONTACT', contact);
    },
    addContactField({ commit }, fieldArr) {
      commit('ADD_CONTACT_FIELD', fieldArr);
    },
    removeContactField({ commit }, removeData) {
      commit('REMOVE_CONTACT_FIELD', removeData);
    },
    rollback({ commit }) {
      commit('RUN_ROLLBACK');
    },
  },
};

export default contactStore;
