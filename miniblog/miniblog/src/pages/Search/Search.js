import React from 'react'
import { Link } from 'react-router-dom';

import styles from './Search.modules.css'

import PostDetails from '../../components/PostDetails'
//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

const Search = () => {
    const query = useQuery();
    const search = query.get("q")

    const {search: posts} = useFetchDocuments('posts', search)

    return 
    <div className={styles.search_container}>
        <h2>Search</h2>
        <div>
            {posts && posts.length === 0 && (
                <div className={styles.noposts}>
                    <p>Nenhum post encontrado</p>
                    <Link to='/' className='btn btn-dark'>Voltar</Link>
                </div>
            )}
            {posts && posts.map((post) => <PostDetails key={post.id} post={post} />)}
        </div>
    </div>
}

export default Search;