import { useState, useEffect } from "react";
function Content() {
    // const [tittle, setTittle] = useState('');
    const tabs = ['posts', 'comments', 'albums']
    const [posts, setPosts] = useState([]);
    const [types, setTypes] = useState('posts')
    const [goToTop, setGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${types}`)
            .then(rest => rest.json())
            .then(posts => {
                setPosts(posts)
                console.log(posts)
            })
    }, [types])
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setGoToTop(true);
            } else {
                setGoToTop(false);
            }
        }

        window.addEventListener('scroll', handleScroll)
        console.log('add evenlistener')
        //clean up funtion

        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('remove evenlistener')
        }
    }, [])
    const handleClickScroll = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setTypes(tab)}
                >{tab}
                </button>
            ))}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title || post.name}
                    </li>
                ))}
            </ul>
            {goToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 30,
                        bottom: 30
                    }}
                    onClick={handleClickScroll}
                >
                    Go To Top
                </button>
            )}
        </div>
    );
}
export default Content;