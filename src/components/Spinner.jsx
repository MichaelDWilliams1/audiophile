import Spin from '../assets/72gi.gif'

function Spinner(){
    return (
        <main className='w-screen h-screen flex justfy-center items-center'>
        <div className='w-full'>
            <img width={180} 
            className='text-center mx-auto' 
            src={Spin} 
            alt="Loading..." 
            />

        </div>
        </main>
    )
}

export default Spinner