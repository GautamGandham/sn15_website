import React from 'react';
import { Linkedin, Mail, Award, Users, Coffee, MapPin } from 'lucide-react';

const Team: React.FC = () => {
  const leadership = [
    {
      name: 'Challa vijayarama Naidu',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Engineering at Tesla Autopilot with 15+ years in robotics and AI. PhD in Robotics from MIT.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      expertise: ['AI/ML', 'Robotics', 'Leadership'],
      linkedin: '#'
    },
    {
      name: 'Jaya Prakash Yarlagadda',
      role: 'CTO & Co-Founder',
      bio: 'Former Principal Engineer at Amazon Robotics. Led development of autonomous warehouse systems serving millions of customers.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      expertise: ['Systems Architecture', 'Computer Vision', 'Automation'],
      linkedin: '#'
    },
    {
      name: 'Kishore',
      role: 'VP of Engineering',
      bio: 'Former Senior Director at Boston Dynamics. Expert in autonomous navigation and fleet coordination systems.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      expertise: ['Autonomous Systems', 'Fleet Management', 'Hardware'],
      linkedin: '#'
    },
    {
      name: 'David Kim',
      role: 'VP of Sales & Operations',
      bio: 'Former VP at Kiva Systems (acquired by Amazon). Deep expertise in warehouse operations and customer success.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      expertise: ['Sales Strategy', 'Operations', 'Customer Success'],
      linkedin: '#'
    }
  ];

  const jobOpenings = [
    {
      title: 'Senior Robotics Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Design and develop autonomous robotic systems for warehouse automation.'
    },
    {
      title: 'AI/ML Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build intelligent algorithms for computer vision and predictive analytics.'
    },
    {
      title: 'Customer Success Manager',
      department: 'Sales',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Ensure successful deployment and adoption of our automation solutions.'
    },
    {
      title: 'Hardware Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Design and optimize robotic hardware components and systems.'
    }
  ];

  const cultureValues = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from product development to customer service.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex challenges.'
    },
    {
      icon: Coffee,
      title: 'Innovation',
      description: 'We foster a culture of continuous learning and innovation to stay ahead of the curve.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative">
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Meet the Team Behind
              <span className="text-primary-300"> the Innovation</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto drop-shadow">
              Our world-class team combines decades of experience in robotics, AI, and warehouse operations 
              to deliver cutting-edge automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-saddlebrown-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-metallic-600">
              Industry veterans leading the future of warehouse automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="bg-metallic-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary-900 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-metallic-700 mb-4">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={member.linkedin}
                        className="text-primary-600 hover:text-primary-800 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@snfifteen.com`}
                        className="text-primary-600 hover:text-primary-800 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-saddlebrown-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Culture & Values
            </h2>
            <p className="text-xl text-metallic-600">
              The principles that guide our work and define our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cultureValues.map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg">
                <value.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-900 mb-4">{value.title}</h3>
                <p className="text-metallic-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">Life at SnFifteen</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
                <div className="text-metallic-600">Employee Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-metallic-600">Remote Work Option</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">$5K</div>
                <div className="text-metallic-600">Annual Learning Budget</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-saddlebrown-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-metallic-600">
              Help us build the future of warehouse automation
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-metallic-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-xl font-bold text-primary-900">{job.title}</h3>
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-metallic-600 mb-2">{job.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-metallic-500">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-metallic-600 mb-4">
              Don't see a position that matches your skills?
            </p>
            <button className="bg-primary-100 text-primary-800 px-6 py-3 rounded-lg font-semibold hover:bg-primary-200 transition-colors duration-200">
              Send Us Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Join our team of innovators and help transform the warehouse automation industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              View All Positions
            </button>
            <button className="border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;