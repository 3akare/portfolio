export default function Footer() {
    return (
        <footer className="mt-12 text-xs text-black/40">
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-accent-blue">&copy;</span> {new Date().getFullYear()} 3akare
                </div>
            </div>
        </footer>
    )
}