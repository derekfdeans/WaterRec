function PlantItem({ url, plant }: {url: string, plant: string}) {
    return (
        <div className={"px-5 py-3 font-bold w-50 flex flex-row items-center bg-accent-200 rounded-md outline-accent-100 outline-2"}>
            {/*<Image src={url} alt={"plant"}/>*/}
            <p>{plant}</p>
        </div>
    )
}

export default function Home() {
  return (
      <div>
          <main>
              <section>
                  <h2 className={"p-5 font-bold text-xl"}>Plants at WRA!</h2>
                  <div className={"flex flex-row flex-wrap gap-5 p-5"}>
                      <PlantItem url={""} plant={"Collard Greens"}/>
                      <PlantItem url={""} plant={"Tomatoes"}/>
                      <PlantItem url={""} plant={"Hibiscus"}/>
                      <PlantItem url={""} plant={"Okra"}/>
                      <PlantItem url={""} plant={"Yellow Squash"}/>
                      <PlantItem url={""} plant={"Zucchini"}/>
                      <PlantItem url={""} plant={"Eggplant"}/>
                      <PlantItem url={""} plant={"Shallot Onions"}/>
                  </div>
              </section>

              <section>
                  <div>
                      <h2>Recommendations for WRA:</h2>
                      <p>Calculate irrigation based on the Penman-Monteith equation:</p>
                  </div>
                  <div>
                      <button id="water-plants">Calculate</button>
                  </div>
                  <div id="result"></div>
              </section>

              {/*<img src="" alt="BlueLab Metro Logo" width="200" height="180"/>*/}
          </main>
      </div>
  );
}
