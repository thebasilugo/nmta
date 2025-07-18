import Image from "next/image"

const juryMembers = [
  {
    name: "Dr. Amaka Igwe",
    role: "Jury Chair",
    affiliation: "Nollywood Pioneer",
    image: "/professional-woman-portrait.png",
    bio: "Renowned filmmaker and television producer with over 25 years of experience in the Nigerian entertainment industry.",
  },
  {
    name: "Kunle Afolayan",
    role: "Jury Member",
    affiliation: "Award-winning Director",
    image: "/professional-man-portrait.png",
    bio: "Internationally acclaimed director known for films like 'October 1' and 'The Figurine'.",
  },
  {
    name: "Genevieve Nnaji",
    role: "Jury Member",
    affiliation: "Actress & Producer",
    image: "/professional-woman-portrait.png",
    bio: "Multi-award winning actress and producer, first Nigerian to produce a Netflix original film.",
  },
]

const patrons = [
  {
    name: "Chief Tony Elumelu",
    role: "Patron",
    affiliation: "UBA Group Chairman",
    image: "/professional-man-portrait.png",
    bio: "Business leader and philanthropist supporting African entrepreneurship and creative industries.",
  },
  {
    name: "Dr. Ngozi Okonjo-Iweala",
    role: "Patron",
    affiliation: "WTO Director-General",
    image: "/professional-woman-portrait.png",
    bio: "Global leader in economics and development, advocate for African creative economy.",
  },
]

export default function NotablePersons() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-slate-900 mb-4">Our Distinguished Panel</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet the industry leaders, visionaries, and patrons who guide NMTA's mission to celebrate excellence in
            Nigerian cinema and television.
          </p>
        </div>

        {/* Jury Members */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold font-playfair text-slate-900 text-center mb-12">Jury Members</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {juryMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.role}`}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold font-playfair text-slate-900 mb-2">{member.name}</h4>
                  <p className="text-amber-600 font-semibold mb-1">{member.role}</p>
                  <p className="text-slate-500 text-sm mb-3">{member.affiliation}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patrons */}
        <div>
          <h3 className="text-3xl font-bold font-playfair text-slate-900 text-center mb-12">
            Patrons & Advisory Board
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {patrons.map((patron, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={patron.image || "/placeholder.svg"}
                    alt={`${patron.name} - ${patron.role}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold font-playfair text-slate-900 mb-2">{patron.name}</h4>
                  <p className="text-amber-600 font-semibold mb-1">{patron.role}</p>
                  <p className="text-slate-500 text-sm mb-3">{patron.affiliation}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{patron.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
