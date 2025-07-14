const AboutPage = () => {
    return (
        <>
        <div className="container max-w-7xl mx-auto py-20">
            <h1 className="text-4xl font-bold mb-8 text-center">About-me</h1>

            <section className=" mb-16">
             <p className="text-lg text-black max-w-3xl mx-auto text-center">I am a passionate web developer with a focus on creating dynamic and responsive web applications.</p>
            </section>

            <section className="mb-16"> 
                <h2 className="text-2xl text-black text-center"> Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6"></div>
                <div className="bg-green-400 p-6 rounded-lg text-shadow-emerald-50"></div>

            </section>

        </div>
    </>
    );
}

export default AboutPage;
