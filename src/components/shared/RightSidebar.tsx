export default function RightSidebar(){
    return (
        <section className="custom-scrollbar rightsidebar w-60 bg-glassmorphism p-10 backdrop-blur-0 backdrop-saturate-54  border-1 border-dark-4">
            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-heading4-medium text-light-1 ">Suggested Clubs</h3>
            </div>
            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-heading4-medium text-light-1">Suggested Users</h3>
            </div>
            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-heading4-medium text-light-1">Suggested Books</h3>
            </div>
        </section>
    )
}