import React, { useEffect, useState } from 'react';

const SaveTemplate = ({ isOpen, onClose, onSave , subject , body }) => {
  const [templateName, setTemplateName] = useState('');
  const [templateSubject, setTemplateSubject] = useState('');
  const [templateContent, setTemplateContent] = useState('');

  useEffect(() => {
    if (isOpen) {
      setTemplateSubject(subject);
      setTemplateContent(body);
    }
  }, [isOpen, subject, body]);

  const handleSave = () => {
    onSave({
      name: templateName,
      subject: templateSubject,
      content: templateContent,
    });
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-6 rounded-md shadow-md'>
            <h2 className='text-xl w-[500px] font-semibold mb-4'>Save Template</h2>
            <div className='mb-4'>
              <label htmlFor='templateName' className='block mb-1'>
                Name:
              </label>
              <input
                type='text'
                id='templateName'
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                className='w-full px-3 py-2 border rounded-md border-gray-300'
              />
              {console.log(templateSubject + 'oi')}
            </div>
            <div className='mb-4'>
              <label htmlFor='templateSubject' className='block mb-1'>
                Subject:
              </label>
              <input
                type='text'
                id='templateSubject'
                value={templateSubject}
                onChange={(e) => setTemplateSubject(e.target.value)}
                className='w-full px-3 py-2 border rounded-md border-gray-300'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='templateContent' className='block mb-1'>
                Template:
              </label>
              <textarea
                id='templateContent'
                value={templateContent}
                onChange={(e) => setTemplateContent(e.target.value)}
                className='w-full px-3 py-2 border rounded-md border-gray-300'
                rows='4'
              />
            </div>
            <div className='flex justify-end'>
              <button
                className='bg-[#0bc9f2] hover:bg-[#01AFDF] p-2 rounded-md shadow-md text-slate-100 font-semibold mr-2'
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className='bg-gray-300 hover:bg-gray-400 p-2 rounded-md shadow-md'
                onClick={() => {
                  onClose()
                  setTemplateName('')
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SaveTemplate;
