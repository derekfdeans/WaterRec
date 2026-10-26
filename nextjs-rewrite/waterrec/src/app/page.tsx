import {ReactNode} from "react";
import Button from "@/ui/Button";

function PlantItem({url, plant}: { url: string, plant: string }) {
    return (
        <div
            className={"px-5 py-3 font-bold w-50 flex flex-row items-center bg-accent-200 rounded-md outline-accent-100 outline-2"}>
            {/*<Image src={url} alt={"plant"}/>*/}
            <p>{plant}</p>
        </div>
    )
}

export default function Home() {
    return (
        <div>
            <main>
                <Section>
                    <Header>Plants at WRA!</Header>
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
                </Section>

                <Section>
                    <Header>Recommendations for WRA:</Header>
                    <p>Calculate irrigation based on the Penman-Monteith equation:</p>
                    <Button action={null}>Calculate</Button> {/*// id water-plants*/}
                    <div id="result"></div>
                </Section>

                {/*<img src="" alt="BlueLab Metro Logo" width="200" height="180"/>*/}
            </main>
        </div>
    );
}

function Section({children}: { children: ReactNode }) {
    return (
        <div>
            <section
                className={"p-5 flex-col flex border-2 border-secondary-300"}>
                {children}
            </section>
        </div>
    )
}

function Header({children}: { children: ReactNode }) {
    return (
        <div>
            <h2 className={"font-bold text-primary-600 text-xl p-5"}>
                {children}
            </h2>
        </div>
    )
}