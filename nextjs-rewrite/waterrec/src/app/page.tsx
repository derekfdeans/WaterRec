import Image from "next/image";

function PlantItem({ url, plant }: {url: string, plant: string}) {
    return (
        <div className={"p-3 flex flex-row items-center bg-surface-200 rounded-md outline-surface-100 outline-2"}>
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
                  <h2>Plants at WRA!</h2>
                  <div className={"flex flex-row flex-wrap gap-5"}>
                      <PlantItem url={""} plant={"Collard greens"}/>
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
                  <div className="recommended-header">
                      <h2>Recommendations for WRA:</h2>
                      <p>Calculate irrigation based on the Penman-Monteith equation:</p>
                  </div>
                  <div className="content">
                      <button id="water-plants">Calculate</button>
                  </div>
                  <div id="result"></div>
              </section>

              {/*<img src="" alt="BlueLab Metro Logo" width="200" height="180"/>*/}
          </main>
      </div>
  );
}
