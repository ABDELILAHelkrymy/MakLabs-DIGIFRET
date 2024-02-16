import { useNavigate } from "react-router-dom";

const Documents = () => {
    const navigate = useNavigate();

    return (
        <div className="explore">
            <header>
            <p className="pageHeader">Documents</p>
            </header>
            <main>
                <div onClick={()=>{navigate('/garage-detail')}}>Retour à la page précédente</div>
            </main>
        </div>
        
    );
};

export default Documents;
