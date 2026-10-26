import {ReactNode} from "react";
import Button from "@/ui/Button";

export default function Page() {
    return (
        <div>
            <main>
                <Section>
                    <Header>Latest Data</Header>
                    <Button action={null}>Get Data</Button>

                    <p id="latest_data"></p>
                    <p id="raw_data"></p>
                    <p id="ETO"></p>
                </Section>
                <Section>
                    <Header>Past Data</Header>
                    <p>Data coming soon...</p>
                </Section>
            </main>
        </div>
    )
}


function Section({children}: { children: ReactNode }) {
    return (
        <div>
            <section
                className={"p-5 flex-col flex"}>
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