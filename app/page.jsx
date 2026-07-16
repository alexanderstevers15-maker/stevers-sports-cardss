export default function Home() {
  return (
    <main className="home">

      <section className="hero">

        <h1>
          Stevers Sports Cards
        </h1>

        <h2>
          Buy • Sell • Trade Authentic Sports Cards
        </h2>

        <p>
          Your home for football, baseball, and basketball cards.
        </p>

        <button>
          Shop Now
        </button>

      </section>


      <section className="featured">

        <h2>
          Featured Cards
        </h2>


        <div className="cards">

          <div className="card">
            🏈
            <h3>Football Cards</h3>
          </div>


          <div className="card">
            ⚾
            <h3>Baseball Cards</h3>
          </div>


          <div className="card">
            🏀
            <h3>Basketball Cards</h3>
          </div>

        </div>

      </section>


    </main>
  );
}
