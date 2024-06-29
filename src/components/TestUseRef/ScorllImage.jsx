import { useRef } from "react";
function ScrollImage() {
    const listRef = useRef(null)
    const scrollToIndex = (index) => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll('li > img')[index]
        imgNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }

    return (
        <>
            <h1>Scroll Image Into View</h1>
            <nav>
                <button onClick={() => scrollToIndex(0)}>
                    Tom
                </button>
                <button onClick={() => scrollToIndex(1)}>
                    Maru
                </button>
                <button onClick={() => scrollToIndex(2)}>
                    Jellylorum
                </button>
            </nav>
            <div>
                <ul ref={listRef}>
                    <li>
                        <img
                            src="https://placekitten.com/g/200/200"
                            alt="Tom"
                        />
                    </li>
                    <li>
                        <img
                            src="https://placekitten.com/g/300/200"
                            alt="Maru"
                        />
                    </li>
                    <li>
                        <img
                            src="https://placekitten.com/g/250/200"
                            alt="Jellylorum"
                        />
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ScrollImage