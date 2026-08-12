import { Heart, BookOpen, Users, Shield, Star, ArrowRight } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: 'Infant Care',
      description: 'A safe, warm, and stimulating environment with gentle routines, sensory play, and responsive caregiving for our youngest children.',
      icon: Heart,
    },
    {
      title: 'Toddler Program',
      description: 'Encouraging curiosity and independence through hands-on activities, creative expression, and early learning concepts.',
      icon: Users,
    },
    {
      title: 'Preschool Education',
      description: 'Preparing children for kindergarten with a fun curriculum focused on literacy, numeracy, science, and social studies.',
      icon: BookOpen,
    },
    {
      title: 'After Care & Tutoring',
      description: 'Supportive after-school care with homework assistance and private tutoring in Math and English Language Arts.',
      icon: Star,
    },
  ];

  const values = [
    {
      title: 'Christian Foundation',
      description: 'We nourish children’s spiritual journey so they remain rooted in Christ.',
    },
    {
      title: 'Safe & Loving',
      description: 'A secure environment where every child feels valued and cared for.',
    },
    {
      title: 'Quality Learning',
      description: 'Age-appropriate activities that support cognitive, social, and emotional growth.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-800/40 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-accent-red font-semibold tracking-wide uppercase text-sm mb-4">
              Brooklyn, New York
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Welcome to{' '}
              <span className="text-white">New Vision</span>{' '}
              <span className="text-accent-red">Daycare</span>
            </h1>
            <p className="text-lg md:text-xl text-navy-200 mb-10 leading-relaxed">
              A nurturing Christian-based group family daycare dedicated to raising children with love, faith, and excellence in a safe and stimulating environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-accent inline-flex items-center justify-center gap-2">
                Enroll Your Child
                <ArrowRight size={20} />
              </a>
              <a href="#services" className="btn-outline border-white text-white hover:bg-white hover:text-navy-950 inline-flex items-center justify-center">
                Our Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At New Vision Daycare, we believe every child is a gift from God. Our mission is to provide a loving, Christ-centered environment where children can grow spiritually, emotionally, socially, and intellectually.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We are committed to directing children onto the right path so that when they are older, they will not leave it. Through intentional care, structured learning, and a foundation of faith, we partner with families to raise the next generation with purpose and character.
              </p>
              <div className="bg-navy-50 border-l-4 border-accent-red p-5 rounded-r-lg">
                <p className="text-navy-800 italic font-medium">
                  “Direct your children onto the right path, and when they are older, they will not leave.”
                </p>
                <p className="text-navy-600 text-sm mt-2">— Proverbs 22:6</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {values.map((item, index) => (
                <div
                  key={index}
                  className="bg-navy-50 rounded-2xl p-6 border border-navy-100 hover:shadow-md transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-navy-800 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-navy-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">
              Our Programs & Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer age-appropriate programs designed to support every stage of your child’s development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group"
                >
                  <div className="bg-navy-100 group-hover:bg-accent-red text-navy-800 group-hover:text-white w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition duration-300">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-bold text-navy-900 text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-navy-950 rounded-3xl p-10 md:p-14 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-red/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Families Choose New Vision
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Shield className="text-accent-red mt-1 flex-shrink-0" size={22} />
                    <span>Licensed Group Family Daycare with experienced caregivers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="text-accent-red mt-1 flex-shrink-0" size={22} />
                    <span>Christ-centered environment that builds character and faith</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="text-accent-red mt-1 flex-shrink-0" size={22} />
                    <span>Structured learning programs from infants to school-age</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="text-accent-red mt-1 flex-shrink-0" size={22} />
                    <span>Small group setting that allows individual attention</span>
                  </li>
                </ul>
              </div>

              <div className="bg-navy-900 rounded-2xl p-8 text-center">
                <p className="text-navy-300 mb-2">Ready to get started?</p>
                <h3 className="text-2xl font-bold mb-6">Contact us today</h3>
                <a
                  href="tel:3473651822"
                  className="btn-accent inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Call (347) 365-1822
                </a>
                <p className="text-navy-400 text-sm mt-4">Monday – Friday | 7:30 AM – 5:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-navy-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            We would love to meet your family and answer any questions you have about New Vision Daycare.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="grid sm:grid-cols-2 gap-6 text-left mb-8">
              <div>
                <p className="text-sm text-gray-500 mb-1">Phone</p>
                <a href="tel:3473651822" className="text-navy-900 font-semibold text-lg hover:text-accent-red transition">
                  (347) 365-1822
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <a href="mailto:nerviasgroupfamilydaycare@gmail.com" className="text-navy-900 font-semibold text-lg hover:text-accent-red transition break-all">
                  nerviasgroupfamilydaycare@gmail.com
                </a>
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm text-gray-500 mb-1">Address</p>
                <p className="text-navy-900 font-semibold text-lg">
                  1173 E 49th Street, Brooklyn, NY 11234
                </p>
              </div>
            </div>

            <a href="tel:3473651822" className="btn-accent inline-flex items-center justify-center gap-2">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}