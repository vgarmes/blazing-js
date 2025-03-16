function App() {
  return (
    <main className="flex max-w-7xl flex-col gap-4">
      <h2 className="text-xs font-medium opacity-50">Global</h2>

      <textarea
        id="global"
        rows={1}
        className="field-sizing-content w-full resize-none rounded-md bg-gray-950 p-2 font-mono text-xs text-gray-100"
      >
        const data = [...Array(1000).keys()];
      </textarea>

      <h2 className="text-xs font-medium opacity-50">Test cases</h2>
      <div className="flex flex-col gap-4">
        <article className="flex flex-col rounded-md bg-gray-700">
          <header className="flex items-center justify-between p-2 text-xs">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-950 text-center">
              1
            </span>
            <span className="text-xs opacity-50">33535 ops/s</span>
          </header>
          <textarea
            rows={1}
            className="field-sizing-content w-full resize-none rounded-b-md bg-gray-950 p-2 font-mono text-xs text-gray-100"
          >
            const data = [...Array(1000).keys()];
          </textarea>
        </article>
      </div>

      <button className="transition-color w-fit cursor-pointer rounded-md bg-white/30 px-4 py-2 text-white hover:bg-white/50">
        Benchmark code
      </button>
    </main>
  );
}

export default App;
