import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getConversations } from '../../store/conversationSlice';
import CreateConversationModal from './CreateConversationModal';

export default function ConversationsTab() {
  const [showCreateConversationModal, setShowCreateConversationModal] =
    useState(false);
  const conversations = useSelector(getConversations);
  const navigate = useNavigate();

  return (
    <div id='conversations' role='tabpanel'>
      <div>
        <div>
          {conversations.length > 0 &&
            conversations.map((conversation) => {
              return (
                <Link key={conversation.id} to={`/chat/${conversation.id}`}>
                  <div className='p-4 bg-green-100'>
                    {conversation.contacts.map((contact, index) => {
                      return (
                        <span key={contact.id}>
                          <span>{contact.name}</span>
                          {index < conversation.contacts.length - 1 && (
                            <span>, </span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                </Link>
              );
            })}
        </div>
        <div className='mt-6'>
          <button
            onClick={() => setShowCreateConversationModal(true)}
            className='w-full bg-green-600 text-white p-4'>
            New Conversation
          </button>
        </div>
      </div>

      {showCreateConversationModal && (
        <CreateConversationModal
          onClose={() => setShowCreateConversationModal(false)}
        />
      )}
    </div>
  );
}
