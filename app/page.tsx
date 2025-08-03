export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Home Page</h1>
        <p className="text-sm">Try adding a query at the url with ?name={"<name>"}</p>
        <p className="text-sm">You can choose any name you want.</p>
      </div>
    </div>
  )
}