 
const Header = async () => {
  return (
    <main className="min-h-screen min-w-screen base-container">
 
      <section className="flex flex-col gap-2 items-center">
        <div className="flex flex-col items-center text-center text-3xl max-sm:text-xl font-bold mt-3">
           <h1>Welcome to Telehunt</h1>
          <p className="text-sm text-muted-foreground font-normal mt-2">
            Explore a variety of Telegram channels, bots, and groups matching your interests.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Header