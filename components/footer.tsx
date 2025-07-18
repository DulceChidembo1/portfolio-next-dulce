export const Footer =()  => {
    const currentYear = new Date().getFullYear();
    return (
        <>
        <footer className="bg-blue-950 text-white p-4 mt-8">
            <div>
                <p>© {currentYear} My Portfolio. Dulce Chidembue.</p>
            </div>
        
        </footer>
        </>
    )
}