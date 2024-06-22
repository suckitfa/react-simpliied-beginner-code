import { useState } from "react";

function MyCheckBox() {
    const [liked, setLiked] = useState(false);
    return (
        <div>
            <h3>My CheckBox</h3>
            <label>
                <input
                    type="checkbox"
                    value={liked}
                    onChange={(e) => setLiked(e.target.checked)}
                    checked={liked}
                />
                I like this
            </label>
            <p>
                {liked ? 'You liked this.' : 'You did not like this.'}
            </p>
        </div>
    )
}

export default MyCheckBox;