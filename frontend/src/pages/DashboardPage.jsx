import classNames from 'classnames';
import { useState } from 'react';
import ContactsTab from './dashboard/ContactsTab';
import ConversationsTab from './dashboard/ConversationsTab';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('conversations');

  return (
    <div>
      <div className='mb-4 border-b border-gray-200'>
        <ul
          className='flex flex-wrap -mb-px text-sm font-medium text-center'
          id='myTab'
          role='tablist'>
          <li className='mr-2' role='presentation'>
            <button
              onClick={() => setActiveTab('conversations')}
              className={classNames(
                'inline-block p-4 border-b-2 rounded-t-lg',
                {
                  'border-transparent hover:text-gray-600 hover:border-gray-300':
                    activeTab != 'conversations',
                }
              )}
              id='conversations-tab'
              type='button'
              role='tab'>
              Conversations
            </button>
          </li>
          <li role='presentation'>
            <button
              onClick={() => setActiveTab('contacts')}
              className={classNames(
                'inline-block p-4 border-b-2 rounded-t-lg',
                {
                  'border-transparent hover:text-gray-600 hover:border-gray-300':
                    activeTab != 'contacts',
                }
              )}
              id='contacts-tab'
              type='button'
              role='tab'>
              Contacts
            </button>
          </li>
        </ul>
      </div>
      <div id='myTabContent'>
        {activeTab == 'conversations' && <ConversationsTab />}
        {activeTab == 'contacts' && <ContactsTab />}
      </div>
    </div>
  );
}
