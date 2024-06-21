const TextInfo = ({ text }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#f8f4f4] text-black" style={{ fontFamily: ' Montserrat , sans-serif' }}>
            <div className="w-full max-w-3xl p-4">
                <pre className="whitespace-pre-wrap text-justify">{text}</pre>
            </div>
        </div>
    )
}

export default TextInfo;