import { useDispatch, useSelector } from "react-redux"
import { useCallback } from "react"
import { CHANGE_SHOW_NAME } from '../../store/profile/actions'


export const Profile = () => {

    const dispatch = useDispatch()
    const { showName, name } = useSelector((state) => state);

    const setShowName = useCallback(() => {
        dispatch({
            type: CHANGE_SHOW_NAME
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