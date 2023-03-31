import { useInfiniteQuery } from 'react-query';
import React from 'react';
import Header from '@/components/layout/Header';
import Photo from '@/components/Photo';

interface Post {
    id: string,
    description: string,
    alt_description: string
    urls: {
        regular: string
        small: string
    }
    user: {
       username: string 
    }
}

const BASE_URL = process.env.BASE_URL;
const QUERY_KEY = process.env.QUERY_KEY;

const fetchPosts = async (pageParam?: number) => {
    const response = await fetch(`${BASE_URL}?page=${pageParam ?? 1}&${QUERY_KEY}`);
    const data = await response.json();
    return data as Post[];
};


const Index = () => {

    
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery(
        `${BASE_URL}/?${QUERY_KEY}`,
        ({ pageParam }) => fetchPosts(pageParam),
        {
            getNextPageParam: (lastPage, allPages) =>
                lastPage.length === 0 ? undefined : allPages.length + 1,
        }
    );


    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'error') return <div>Error</div>;


    return (
        <>
            <Header />
            <main className='bg-gradient-to-r from-sky-500 to-indigo-500 pt-36'>
                <div className='px-14'>
                    <ul className='mb-4 text-black 2xl:columns-4 lg:columns-3 sm:columns-1 md:columns-2 gap-8'>
                        {data?.pages.map((page, index) => (
                            <React.Fragment key={index}>
                                {page.map((post) => (
                                    <li key={post.id}>
                                        <div className='break-inside-avoid-column flex flex-col p-2 bg-gray-200 rounded-sm mb-8 shadow-md'>

                                            <Photo 
                                                src={post.urls.regular} 
                                                alt={post.alt_description} 
                                                desc={post.description} 
                                                user={post.user.username} 
                                                link={`/photos/${post.id}`} 
                                            />

                                        </div>
                                    </li>
                                ))}
                            </React.Fragment>

                        ))}
                    </ul>

                    <div className='flex items-center justify-center p-4'>
                        <div className='bg-gray-200 p-2 rounded-lg'>
                            <button
                            className=' text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 font-bold'
                            onClick={() => fetchNextPage()}
                            disabled={!hasNextPage || isFetchingNextPage}
                            >
                                {isFetchingNextPage ? 'Loading more...' : 'Load more'}
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
};

export default Index;