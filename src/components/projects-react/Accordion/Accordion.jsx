export default function Accordion({ title, content }) {
  return (
    <details name="FAQ" className="group open:bg-gray-700 px-6 py-4 transition-colors">
      <summary className="flex justify-between items-center cursor-pointer list-none p-10">
        <span className="text-lg font-medium">{title}</span>
        <span className="transition-transform duration-300 group-open:rotate-45 text-2xl">
          +
        </span>
      </summary>
      <p className="mt-3 text-gray-300 leading-snug p-10">{content}</p>
    </details>
  );
}
