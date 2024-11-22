interface IProps {
    isVisible: boolean
}
export default function Spinner({ isVisible }: IProps) {
    if(!isVisible) return null

    return (
        <div className="fixed top-0 left-0 z-10 w-screen h-screen flex justify-center items-center bg-black bg-opacity-60">
            <div className="z-10 bg-transparent border-2 animate-spin border-t-blue-500 w-11 rounded-full h-11"></div>
        </div>
    )
}