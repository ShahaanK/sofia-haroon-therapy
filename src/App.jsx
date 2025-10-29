import React, { useState } from 'react';
import { Calendar, Mail, Phone, Award, Heart, Brain, Users, Globe, CheckCircle, Menu, X } from 'lucide-react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email'
  });
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    type: 'initial'
  });

  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Trauma-Informed Therapy",
      description: "Specialized support for individuals healing from trauma, abuse, and PTSD using evidence-based, compassionate approaches."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neurodiversity Support",
      description: "Tailored therapy and psycho-educational support for neurodivergent individuals, helping you understand and navigate your unique experiences."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Anxiety & Depression",
      description: "Evidence-based treatment for anxiety, depression, stress, and burnout using humanistic and psychodynamic approaches."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cross-Cultural Counselling",
      description: "Sensitive support for identity concerns, cross-cultural issues, and the unique challenges faced by individuals from diverse backgrounds."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Grief Counselling",
      description: "Compassionate support through loss and bereavement, helping you process and integrate your grief experience."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Somatic Integration",
      description: "Body-centered therapy that addresses the connection between mind and body, helping release stored trauma and tension."
    }
  ];

  const testimonials = [
    {
      text: "Sofia created such a warm and safe space for me. Her understanding of cross-cultural issues really helped me feel seen and understood.",
      author: "Anonymous Client",
      location: "London"
    },
    {
      text: "Working with Sofia has been transformative. Her integrative approach and genuine empathy made all the difference in my healing journey.",
      author: "Anonymous Client",
      location: "UK"
    },
    {
      text: "Sofia's support through my grief was invaluable. She held space for all my emotions without judgment and helped me find my way forward.",
      author: "Anonymous Client",
      location: "London"
    }
  ];

  const qualifications = [
    "Advanced Diploma in Humanistic Integrative Counselling (CPPD Counselling School UK)",
    "MSc in Psychology and Neuroscience (King's College London)",
    "Certificate in Humanistic Integrative Counselling",
    "Trauma-Informed Therapy Training",
    "Neurodiversity Support Specialist"
  ];

  const handleContactSubmit = () => {
    const mailtoLink = `mailto:sofiaharoon92@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Contact: ${formData.preferredContact}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    
    alert('Thank you for your message. Sofia will get back to you within 24-48 hours.');
    setFormData({ name: '', email: '', phone: '', message: '', preferredContact: 'email' });
  };

  const handleBookingSubmit = () => {
    const mailtoLink = `mailto:sofiaharoon92@gmail.com?subject=Booking Request from ${bookingData.name}&body=${encodeURIComponent(
      `Name: ${bookingData.name}\nEmail: ${bookingData.email}\nPhone: ${bookingData.phone}\nSession Type: ${bookingData.type}\nPreferred Date: ${bookingData.date}\nPreferred Time: ${bookingData.time}`
    )}`;
    window.location.href = mailtoLink;
    
    alert('Booking request received! Sofia will contact you to confirm your appointment.');
    setBookingData({ name: '', email: '', phone: '', date: '', time: '', type: 'initial' });
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-slate-800">Sofia Haroon</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Approach', 'Testimonials', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-slate-700 hover:text-teal-600 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-teal-600 font-semibold' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Services', 'Approach', 'Testimonials', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-teal-50 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-slate-800 leading-tight">
                A Warm, Empathic Space for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> Healing & Growth</span>
              </h1>
              <p className="text-xl text-slate-600">
                Humanistic Integrative Therapist offering trauma-informed therapy, grief counselling, 
                and support for anxiety, depression, and cross-cultural concerns.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Book a Session
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="px-8 py-3 bg-white text-teal-600 border-2 border-teal-600 rounded-full hover:bg-teal-50 transition-all"
                >
                  Learn More
                </button>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center space-x-2 text-slate-600">
                  <Award className="w-5 h-5 text-teal-600" />
                  <span>MSc Psychology & Neuroscience</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span>CPPD Certified</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl transform rotate-3"></div>
              <img
                src="/images/sofia-profile.png"
                alt="Sofia Haroon - Humanistic Integrative Therapist"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                I am a Humanistic Integrative therapist/counsellor with a background in psychology and 
                neuroscience (MSc, King's College London). My therapeutic work draws from both Humanistic 
                and Psychodynamic approaches, offering trauma-informed therapy, grief counselling, and 
                psychological and somatic integration.
              </p>
              <p>
                I have supported individuals with a wide range of difficulties, including anxiety, depression, 
                stress, burnout, identity concerns, cross-cultural issues, and the impact of domestic and 
                sexual abuse. I also work with neurodivergent individuals and provide psycho-educational 
                support to help clients better understand and navigate their experiences.
              </p>
              <p>
                Having studied and worked in both the US and UK, and with my South Asian heritage, I bring 
                a cross-cultural perspective that shapes my practice and helps me connect with people from 
                diverse backgrounds.
              </p>
              <p>
                At the heart of my practice is a commitment to fostering a warm, empathic, and authentic 
                space where clients can reconnect with themselves, reflect, heal, and move toward meaningful 
                growth and transformation.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Qualifications & Training</h3>
                <ul className="space-y-3">
                  {qualifications.map((qual, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Languages</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">English</span>
                    <span className="text-sm text-teal-600">Native</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Urdu</span>
                    <span className="text-sm text-teal-600">Native</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">French</span>
                    <span className="text-sm text-teal-600">Limited Working</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">Services I Offer</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Tailored therapeutic support designed to meet your unique needs and support your journey toward healing and growth.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4 text-teal-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-600 text-lg">
              For pricing information and session availability, please{' '}
              <button
                onClick={() => scrollToSection('contact')}
                className="text-teal-600 font-semibold hover:underline"
              >
                get in touch
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">My Approach</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Humanistic & Integrative</h3>
              <p className="text-slate-700 leading-relaxed">
                I believe in the inherent capacity for growth within each person. My integrative approach 
                combines humanistic principles with psychodynamic insights, allowing me to tailor therapy 
                to your unique needs and experiences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Trauma-Informed & Somatic</h3>
              <p className="text-slate-700 leading-relaxed">
                Understanding that trauma lives in both mind and body, I incorporate somatic awareness 
                into our work together. This approach helps you reconnect with your body's wisdom and 
                release stored tension and trauma.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Culturally Sensitive</h3>
              <p className="text-slate-700 leading-relaxed">
                With experience across the US and UK, and my South Asian heritage, I understand the 
                complexities of navigating multiple cultural contexts. I bring this cross-cultural 
                awareness to create a space where all aspects of your identity are welcomed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-teal-600 text-5xl mb-4">"</div>
                <p className="text-slate-700 italic mb-6">{testimonial.text}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-slate-800">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send a Message</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-2">Preferred Contact Method</label>
                  <select
                    value={formData.preferredContact}
                    onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  onClick={handleContactSubmit}
                  className="w-full px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Booking Form */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Book a Session</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-slate-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 mb-2">Session Type</label>
                    <select
                      value={bookingData.type}
                      onChange={(e) => setBookingData({...bookingData, type: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="initial">Initial Consultation</option>
                      <option value="individual">Individual Therapy</option>
                      <option value="trauma">Trauma-Focused</option>
                      <option value="grief">Grief Counselling</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 mb-2">Preferred Time</label>
                    <select
                      value={bookingData.time}
                      onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select a time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                  <button
                    onClick={handleBookingSubmit}
                    className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Request Booking</span>
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Contact Information</h3>
                <div className="flex items-center space-x-3 text-slate-700">
                  <Mail className="w-5 h-5 text-teal-600" />
                  <a href="mailto:sofiaharoon92@gmail.com" className="hover:text-teal-600">
                    sofiaharoon92@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-700">
                  <Phone className="w-5 h-5 text-teal-600" />
                  <span>+44 20 1234 5678</span>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-slate-600">
                    <strong>Location:</strong> London, England, United Kingdom
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    Online and in-person sessions available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="text-xl font-semibold">Sofia Haroon</span>
              </div>
              <p className="text-slate-300">
                Humanistic Integrative Therapist providing compassionate, trauma-informed care.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-teal-400">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-teal-400">Services</button></li>
                <li><button onClick={() => scrollToSection('approach')} className="text-slate-300 hover:text-teal-400">Approach</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-teal-400">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Professional Affiliations</h4>
              <ul className="space-y-2 text-slate-300">
                <li>CPPD Counselling School (UK)</li>
                <li>King's College London Alumni</li>
                <li>Women and Health UK</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            <p className="mb-4">
              © 2025 Sofia Haroon Therapy. All rights reserved. | 
              <button className="hover:text-teal-400 ml-2">Privacy Policy</button> | 
              <button className="hover:text-teal-400 ml-2">GDPR Compliance</button>
            </p>
            <p className="text-xs">
              This website complies with UK GDPR regulations. Your data is handled with care and confidentiality.
              All therapy sessions are conducted in accordance with professional ethical guidelines.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;