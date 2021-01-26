import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './actions';

export default function App() {

  // redux
  const age = useSelector(state => state.age);
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  const fruit = useSelector(state => state.fruit);
  const memo = useSelector(state => state.memo);
  const dispatch = useDispatch();

  // 1번
  const [userValue, setUserValue] = useState([]);
  const handleUserChange = (event) => {
    setUserValue(event.target.value);
  }
  const handleUserSubmit = (event) => {
    event.preventDefault();
    dispatch(actions.User(userValue))
  }

  // 4번
  const fruitList = ['banana', 'strawberry', 'apple', 'melon'];
  const fruitListSort = (fruit === 'asc') ? fruitList.sort() : fruitList.sort().reverse();

  // 5번
  const [memoValue, setMemoValue] = useState({
    memoSubject: '',
    memoContent: '',
  });
  const { memoSubject, memoContent } = memoValue;
  const handleMemoChange = (event) => {
    const { name, value } = event.target;
    setMemoValue({
      ...memoValue,
      [name]: value,
    })
  }
  const handleMemoSubmit = (event) => {
    let currentId = memo[memo.length - 1].id;
    event.preventDefault();
    const memoAdd = {
      id: currentId + 1,
      memoSubject,
      memoContent,
    }
    dispatch(actions.MemoAdd(memoAdd));
    setMemoValue({
      memoSubject: '',
      memoContent: '',
    })
    event.target.reset();
    currentId++;
  }
  const handleMemoDelete = (event) => {
    const { parentNode } = event.target;
    const index = [...parentNode.parentElement.children].indexOf(parentNode);
    dispatch(actions.MemoDelete(index));
  }
  const handleMemoEdit = (event) => {
    const { value } = event.target;
    const { parentNode } = event.target.parentNode;
    const index = [...parentNode.parentElement.children].indexOf(parentNode);
    dispatch(actions.MemoEdit(index, value));
  }
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleEditIndex, setToggleEditIndex] = useState('');
  const handleToggleEdit = (event) => {
    const { parentNode } = event.target;
    const index = [...parentNode.parentElement.children].indexOf(parentNode);
    setToggleEdit(!toggleEdit);
    setToggleEditIndex(index)
  }

  return (
    <div className="App">
      <header>
        <h1>ReduxStart</h1>
      </header>
      <main>
        <ul className="wrapper">
          <li>
            <h4>1. 당신의 이름은 <span>{user}</span> 입니다.</h4>
            <div>
              <form onSubmit={handleUserSubmit}>
                <input type="text" onChange={handleUserChange} />
                <input type="submit" />
              </form>
            </div>
          </li>
          <li>
            <h4>2. 당신의 나이는 <span>{age}</span>세입니다.</h4>
            <div>
              <button onClick={() => dispatch(actions.Increment(1))}>+</button>
              <button onClick={() => dispatch(actions.Decrement(1))}>-</button>
            </div>
          </li>
          <li>
            <h4>3. 당신은 <span>{(auth) ? '로그인' : '로그아웃'}</span> 상태입니다.</h4>
            <div>
              {
                (auth)
                  ?
                  <button onClick={() => dispatch(actions.Auth())}>Logout</button>
                  :
                  <button onClick={() => dispatch(actions.Auth())}>Login</button>
              }
            </div>
          </li>
          <li>
            <h4>4. 다음 리스트는 <span>{(fruit === 'asc') ? '오름차순' : '내림차순'}</span> 입니다.</h4>
            <div>
              {
                (fruit === 'asc')
                  ?
                  <button onClick={() => dispatch(actions.Desc())}>내림차순</button>
                  :
                  <button onClick={() => dispatch(actions.Asc())}>오름차순</button>
              }
            </div>
            <ol>
              {
                fruitListSort
                  .map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    )
                  })
              }
            </ol>
          </li>
          <li>
            <h4>5. 메모를 입력하세요.(총: <span>{memo.length}</span>개)</h4>
            <form onSubmit={handleMemoSubmit}>
              <input type="text" name="memoSubject" placeholder="제목을 입력하세요." onChange={handleMemoChange} />
              <input type="text" name="memoContent" placeholder="내용을 입력하세요." onChange={handleMemoChange} />
              <input type="submit" />
            </form>
            <ul>
              {
                memo
                  .map((item, index) => {
                    return (
                      <li key={index}>
                        <span>
                          <strong>[{index + 1}] {item.memoSubject}</strong> :&nbsp;
                          {
                            (toggleEdit && (toggleEditIndex === index))
                              ?
                              <input type="text" placeholder="내용을 입력하세요." onChange={handleMemoEdit} />
                              :
                              item.memoContent
                          }
                        </span>
                        {
                          (index !== 0) && <button onClick={handleToggleEdit}>수정</button>
                        }
                        {
                          (index !== 0) && <button onClick={handleMemoDelete}>삭제</button>
                        }
                      </li>
                    )
                  })
              }
            </ul>
          </li>
        </ul>
      </main>
      <footer>
        @kaldi
      </footer>
    </div>
  );

}