import { useNavigate } from "react-router-dom";

const BilanCarbone = () => {
    const navigate = useNavigate();

    return (
        <div className="explore">
            <header>
            <p className="pageHeader">Bilan Carbone</p>
            </header>
            <main>
                <div onClick={()=>{navigate('/garage-detail')}}>Retour à la page précédente</div>
            </main>
        </div>
        
    );
};

export default BilanCarbone;
