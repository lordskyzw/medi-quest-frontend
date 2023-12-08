// components/SearchResults.js
export default function SearchResults({ results }) {
    return (
      <div className="flex flex-col">
        {results.map((result) => (
          <div key={result.id} className="flex flex-row justify-between p-4 border-b">
            <div className="flex flex-col">
              <span className="font-bold">{result.medication}</span>
              <span>{result.brandName}</span>
            </div>
            <div className="flex flex-col items-end">
              <span>{result.price}</span>
              <span>{result.location}</span>
              <span>{result.distance} km away</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
  