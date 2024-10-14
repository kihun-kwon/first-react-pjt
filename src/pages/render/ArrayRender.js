import React,{ useRef, useState, useEffect, useMemo, useCallback } from "react";
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

const arr = [
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
];

function ArrayList(){
    const nextId = useRef(arr.length+1);
    const [userArr,udateUser] = useState(arr);

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

        udateUser([...userArr,{id:nextId.current,username:'test'+nextId.current,email:'test'+nextId.current+'@mail.com',active:false}]);
        nextId.current += 1;
        console.log('arrAdd');
        },[userArr]
    )

    const onRemove = useCallback(userId =>
        {
            console.log('onRemove');
            udateUser(userArr.filter(user => user.id !== userId));
            //nextId.current -= 1;
        },[userArr]
    )

    const onToggle = useCallback(userId => {
        udateUser(userArr.map(user =>
            user.id === userId ? {...user,active:!user.active} : user
        ));
        },[userArr]
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
        <Outlet context={{userArr,udateUser}}/>
        </>
    );
}

//export default React.memo(ArrayList);
export default ArrayList;