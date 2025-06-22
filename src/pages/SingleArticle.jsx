import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export function SingleArticle() {
    const {id} = useParams()

    return <div>
        <h3>Article {id}</h3>

        <Presentation article={id} />

        <div className="mx-auto" style={{width: '200px'}}>
            <NavLink to="/articles" className="btn btn-primary fw-semibold w-100">
                <i className="fa fa-arrow-left"></i> Retour
            </NavLink>
        </div>
    </div>
}

function Presentation ({article}) {
    const [post, setPost]  = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${article}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [article])

    if (!post) return <h4 className="my-4 fw-semibold">Chargement en cours...</h4>

    return (
        <div className="row justify-content-center my-4">
            <div className="col-6 col-md-8 col-sm-10 card">
                <div className="card-body">
                    <h4 className="card-title mb-4">
                        <span className="text-decoration-underline fw-semibold">Titre </span>
                        : {post.title}
                    </h4>
                    <h5>
                        <span className="fw-semibold text-decoration-underline">Description </span>
                        : {post.body + post.body + post.body + post.body}
                    </h5>
                </div>
            </div>
        </div>
    )
}
