import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getActiveConversationContacts } from '../../store/activeConversationSlice';
import CreateConversationModal from './CreateConversationModal';

export default function ConversationsTab() {
  const [showCreateConversationModal, setShowCreateConversationModal] =
    useState(false);
  const conversationContacts = useSelector(getActiveConversationContacts);
  console.log(conversationContacts);
  
  return (
    <div id='conversations' role='tabpanel'>
      <div className='h-64 overflow-auto'>{}</div>
      <div className='mt-6'>
        <button
          onClick={() => setShowCreateConversationModal(true)}
          className='w-full bg-green-600 text-white p-4'>
          New Conversation
        </button>
      </div>
      {showCreateConversationModal && (
        <CreateConversationModal
          onClose={() => setShowCreateConversationModal(false)}
        />
      )}
    </div>
  );
}
