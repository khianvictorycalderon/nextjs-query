interface SearchParamsProps {
  searchParams: Promise<{
    name?: string;
    age?: string;
  }>;
}

export default async function Home({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  const { name, age } = params;

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="text-center">
        {name ? (
          <>
            <h1 className="text-4xl font-semibold">Hello {name}</h1>
            {age && <p className="text-sm">You are {age} years old.</p>}
          </>
        ) : (
          <>
            <h1 className="text-4xl font-semibold">Home Page</h1>
            <p className="text-sm">
              Try adding a query at the URL with <code>?name=&lt;name&gt;</code>
            </p>
            <p className="text-sm">Optional: You may add ?age parameter.</p>
            <br />
            <p>Example:</p>
            <ul className="list-disc list-inside">
              <li>?name=John&age=18</li>
              <li>?name=Jane&age=19</li>
              <li>?name=Jake</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
