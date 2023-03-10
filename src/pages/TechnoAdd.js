import { useState } from "react";

export default function TechnoAdd(props) {
    const [techno, setTechno] = useState({
        technoname: '',
        technocategory: '',
        technodescription: '',
    })
    const { handleAddTechno } = props;
    // const techno = {
    //     name: 'React',
    //     category: 'front',
    //     description: 'learn React'
    // }
    function handleSubmit(evt) {
        // Qui nous permet de ne pas ralechis la page
        evt.preventDefault();
        handleAddTechno(techno);
    }
    function handleChange(evt) {
        const { name, value } = evt.target
        setTechno({...techno, [name]: value})
        // Après l'enregistrement du formulaire, on vide tout les champs avec leurs valeur au defaut
        setTechno({
            technoname: '',
            technocategory: '',
            technodescription: '',
        })
    }
    return (
        <div className="techno-add">
             <h1>Add a Techno</h1>
             <div>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <label htmlFor="technoname">Name</label>
                    <br />
                    <input type="text" name="technoname" id="technoname" value={techno.techonname} onChange={(evt) => handleChange(evt)} />
                    <br />
                    <label htmlFor="technocategory">Category:</label>
                    <br />
                    <select name="technocategory" id="technocategory" value={techno.technocategory} onChange={(evt) => handleChange(evt)}>
                        <option value="">Select a category</option>
                        <option value="front">Front</option>
                        <option value="back">Back</option>
                        <option value="fullstack">Full Stack</option>
                        <option value="other">Other</option>
                    </select>
                    <br />
                    <label htmlFor="technodescription" >Description:</label>
                    <br />
                    <textarea
                        name="technodescription"
                        id="technodescription"
                        cols="30"
                        rows="10"
                        value={techno.technodescription} onChange={(evt) => handleChange(evt)}>

                    </textarea>
                    <br />
                    <input type="submit" value="Add Techno" className="btn"/>
                </form>
             </div>
        </div>
    )
    
}