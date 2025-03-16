function App() {
  return (
    <main className="flex max-w-7xl flex-col gap-4">
      <h2 className="text-xs font-medium opacity-50">Global</h2>

      <textarea
        id="global"
        rows={1}
        className="field-sizing-content w-full resize-none rounded-md bg-gray-700 p-2 font-mono text-xs text-gray-100"
      >
        const data = [...Array(1000).keys()];
      </textarea>

      <h2 className="text-xs font-medium opacity-50">Test cases</h2>
      <div></div>
    </main>
  );
}

export default App;
