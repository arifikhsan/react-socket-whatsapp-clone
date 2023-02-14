import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteId, getId } from '../store/identitySlice';

export default function HeaderComponent() {
  const id = useSelector(getId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(deleteId());
    navigate('/')
  };

  return (
    <div className='bg-green-600 text-white'>
      <div className='max-w-3xl mx-auto p-4'>
        <div className='flex justify-between items-center'>
          <div>
            <p className='font-bold text-2xl'>
              <Link to='/'>WhatsApp Clone</Link>
            </p>
            {id && <p>{id}</p>}
          </div>
          <div>
            {id && <button onClick={logout}>Logout</button>}
          </div>
        </div>
      </div>
    </div>
  );
}
