import { Mail, Phone, MapPin, Clock, Globe, Users } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["123 Cinema Boulevard", "Victoria Island, Lagos", "Nigeria"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+234 (0) 123 456 7890", "+234 (0) 987 654 3210"],
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: ["info@nmtawards.com", "submissions@nmtawards.com", "media@nmtawards.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
  },
]

const departments = [
  {
    icon: Users,
    title: "Submissions",
    email: "submissions@nmtawards.com",
    description: "Film and television submission inquiries",
  },
  {
    icon: Globe,
    title: "Media & Press",
    email: "media@nmtawards.com",
    description: "Press releases, interviews, and media partnerships",
  },
  {
    icon: Users,
    title: "Partnerships",
    email: "partnerships@nmtawards.com",
    description: "Sponsorship and collaboration opportunities",
  },
]

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold font-playfair text-slate-900 mb-4">Get in Touch</h3>
        <p className="text-slate-600 leading-relaxed">
          We're here to help with any questions about NMTA, submissions, partnerships, or general inquiries. Reach out
          to us through any of the channels below.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        {contactDetails.map((contact, index) => {
          const IconComponent = contact.icon
          return (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{contact.title}</h4>
                <div className="space-y-1">
                  {contact.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-slate-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Department Contacts */}
      <div>
        <h4 className="text-xl font-bold font-playfair text-slate-900 mb-6">Department Contacts</h4>
        <div className="space-y-4">
          {departments.map((dept, index) => {
            const IconComponent = dept.icon
            return (
              <div key={index} className="bg-slate-50 rounded-xl p-4 hover:bg-slate-100 transition-colors duration-300">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-slate-900 mb-1">{dept.title}</h5>
                    <p className="text-sm text-slate-600 mb-2">{dept.description}</p>
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors duration-300"
                    >
                      {dept.email}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Quick Response Note */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h4 className="text-lg font-bold text-amber-900 mb-2">Quick Response Guarantee</h4>
        <p className="text-amber-800 text-sm leading-relaxed">
          We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call our
          main office number.
        </p>
      </div>
    </div>
  )
}
