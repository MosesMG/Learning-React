import { NavLink, useLoaderData } from "react-router-dom"

export function Articles() {
    const posts = useLoaderData();

    return <>
        <h3>Articles</h3>

        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <NavLink to={post.id}>{post.title}</NavLink>
                </li>
            ))}
        </ul>
    </>
}