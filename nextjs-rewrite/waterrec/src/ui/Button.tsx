'use client';

export default function Button({action, children}: { action: any, children: React.ReactNode}) {
    return (
        <div>
            <button className={"bg-accent-300 outline-accent-200 font-bold outline-2 p-3 hover:shadow-accent-300 hover:shadow-lg transition duration-200 ease-in-out"} onClick={action}>{children}</button>
        </div>
    )
}