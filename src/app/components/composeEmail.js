'use client';
import { localTemplates } from '../../constants';
import React, { useState } from 'react';

const ComposeEmail = () => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [selectedTemplate , setSelectedTemplate] = useState(null)


  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template)
    console.log(template)

    if (template) {
      setSubject(template.subject || ''); 
      setBody(template.body || '');
    }
  }
  
  const handleSaveTemplate = () => {
    localTemplates.push({
      name:`template ${localTemplates.length + 1}` ,
      subject: subject ,
      body: body
    })
    console.log(localTemplates)
     
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Subject:', subject);
    console.log('Body:', body);

    setSubject('');
    setBody('');
  };

  return (
    <div className='w-[70%] h-[90%] m-auto bg-[#ececf1] rounded-sm shadow-md px-10 py-6 space-y-6'>
      <h2 className='text-center text-2xl font-semibold text-slate-900'>Compose Email</h2>
      <form onSubmit={handleSubmit} className='space-y-10 relative'>
        <div>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder='Subject'
            className='w-full py-4 px-2 rounded-sm  outline-blue-200 border-gray-500'
          />
        </div>
        <div>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            placeholder='Description'
            className='w-full h-52 py-4 px-2 rounded-sm  outline-blue-200 border-gray-500'
          />
        </div>
        <div>
          <label htmlFor="template" className='text-lg text-slate-700 mr-4'>Select Template:</label>
          <select
            id="template"
            className='pr-6 py-4 w-[400px]  rounded-sm outline-none'
            onChange={(e) => handleSelectTemplate(localTemplates.find(template => template.name === e.target.value))} 
            value={selectedTemplate ? selectedTemplate.name : {}}
          >
            {localTemplates.map((template) => {
              return <option className='px-4 py-4' key={template.name} value={template.name} >{template.name}</option>
            })}
          </select>
        </div>
        <div>
        <button className='bg-[#0bc9f2] hover:bg-[#01AFDF] p-4 rounded-md shadow-md text-slate-100 font-semibold right-40 absolute' type="submit" onClick={() =>handleSaveTemplate()}>save template</button>
        <button className='bg-[#0bc9f2] hover:bg-[#01AFDF] p-4 rounded-md shadow-md text-slate-100 font-semibold right-0 absolute' type="submit">Send Email</button>
        </div>
      </form>
    </div>
  );
};

export default ComposeEmail;
