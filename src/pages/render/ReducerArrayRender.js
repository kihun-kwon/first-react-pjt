import React,{ useRef, useEffect, useMemo, useCallback, useReducer } from "react";
import { Outlet, Link } from "react-router-dom";

function ArrayRender({data,onRemove,onToggle}){
    return (
        <>
        <div>
            <li>{data.index}</li>
            <li style={{cursor:'pointer',color:data.active ? 'green':'black'}} onClick={() =>  onToggle(data.id)}>{data.username}</li>
            <li>{data.email}</li>
            <li><Link to={`./update/${data.id}`}><button>수정</button></Link></li>
            <li><button onClick={() => onRemove(data.id)}>삭제</button></li>
        </div>
        </>
    );
} 

function countActiveUsers(data){
    //console.log('countActiveUsers');
    return data.filter(user => user.active).length;
}

const initialState = {
    userArr : [
        {
            id:1,
            username: 'test1',
            email: 'test1@mail.com',
            active: true
        },
        {
            id:2,
            username: 'test2',
            email: 'test2@mail.com',
            active: false
        },
        {
            id:3,
            username: 'test3',
            email: 'test3@mail.com',
            active: false
        },
    ]
}

function reducer(state, action){
    console.log(action);
    switch (action.type) {
        case 'ADD_USER':
            return {userArr:state.userArr.concat(action.user)}
        case 'REMOVE_USER':
            return {userArr:state.userArr.filter(user => user.id !== action.userId)}
        case 'TOGGLE_USER':
            return {userArr:state.userArr.map(user =>
                user.id === action.userId ? {...user,active:!user.active} : user
            )}
        case 'UPDATE_USER':
            return {userArr:state.userArr.map(user =>
                user.id === parseInt(action.id) ? {...user,username:action.username,email:action.email} : user
              )}
        default:
            return state;
    }
}
function ReducerArrayList(){
    //const [userArr,udateUser] = useState(arr);
    const [state, dispatch] = useReducer(reducer,initialState);
    const {userArr} = state;
    const nextId = useRef(userArr.length+1);

    useEffect(() => {
        //console.log('userArr 값이 설정됨');
        //console.log(userArr);
        return () => {
          //console.log('userArr 가 바뀌기 전..');
          //console.log(userArr);
        }
      },[]);

    //console.log(userArr);

    const arrAdd = useCallback(() => 
        {
        //udateUser([...userArr,{id:nextId.current,username:'test'+nextId.current,email:'test'+nextId.current+'@mail.com',active:false}]);
        dispatch({type:'ADD_USER',user:{id:nextId.current,username:'test'+nextId.current,email:'test'+nextId.current+'@mail.com',active:false}});
        nextId.current += 1;
        },[]
    )

    const onRemove = useCallback(userId =>
        {
            //console.log('onRemove');
            dispatch({type:'REMOVE_USER',userId:userId});
            //udateUser(userArr.filter(user => user.id !== userId));
            //nextId.current -= 1;
        },[]
    )

    const onToggle = useCallback(userId => {
        dispatch({type:'TOGGLE_USER',userId:userId});
        /*
        udateUser(userArr.map(user =>
            user.id === userId ? {...user,active:!user.active} : user
        ));
        */
        },[]
    )

    const count = useMemo(() => countActiveUsers(userArr),[userArr]);
    return (
        <>
        <button onClick={arrAdd}>데이터추가</button>
        {userArr.map((a,idx) => {
            a['index'] = idx;
            return <ArrayRender data={a} onRemove={onRemove} onToggle={onToggle} key={idx}/>
        })}
        활성사용자 수:{count}
        <Outlet context={{userArr,dispatch}}/>
        </>
    );
}

//export default React.memo(ArrayList);
export default ReducerArrayList;