import FondoSvg from 'Media/Imagen.svg'

function moveCarusel() {
    const carusel = document.getElementById('carusel')
    if (carusel?.scrollLeft + carusel?.offsetWidth === carusel?.scrollWidth) {
        carusel.scrollTo({left: 0, behavior: 'smooth'})
    } else {
        document.getElementById('carusel')?.scrollBy({left: 200, behavior: 'smooth'})
    }
    // setTimeout(() => {
    //     moveCarusel()
    // }, 6000)
}
export function Japo() {
    const CAROUSELIMGs = [
        "fondoJapo.jpg", "fondoJapo2.jpg", "CaruselJapo.jpg",
        "CaruselJapo2.jpg", "CaruselJapo3.jpg", "CaruselJapo4.jpg",
        "CaruselJapo5.jpg", "CaruselJapo6.jpg",
    ]
    const caruselItems = CAROUSELIMGs.map((src, i) => {
        return <img src={`/Media/${src}`} alt={src} width={200} key={i} className='rounded-[125px] snap-center snap-always w-[200px] h-[200px] object-contain'/>
    })
    
    const caruselInterval = setInterval(() => {
        moveCarusel();
    }, 6000);
    

    return (
        <article className='grid grid-cols-3 grid-rows-4 relative h-screen'>
            <div className='font-BebasNeue text-9xl w-1/2 content-start justify-items-center justify-self-center col-start-1 col-span-2 row-start-2 row-end-1'>
                <h2 className={`bg-[url(Media/fondoJapo2.jpg)] bg-contain bg-clip-text text-transparent backdrop-blur-xs px-8 absolute`}>
                    <i>JAPON</i>
                </h2>
                <h2 className='absolute z-[-1] translate-2'>
                    <i>JAPON</i>
                </h2>
            </div>
            <section className='w-3/4 z-[-1] h-[180px] bg-[#c198c045] min-[1550px]:mb-0 min-[1550px]:mt-28 mb-6 rounded-2xl flex flex-row overflow-hidden col-start-1 col-span-3 row-start-1 row-span-2  min-[1550px]:self-center self-end justify-self-center p-2 '>
                <div id='carusel' className='snap-x snap-mandatory flex flex-col gap-x-16 flex-wrap overflow-hidden rounded-2xl'>
                    {caruselItems}
                </div>
            </section>
            <section className='max-w-lg text-justify leading-relaxed mb-8 font-BilboSwashCaps 2xl:mt-28 min-[1550px]:text-2xl text-lg flex flex-col gap-4 text-[#2D2363] backdrop-blur-lg [text-shadow:0_4px_4px_#fff] col-start-1 col-span-2 row-start-3 min-[1550px]:row-start-2 min-[1550px]:row-end-5  self-center p-4 justify-self-center'>
                <p>
                    Descubre Japón, un destino donde la tradición y la modernidad conviven en perfecta armonía. Recorre templos milenarios en Kioto.
                </p>
                <p>
                    maravíllate con la energía vibrante de Tokio y contempla la belleza natural del monte Fuji.
                </p>
                <p>
                    Disfruta de una gastronomía única, desde el sushi más fresco hasta sabores regionales inolvidables.
                </p>
                <p>
                    Japón te espera con su hospitalidad incomparable, paisajes sorprendentes y experiencias culturales que recordarás toda la vida. ¡Atrévete a vivir la magia del País del Sol Naciente!
                </p>
            </section>
            <figure className='justify-self-end h-full w-full col-start-2 col-span-3 row-start-1 -row-end-1 relative'>
                <div>
                    {/* fondo blur */}
                    <img
                        src={FondoSvg}
                        className="absolute inset-0 w-full object-cover blur-lg scale-100 z-[-1]"
                    />
                    {/* imagen normal */}
                    <img src={FondoSvg} alt="Imagen de el Monte Fuji" className='w-full '/>
                </div>
            </figure>
        </article>
    );
}