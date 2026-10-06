export default function Home() {
  return (
      <div>
          <main>
              <section>
                  <h2>Plants at WRA!</h2>
                  <div className="plantList">
                      <p>Collard greens</p>
                      <p>Tomatoes</p>
                      <p>Hibiscus</p>
                      <p>Okra</p>
                      <p>Yellow Squash</p>
                      <p>Zucchini</p>
                      <p>Eggplant</p>
                      <p>Shallot Onions</p>
                  </div>
              </section>

              <section>
                  <div className="recommended-header">
                      <h2>Recomendations for WRA:</h2>
                      <p>Calculate irrigation based on the Penman-Monteith equation:</p>
                  </div>
                  <div className="content">
                      <button id="water-plants">Calculate</button>
                  </div>
                  <div id="result"></div>
              </section>

              <img src="" alt="BlueLab Metro Logo" width="200" height="180"/>
          </main>
      </div>
  );
}
