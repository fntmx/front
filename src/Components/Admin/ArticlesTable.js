import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TablePagination,
    Paper,
    ButtonGroup,
    Checkbox
} from "@material-ui/core";
import {ALL_ARTICLES, COUNT_ARTICLES, NEW_ARTICLE} from "../../GraphQL/Articles";
import {useMutation, useQuery} from "@apollo/react-hooks";
import {LinearProgress, TableHead} from "@material-ui/core";
import moment from "moment";
import Alert from "../Common/Alert";
import Modal from "../Common/Modal";
import GridContainer from "../Common/Grid/GridContainer";
import InputText from "../Common/InputText";
import ArticleTags from "../Common/ArticleTags";
import ArticleDialog from "./ArticleDialog";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    chip: {
        minWidth: '25px',
        margin: theme.spacing(0.5),
    }
}));

export default function ArticlesTable() {
    const classes = useStyles();
    const [showNewArticleDialog, setShowNewArticleDialog] = useState(false);
    const [showEditArticleDialog, setShowEditArticleDialog] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [page, setPage] = React.useState(0);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);

    const {loading, error, data} = useQuery(ALL_ARTICLES, {variables: {limit, offset, withData: true}});
    const {loading: countLoading, error: countError, data: countData} = useQuery(COUNT_ARTICLES);
    const [addArticle, { loading: newArticleLoading, error: newArticleError }] = useMutation(NEW_ARTICLE);

    useEffect(() => {
        setOffset(page * limit);
    }, [page]);

    if (loading) return <LinearProgress/>;
    if (countLoading) return <LinearProgress/>;

    if (error) return <Alert title={error.message} status="danger"/>;
    if (countError) return <Alert title={countError.message} status="danger"/>;
    if (newArticleError) return <Alert title={newArticleError.message} status="danger"/>;

    function newArticle(article) {
        console.log(article);
        //TODO: Author should be pulled from the usr claim in the JWT
        addArticle({variables: {title: article.title, description: article.description, data: article.data, tags: article.tags, author: 1}}).then(res =>
        console.log(res));
    }

    function saveArticle(article){
        console.log("SAVE ARTICLE");
    }

    return (
        <div className={classes.root}>
            {/*articleSelected !== null &&
            <EditArticle selectedArticle={articleSelected}/>*/}
            {showNewArticleDialog &&
            <ArticleDialog title="New Article" open={showNewArticleDialog} onClose={() => setShowNewArticleDialog(false)} onSave={newArticle}/>}
            {showEditArticleDialog &&
            <ArticleDialog title="Edit Article" open={showEditArticleDialog} onClose={() => setShowEditArticleDialog(false)} onSave={saveArticle} defaultArticle={selectedArticle}/>}

            <ButtonGroup>
                <Button variant="outlined" color="primary" onClick={() => setShowNewArticleDialog(true)}>
                    New Article
                </Button>
                <Button variant="outlined" color="primary" disabled={selectedArticle === null} onClick={() => setShowEditArticleDialog(true)}>
                    Edit Article
                </Button>
            </ButtonGroup>
            <Paper className={classes.paper}>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table} aria-label="Articles Table">
                        <TableHead>
                            <TableRow>
                                <TableCell/>
                                <TableCell align="left">Identifier</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Tags</TableCell>
                                <TableCell align="left">Created</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.article.map(article => (
                                <TableRow key={article.id} hover>
                                    <TableCell>
                                        <Checkbox
                                            checked={selectedArticle !== null ? selectedArticle.id === article.id : false}
                                            onChange={() => {
                                                if(selectedArticle == null) {
                                                    setSelectedArticle(article)
                                                } else {
                                                    if(selectedArticle.id === article.id) {
                                                        setSelectedArticle(null);
                                                    } else {
                                                        setSelectedArticle(article);
                                                    }
                                                }
                                            }}/>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {article.id}
                                    </TableCell>
                                    <TableCell align="left">{article.title}</TableCell>
                                    <TableCell align="left"><ArticleTags tags={article.tags}/></TableCell>
                                    <TableCell align="left">{moment(article.created).format("DD/MM/YYYY")}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={[10, 15, 20]}
                    component="div"
                    count={countData.count.articles}
                    rowsPerPage={limit}
                    page={page}
                    onChangePage={(e, newPage) => setPage(newPage)}
                    onChangeRowsPerPage={(e) => setLimit(parseInt(e.target.value))}
                />
            </Paper>
        </div>
    );
}
