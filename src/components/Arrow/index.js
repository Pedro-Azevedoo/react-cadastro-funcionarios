import './styles.css';

export default function Arrow(){
    return(
        <>
            <div className='arr'>
                <div>
                    <div className="d-flex j-content-center hero-arrow-txt">
                        <p className='p'>Role para Baixo</p>
                    </div>
                    <div className="hero-arrow-animation">
                        <a id="arrow" className="hero-arrow" href="#part2"></a>
                    </div>
                </div>
            </div>
        </>
    );

}