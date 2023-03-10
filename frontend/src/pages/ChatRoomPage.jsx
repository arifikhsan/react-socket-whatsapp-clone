import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addChat } from '../store/chatSlice';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import useSocket from '../hooks/useSocket';

export default function ChatRoomPage() {
  const params = useParams();
  const dispatch = useDispatch();

  const myId = useSelector((state) => state.identity.id);
  const conversation = useSelector((state) =>
    state.conversationSlice.conversations.find(
      (c) => c.id == params.conversationId
    )
  );
  const recipientIds = conversation.contacts.map((contact) => contact.id);
  const chats = useSelector((state) =>
    state.chatSlice.chats.map((chat) => {
      return { ...chat, isMine: chat.senderId == myId };
    })
  );
  const [text, setText] = useState('');

  const submitChat = (e) => {
    e.preventDefault();
    // dispatch(addChat({ sender: myId, text, recipients: recipientIds }));
    socket.emit('send-message', {
      id: uuidv4(),
      createdAt: new Date(),
      text,
      senderId: myId,
      conversation,
    });
    setText('');
  };
  
  const socket = useSocket();

  useEffect(() => {
    if (socket == null) return;

    socket.on('receive-message', ({ payload }) => {
      if (payload.conversation.id == conversation.id) {
        dispatch(addChat(payload));
      }
    });

    return () => socket.off('receive-message');
  }, [socket]);

  return (
    <div>
      <div>
        <div>Recipients: </div>
        {conversation.contacts.map((contact, index) => {
          return (
            <span key={contact.id}>
              <span>
                {contact.name} @ {contact.id}
              </span>
              {conversation.contacts.length - 1 > index && <span>, </span>}
            </span>
          );
        })}
      </div>
      <div className='mt-6 h-64 overflow-auto'>
        <div className='space-y-2'>
          {chats.length > 0 &&
            chats.map((chat) => {
              return (
                <div
                  key={chat.id}
                  className={classNames('flex', {
                    'justify-end': chat.isMine,
                    'justify-start': !chat.isMine,
                  })}>
                  <div
                    className={classNames('flex flex-col', {
                      'justify-end': chat.isMine,
                      'justify-start': !chat.isMine,
                    })}>
                    <div
                      className={classNames('px-2 py-1', {
                        'bg-green-600 text-white': chat.isMine,
                      })}>
                      {chat.text}
                    </div>
                    {chat.isMine && <div className='text-sm'>You</div>}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className='mt-6'>
        <form onSubmit={submitChat}>
          <label htmlFor='chat' className='sr-only'>
            Your message
          </label>
          <div className='flex items-center rounded-lg bg-green-50 px-3 py-2'>
            <input
              id='chat'
              value={text}
              onChange={(e) => setText(e.target.value)}
              className='mr-4 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 outline-none resize-none'
              placeholder='Your message...'></input>
            <button
              type='submit'
              className='inline-flex cursor-pointer justify-center rounded-full p-2 text-green-600 hover:bg-green-100'>
              <svg
                aria-hidden='true'
                className='h-6 w-6 rotate-90'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
              </svg>
              <span className='sr-only'>Send message</span>
            </button>
          </div>
        </form>
      </div>

      <div className='mt-6'>
        <Link to='/dashboard'>
          <button className='w-full bg-green-600 text-white p-4'>
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
