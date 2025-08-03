export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Home Page</h1>
        <p className="text-sm">Try adding a query at the url with ?name={"<name>"}</p>
        <p className="text-sm">You can choose any name you want.</p>
        <p className="text-sm">Optional: You may add ?age parameter.</p>
        <br/>
        <p>Example:</p>
        <ul className="list-disc list-inside">
          <li>?name=John&age=18</li>
          <li>?name=Jane&age=19</li>
          <li>?name=Jake</li>
        </ul>
      </div>
    </div>
  )
}