import React, {useState} from "react";
import GridContainer from "../Common/Grid/GridContainer";
import InputText from "../Common/InputText";
import InputTextArea from "../Common/InputTextArea";
import Modal from "../Common/Modal";

export default function ArticleDialog({title, onClose, onSave, open, defaultArticle}) {
    const [shouldOpen, setOpen] = useState(open);
    const [article, setArticle] = useState(defaultArticle ? defaultArticle : {
        title: "",
        description: "",
        tags: [],
        data: ""
    });

    function handleClose() {
        setOpen(false);
        onClose();
    }

    function handleSave() {
        setOpen(false);
        onSave(article);
    }

    return (
        <Modal id="article=dialog" title={title}
               shouldOpen={shouldOpen}
               onClose={handleClose}
               onSave={handleSave}
        >
            <GridContainer>
                <InputText label="Title" onChange={e => {
                    setArticle({...article, title: e.target.value});
                }} value={article.title}/>
                <InputText label="Description" onChange={e => {
                    setArticle({...article, description: e.target.value});
                }} value={article.description}/>
            </GridContainer>
            <GridContainer repeat={1}>
                <InputTextArea label="Article"
                               onChange={(e) => setArticle({...article, data: btoa(e.target.value)})}
                               value={atob(article.data)}/>
            </GridContainer>
        </Modal>
    )
}