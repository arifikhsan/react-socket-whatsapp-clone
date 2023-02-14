import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../store/contactSlice';
import {
  addConversation,
  deleteConversations,
} from '../../store/conversationSlice';

export default function CreateConversationModal({ onClose }) {
  const dispatch = useDispatch();
  const [selectedContacts, setSelectedContacts] = useState([]);
  const contacts = useSelector(getContacts);

  const onCreate = (e) => {
    e.preventDefault();
    console.log(selectedContacts)
    dispatch(deleteConversations());
    dispatch(addConversation(selectedContacts));
    onClose();
  };

  return (
    <div
      id='create-conversation-modal'
      className='fixed inset-0 bg-black/75 z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-modal md:h-full'>
      <div className='relative mx-auto w-full h-full max-w-md md:h-auto'>
        <div className='relative bg-white rounded-lg shadow'>
          <button
            onClick={onClose}
            type='button'
            className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'>
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'></path>
            </svg>
            <span className='sr-only'>Close modal</span>
          </button>
          <div className='px-6 py-6 lg:px-8'>
            <h3 className='mb-4 text-xl font-medium text-gray-900 '>
              Create New Conversation
            </h3>
            <form className='space-y-4' onSubmit={onCreate}>
              {contacts.length > 0 &&
                contacts.map((contact) => {
                  return (
                    <div key={contact.id} className='flex items-center'>
                      <input
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            const newContacts = [...selectedContacts, contact];
                            setSelectedContacts(newContacts);
                          } else {
                            const newContacts = selectedContacts.filter(
                              (c) => c.id != contact.id
                            );
                            setSelectedContacts(newContacts);
                          }
                        }}
                        type='checkbox'
                        id={contact.id}
                        value={contact.id}
                        className='w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2'
                      />
                      <label
                        htmlFor={contact.id}
                        className='ml-2 text-sm font-medium text-gray-900'>
                        {contact.name}
                      </label>
                    </div>
                  );
                })}

              <button className='w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                Start Conversation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
