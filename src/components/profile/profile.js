import { useDispatch, useSelector } from "react-redux"
import { useCallback } from "react"
import { profileReducer } from '../../store/profile/reducer.js'


export const Profile = () => {

    const { dispatch } = useDispatch()
    const { showName, name } = useSelector((state) => state);

    const setShowName = useCallback(() => {
        dispatch({
            
        });
    }, [dispatch]);
        

    return (
        <div>
            <h1>Профиль</h1>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            <span>Show Name</span>
            {showName && <div>{name}</div>}
        </div>
    )
}

export default Profile