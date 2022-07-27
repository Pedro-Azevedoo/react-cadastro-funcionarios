import './styles.css';

const ColaboradorCard = (props) =>{
    const RGB_Linear_Shade=(p,c)=>{
        var i=parseInt,r=Math.round,[a,b,c,d]=c.split(","),P=p<0,t=P?0:255*p,P=P?1+p:1-p;
        return"rgb"+(d?"a(":"(")+r(i(a[3]=="a"?a.slice(5):a.slice(4))*P+t)+","+r(i(b)*P+t)+","+r(i(c)*P+t)+(d?","+d:")");
    }

    // const teste = RGB_Linear_Shade(props.corPrim, -0.2);
    // console.log(teste);

    return(
        <div className='rectangle'>
            <div className='colorSector' style={{backgroundColor: props.corPrim}}>
                <img src={props.imagem} alt={props.nome} style={{borderColor: props.corPrim}} />
            </div>
            
            <div className='content'>
                <h4 style={{color: props.corPrim}}>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
            
    );
}

export default ColaboradorCard;

