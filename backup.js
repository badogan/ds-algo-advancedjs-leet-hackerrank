import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
    
    state = {
        toggle: true,
        likes: 100
    }
    
    toggleFunc() {
        if (this.state.toggle){
            this.setState({likes:101,toggle:false})
        } else {
            this.setState({likes:100,toggle:true})
        }
    }
    
    render() {
        return (
            <>
                <div>
                    <h2>Like Button</h2>
                    <button className="like-button" className={this.state.toggle ? null : 'liked'} onClick={()=>this.toggleFunc()}>Like | {this.state.likes}</button>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}



// 

import React,{useState,useEffect} from 'react';

const USERS_URL = 'https://example.com/api/users';

export default function Table () {
    const [currentPage,setCurrentPage]=useState(0)
    const [count,setCount] = useState(null)
    const [results,setResults]= useState(null)
    const [showButton,setShowButton] = useState(false)
    
    useEffect(()=>{
        handleFirstPageRequest()
    },[])
    
    const handleFirstPageRequest = () => {
        setShowButton(false)
        const initialPage_URL = `${USERS_URL}?page=0`
        fetch(initialPage_URL).then(res=>res.json()).then(data=>{
            setCount(data.count)
            setResults(data.results)
            setShowButton(true)
        })
    }
    
    const handlePreviousPageRequest = () => {
        if (currentPage!==0){
            setShowButton(false)
            const constructed_URL = `${USERS_URL}?page=${currentPage-1}`
            fetch(constructed_URL).then(res=>res.json()).then(data=>{
                setCount(data.count)
                setResults(data.results)
                setCurrentPage(currentPage-1)
                setShowButton(true)
            })
        }
    }
    
    const handleNextPageRequest = () => {
        if (currentPage <= Math.floor(count/10)-1){
            setShowButton(false)
            const constructed_URL = `${USERS_URL}?page=${currentPage+1}`
            fetch(constructed_URL).then(res=>res.json()).then(data=>{
                setCount(data.count)
                setResults(data.results)
                setCurrentPage(currentPage+1)
                setShowButton(true)
            })
        }
    }
    
       const handleLastPageRequest = () => {
           setShowButton(false)
           const constructed_URL = `${USERS_URL}?page=${Math.floor(count/10)}`
           fetch(constructed_URL).then(res=>res.json()).then(data=>{
               setCount(data.count)
               setResults(data.results)
               setCurrentPage(currentPage+1)
               setShowButton(true)
            })
    }
    
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
        //  render elements in tbody
        {results.map(item=>{
        <tr>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
        </tr>
        })}
        </tbody>
      </table>
      <section className="pagination">
        <button disabled={!showButton} onClick={()=>handleFirstPageRequest} className="first-page-btn">first</button>
        <button disabled={!showButton} onClick={()=>handlePreviousPageRequest} className="previous-page-btn">previous</button>
        <button disabled={!showButton} onClick={()=>handleNextPageRequest} className="next-page-btn">next</button>
        <button disabled={!showButton} onClick={()=>handleLastPageRequest} className="last-page-btn">last</button>
      </section>
    </div>
  );
};
