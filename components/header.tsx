export const Header = () => {
    return (
        <>
        <header className="bg-blue-950 text-2xl text-white p-4 items-center flex justify-between">
            <h1>Dulce Chidembo</h1>
        <nav>
            <ul className="flex  gap-3 justify-end">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>

        </header>
        
        </>
    
    )
}