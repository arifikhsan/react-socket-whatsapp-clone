import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../store/contactSlice';

export default function CreateContactModal({ onClose }) {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const onCreate = (e) => {
    e.preventDefault();
    dispatch(addContact({id, name}))
    onClose();
  };
  return (
    <div
      id='create-contact-modal'
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
              Create New Contact
            </h3>
            <form className='space-y-6' onSubmit={onCreate}>
              <div>
                <label
                  htmlFor='id'
                  className='block mb-2 text-sm font-medium text-gray-900'>
                  Id
                </label>
                <input
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  name='id'
                  className='outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 '>
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name='name'
                  className='outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5'
                  required
                />
              </div>

              <button className='w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
