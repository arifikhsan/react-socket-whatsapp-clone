import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getId, updateId } from '../store/identitySlice';

export default function LoginPage() {
  const [id, setId] = useState('');
  const dispatch = useDispatch();
  const savedId = useSelector(getId);

  useEffect(() => {
    if (savedId != null) {
      setId(savedId);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateId(id));
  };

  const generateId = () => {
    setId(uuidv4());
  };

  return (
    <div>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <div className='py-2'>
          <label htmlFor='id'>Enter your id</label>
          <input
            name='id'
            value={id}
            onChange={(e) => setId(e.target.value)}
            className='outline-none block p-2 border border-green-600'
            required
          />
        </div>
        <div className='space-x-2 text-white'>
          <button className='bg-green-600 px-4 py-2'>Login</button>
          <button
            type='button'
            onClick={generateId}
            className='bg-blue-600 px-4 py-2'>
            Generate new ID
          </button>
        </div>
      </form>
    </div>
  );
}
