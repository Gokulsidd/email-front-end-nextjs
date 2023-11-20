'use client';
import { localTemplates } from '../../constants';
import React, { useState } from 'react';
import SaveTemplate from './components/saveTemplate';

const ComposeEmail = () => {
  const [clientEmail, setClientEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [selectedTemplate , setSelectedTemplate] = useState(null)
  const [showModal, setShowModal] = useState(false);


  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template)

    if (template) {
      setSubject(template.subject || ''); 
      setBody(template.body || '');
    }
  }
  
  const handleSaveTemplate = () => {
    setShowModal(true);
  }

  const handleSaveTemplateData = (templateData) => {
    // You can perform actions with templateData (e.g., save to database)
    console.log('Template data:', templateData);
    setShowModal(false);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      to:clientEmail ,
      subject:subject,
      body:body
    }

    try{
      const response = await fetch('http://localhost:3001/email/send-email', {
        method:'POST',
        headers: {
          'content-type' : 'application/json',
        },
        body:JSON.stringify(formData)
      });

      if(response.ok){
        console.log('email sent successfully')
      }else{
        console.log('error fetching data')
      }
    }catch (error){
      console.log(error)
    }


  };

  return (
    <div className='w-[70%] h-[600px] m-auto bg-[#ffffff] rounded-sm shadow-md px-10 py-6 space-y-6'>
      <h2 className='text-center text-2xl font-semibold text-slate-900'>Compose Email</h2>
      <form onSubmit={handleSubmit} className='space-y-10 relative'>
      <div>
          <input
            type="email"
            id="subject"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            required
            placeholder='To'
            className='w-full py-4 px-2  rounded-md  outline-blue-200 border border-gray-200'
          />
        </div>
        <div>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder='Subject'
            className='w-full py-4 px-2 rounded-md  outline-blue-200 border border-gray-200'
          />
        </div>
        <div>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            placeholder='Description'
            className='w-full h-52 py-4 px-2 rounded-md  outline-blue-200 border border-gray-200'
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
        <button className='bg-[#0bc9f2] hover:bg-[#01AFDF] p-3 rounded-md shadow-md text-slate-100 font-semibold text-sm right-40 bottom-1 absolute' type='button' onClick={handleSaveTemplate}>Save Template</button>   
        <SaveTemplate isOpen={showModal} onClose={() => setShowModal(false)} onSave={handleSaveTemplateData} subject={subject} body={body} />     
        <button className='bg-[#0bc9f2] hover:bg-[#01AFDF] p-3 rounded-md shadow-md text-slate-100 font-semibold text-sm right-0 bottom-1 absolute' type="submit">Send Email</button>
        </div>
      </form>
    </div>
  );
};

export default ComposeEmail;
