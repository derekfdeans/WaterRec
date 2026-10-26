import {ReactNode} from "react";

export default function Page() {
    return (
        <div>
            <main className={"p-3 flex flex-col gap-3"}>
                <Section>
                    <Header>Project Bluelab</Header>
                    <HeaderLink url={"http://bluelab.engin.umich.edu/"}>Bluelab Website</HeaderLink>

                    <Body>
                        Project BlueLab is a student organization at The University of Michigan who strives to help
                        their communities through the C-SED (Community for Socially Engaged Design). Specifically within
                        Project BlueLab, the BlueLab Metro team works alongside WRA to help through Socially Engaged
                        Design.
                    </Body>
                </Section>

                <Section>
                    <Header>Willow Run Acres</Header>
                    <HeaderLink url={"https://willowrunacres.com/"}>WRA Home Website</HeaderLink>

                    <Body>
                        Willow Run Acres is a farm in Ypsilanti led by T.C. Collins. Through the Willow Run Acres, T.C.
                        hopes to provide education and offer the joy of gardening to all that come!
                    </Body>
                </Section>

                <Section>
                    <Header>Goals</Header>
                    <Body>
                        Through this website, we hope to support Willow Run Acres's goal of educating, growing, and
                        learning!
                    </Body>
                </Section>
            </main>
        </div>
    )
}

function Section({children}: { children: ReactNode }) {
    return (
        <div>
            <section
                className={"p-5 flex-col flex border-2 border-secondary-300 hover:bg-primary-100 transition ease-in-out duration-200"}>
                {children}
            </section>
        </div>
    )
}

function Header({children}: { children: ReactNode }) {
    return (
        <div>
            <h2 className={"font-bold text-primary-600 text-xl p-3"}>
                {children}
            </h2>
        </div>
    )
}

function HeaderLink({children, url}: { children: ReactNode, url: string }) {
    return (
        <div className={"p-3 hover:cursor-pointer hover:bg-white rounded-md underline transition duration-200 ease-in-out"}>
            <a href={url}>{children}</a>
        </div>
    )
}

function Body({children}: { children: ReactNode }) {
    return (
        <div>
            <p className={"p-3"}>
                {children}
            </p>
        </div>
    )
}