import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from '../../store/contactSlice';
import CreateContactModal from './CreateContactModal';

export default function ContactsTab() {
  const [showCreateContactModal, setShowCreateContactModal] = useState(false);
  const contacts = useSelector(getContacts);

  return (
    <div id='contacts' role='tabpanel'>
      <div className='h-64 overflow-auto'>
        <div className='space-y-2'>
          {contacts.length >= 1 &&
            contacts.map((contact) => {
              return (
                <div key={contact.id} className='p-4 bg-green-50'>
                  <p>{contact.name}</p>
                  <p>{contact.id}</p>
                </div>
              );
            })}
        </div>
      </div>
      <div className='mt-6'>
        <button
          onClick={() => setShowCreateContactModal(true)}
          className='w-full bg-green-600 text-white p-4'>
          New Contact
        </button>
      </div>
      {showCreateContactModal && (
        <CreateContactModal onClose={() => setShowCreateContactModal(false)} />
      )}
    </div>
  );
}
