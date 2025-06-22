import { NavLink, useLoaderData } from "react-router-dom"

export function Articles() {
    const posts = useLoaderData();

    return <>
        <h3>Liste des articles</h3>

        <TabArticles posts={posts} />
    </>
}

function TabArticles({posts}) {
    return <table className="table table-bordered table-striped table-hover w-75 mx-auto my-4">
        <thead>
            <tr>
                <th className="text-center">Id</th>
                <th>Title</th>
            </tr>
        </thead>
        <tbody>
            {posts.map(post => (
                <tr key={post.id}>
                    <td className="text-center">{post.id}</td>
                    <td>
                        <NavLink
                            to={`${post.id}`}
                            className="link-dark"
                            style={{textDecoration: 'none'}}
                        >
                            {post.title}
                        </NavLink>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
}
