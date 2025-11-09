import React, { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  const validate = () => {
    if(!form.name || !form.email || !form.message){ setStatus('Please fill required fields.'); return false; }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!re.test(form.email)){ setStatus('Please enter a valid email.'); return false; }
    setStatus(''); return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validate()) return;
    setLoading(true); setStatus('');
    try {
      const res = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if(!res.ok){ const txt = await res.text(); throw new Error(''+res.status+': '+txt); }
      await res.json();
      // per spec show "Form Submitted" in message field
      setForm(prev=> ({...prev, message: 'Form Submitted'}));
      setStatus('Form Submitted');
    } catch(err){
      console.error(err);
      setStatus('Submission failed. Try again.');
    } finally{
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffaf8] px-6">
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl font-bold text-[#0F3255] mb-4">Join the Story</h2>
        <p className="text-[#252729] mb-6">Ready to bring your vision to life? Let's talk.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input name="name" placeholder="Your name*" value={form.name} onChange={handleChange} className="p-3 border rounded" required disabled={status==='Form Submitted'} />
          <input name="email" type="email" placeholder="Your email*" value={form.email} onChange={handleChange} className="p-3 border rounded" required disabled={status==='Form Submitted'} />
          <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="p-3 border rounded" disabled={status==='Form Submitted'} />
          <textarea name="message" placeholder="Your message*" value={form.message} onChange={handleChange} className="p-3 border rounded h-36" required disabled={status==='Form Submitted'} />
          <button type="submit" disabled={loading || status==='Form Submitted'} className="bg-[#f15d2b] text-white py-2 rounded hover:bg-[#d94f23]">
            {loading ? 'Sending...' : status==='Form Submitted' ? 'Form Submitted' : 'Submit'}
          </button>
          {status && <div className={`mt-2 ${status==='Form Submitted' ? 'text-green-600' : 'text-red-600'}`}>{status}</div>}
        </form>
      </div>
    </div>
  )
}
