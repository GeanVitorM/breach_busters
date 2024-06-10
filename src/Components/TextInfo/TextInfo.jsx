const TextInfo = ({ text }) => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-3xl p-4 bg-white shadow-md rounded-lg text-gray-800">
                <pre className="whitespace-pre-wrap text-justify">{text}</pre>
            </div>
        </div>
    )
}

export default TextInfo;