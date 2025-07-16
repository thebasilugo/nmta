import Image from "next/image"
import { awardCategories } from "@/data/award-categories"

export default function AwardGrid() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Award Categories</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Nine prestigious categories recognizing excellence across all aspects of Nigerian cinema and television
          production.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {awardCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="relative h-48">
              <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Evaluation Criteria:</h4>
                <div className="flex flex-wrap gap-2">
                  {category.criteria.map((criterion) => (
                    <span key={criterion} className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                      {criterion}
                    </span>
                  ))}
                </div>
              </div>

              {category.previousWinners && category.previousWinners.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Previous Winners:</h4>
                  <div className="space-y-1">
                    {category.previousWinners.map((winner) => (
                      <div key={winner.year} className="text-xs text-gray-600">
                        <span className="font-medium">{winner.year}:</span> {winner.winner}
                        {winner.film && ` - ${winner.film}`}
                        {winner.director && ` (Dir: ${winner.director})`}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
