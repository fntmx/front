import React, {useState} from "react";
import GridContainer from "../Common/Grid/GridContainer";
import InputText from "../Common/InputText";
import Modal from "../Common/Modal";
import InputTextArea from "../Common/InputTextArea";


export default function EditArticle({selectedArticle}) {
    const [article, setArticle] = useState(selectedArticle);

    function saveArticle() {
        console.log("Saving article, useMutation here");
        console.log(article);
    }

    return (
        <Modal id="modify-article" title={`Modify Article`}
               shouldOpen={article !== null}
               onClose={() => setArticle(null)}
               onSave={saveArticle}
        >
            {article !== null &&
            <>
                <GridContainer>
                    <InputText label="Title" onChange={e => {
                        setArticle({...article, title: e.target.value});
                    }} value={article.title} />
                    <InputText label="Description" onChange={e => {
                        setArticle({...article, description: e.target.value});
                    }} value={article.description} />
                </GridContainer>
                <GridContainer repeat={1}>
                    <InputTextArea label="Article"
                                   onChange={(e) => setArticle({...article, data: btoa(e.target.value)})}
                                   value={atob(article.data)}/>
                </GridContainer></>}
        </Modal>
    )
}