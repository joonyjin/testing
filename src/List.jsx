import React,{useState} from 'react';
import arr from './Firststep';
import Display from './display';

function List({ num, kind }) {
    let Arrlist = [];
    let list = arr[num][1];
    const [checkItems, setCheckItems] = useState([]);
    const handleCheck = (e) => {
        if (e.target.checked) {
            const nowCheck = [...checkItems, e.target.id]
            setCheckItems([...checkItems,e.target.id]);
            console.log(nowCheck)
        } else {
          setCheckItems(checkItems.filter((el) => el !== e.target.id))
          console.log(`{e.target.id} 선택 해제`);
        }
    }
    const [send,setSend] = useState(false);
    const onSent = () => {
        for (let v of list) {
            for (let e of checkItems){
                if (e == v.name){
                    Arrlist.push(v);
                }
            } 
        }
        console.log(Arrlist);
        alert("현재 카테고리 선택항목 저장완료! 다음 카테고리를 선택해주세요!")
        setSend(true);
    }
    const [final,setFinal] = useState(false);
    const onFinal = () => {
        alert("해당 내역의 길찾기 시작")
        setFinal(true);
    }
    return (
        <div>
          <h1 style={{
            fontSize:"3rem",
            textAlign:"center",
            }}>{kind} 추천 리스트</h1>
        <div  class="flex-container">
        {list.map((cate) => (
            <div>
            <Display name={cate.name} address = {cate.address} photo={cate.image} />
            <input 
              type="checkbox"
              id = {cate.name}
              value = {cate}
              checked={checkItems.includes(cate.name)? true:false}
              onChange={handleCheck}
              style ={{marginLeft:"2rem", marginBottom:"2rem"}}
            ></input>선택   
            </div>
        ))}
        </div>
        <button
            style={{
                marginBottom: "3rem",
                width: "10%",
                float: "right",
                }}
                onClick={onFinal}
                disabled={final}
                >현재 담은걸로 길찾기</button>
        <button
            style={{
            marginBottom: "3rem",
            marginRight: "6rem",
            width: "10%",
            float: "right",
            }}
            onClick={onSent}
            disabled={send}
            >선택정보 저장</button>
        </div>
      );
}   

export default List;