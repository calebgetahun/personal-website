export default function Quotes() {
  const quotes = [
    {
      text: "Simplicity is the final achievement. After one has played a vast quantity of notes and more notes, it is simplicity that emerges as the crowning reward of art",
      author: "Frédéric Chopin",
    },
    {
      text: "We suffer more often in imagination than in reality.",
      author: "Seneca",
    },
    {
      text: "The best way out is always through.",
      author: "Robert Frost",
    },
  ];

  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold">Quotes</h1>
      <h2 className="text-xl text-gray-600 mb-8">
        A collection of some quotes that have resonated with me
      </h2>
      <div className="space-y-6">
        {quotes.map((q, i) => (
          <blockquote key={i} className="border-l-2 border-gray-700 pl-4">
            <p className="text-lg italic text-gray-100">“{q.text}”</p>
            <footer className="text-sm text-gray-400 mt-1">— {q.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
