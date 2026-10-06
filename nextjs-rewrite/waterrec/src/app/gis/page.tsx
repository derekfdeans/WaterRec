export default function Page() {
    return (
        <div>
            <main>
                <section className="map-section">
                    <div className="map-frame-wrapper">
                        <iframe src="https://arcg.is/1urTXb1" width="100%" height="500px"
                                allowFullScreen allow="geolocation"></iframe>
                    </div>
                </section>
            </main>
        </div>
    )
}