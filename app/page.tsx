// app/page.tsx
"use client";
import Head from 'next/head';
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Head>
         <title>Vidyashree H L - Portfolio</title>
         <meta name="description" content="Portfolio of Vidyashree H L, Backend MERN Developer" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

<main className="bg-gray-100 min-h-screen p-6 text-base md:text-lg">

      <main className="bg-gray-100 min-h-screen p-6">
        {/* Header / About Me */}
        <section className="text-center py-10">
          <h1 className="text-4xl font-bold">Vidyashree H L</h1>
          <p className="mt-2 text-lg">Backend MERN Developer | Full-Stack Enthusiast</p>
          <p className="mt-2 text-gray-700">Passionate about building scalable web applications and learning new technologies.</p>
        </section>

        {/* Skills Section */}
        <section className="py-10">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <li className="bg-white p-4 rounded shadow">JavaScript</li>
            <li className="bg-white p-4 rounded shadow">Node.js</li>
            <li className="bg-white p-4 rounded shadow">React</li>
            <li className="bg-white p-4 rounded shadow">MongoDB</li>
            <li className="bg-white p-4 rounded shadow">HTML & CSS</li>
            <li className="bg-white p-4 rounded shadow">REST APIs</li>
            <li className="bg-white p-4 rounded shadow">JWT Authentication</li>
            <li className="bg-white p-4 rounded shadow">Git & Postman</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="py-10">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold">Fake Currency Detection (CNN)</h3>
              <p className="text-gray-700 mt-2">Web app to detect fake currency using CNN. Preprocessing includes image resizing, normalization, and data augmentation. Achieved high classification accuracy.</p>
              <p className="mt-2 font-semibold">Tech: Python, TensorFlow, OpenCV</p>
              <a href="#" className="text-blue-500 underline mt-1 block">GitHub / Demo</a>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold">Leave Management System</h3>
              <p className="text-gray-700 mt-2">Full-stack web app for HR to manage employee leaves. Features include add employees, approve/reject leaves, and track leave balances.</p>
              <p className="mt-2 font-semibold">Tech: Node.js, Express, MongoDB, React</p>
              <a href="#" className="text-blue-500 underline mt-1 block">GitHub / Demo</a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-10">
          <h2 className="text-2xl font-semibold mb-4">Experience / Internship</h2>
          <ul className="space-y-4">
            <li className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Backend MERN Developer (Fresher)</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Developed RESTful APIs using Node.js, Express, and MongoDB</li>
                <li>Integrated JWT-based authentication and authorization</li>
                <li>Optimized backend performance and debugging</li>
              </ul>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Internship at JSpiders</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Built responsive web apps using HTML, CSS, JavaScript, React</li>
                <li>Gained hands-on full-stack development experience</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Education Section */}
        <section className="py-10">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p className="bg-white p-4 rounded shadow">B.E in Computer Science and Engineering – 2024</p>
        </section>

        {/* Contact Section with Form */}
        <section className="py-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded" rows={4} required></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send Message</button>
          </form>
          <p className="mt-4 text-gray-700">Email: hlvidyashree383@gmail.com</p>
          <p>LinkedIn: <a href="http://www.linkedin.com/in/vidyahl" className="text-blue-500 underline">linkedin.com/in/vidyahl</a></p>
          <p>GitHub: <a href="https://github.com/VidyashreeHL" className="text-blue-500 underline">github.com/VidyashreeHL</a></p>
        </section>
      </main>
    </>
  );
};

export default Home;
